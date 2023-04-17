/*
 * @Autor: costa
 * @Date: 2023-04-07 10:46:04
 * @LastEditors: costa
 * @LastEditTime: 2023-04-17 11:01:09
 * @Description: 全屏组件
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent, onBeforeMount, onMounted } from "vue";
import { fullScreenContainerProps } from './fullScreenContainer';
import { withInstall } from '../../utils/common';

export type FullScreenContainerProps = ExtractPropTypes<typeof fullScreenContainerProps>;

export const EFullScreenContainer = withInstall(defineComponent({
    name: 'EFullScreenContainer',
    props: fullScreenContainerProps,
    setup(props, { slots }) {
        const scale = () => {
            const windowWidth =
                document.documentElement.clientWidth || window.screen.width;

            //X轴scale,全屏时根据设置值计算
            const xScale = windowWidth / props.width;

            const windowHeight =
                document.documentElement.clientHeight || window.screen.height;

            //Y轴scale,全屏时根据设置值计算
            const yScale = windowHeight / props.height;

            let scale = '1';
            let overflow = 'overflow: hidden';

            switch (props.type) {
                case 'full':
                    scale = `${xScale}, ${yScale}`;
                    overflow = 'overflow: hidden';
                    break
                case 'full-width':
                    scale = `${xScale}, ${xScale}`;
                    overflow = 'overflow-y: scroll';
                    break
                case 'full-height':
                    scale = `${yScale}, ${yScale}`;
                    overflow = 'overflow-x: scroll';
                    break
                case 'initial':
                    scale = '1';
                    overflow = 'overflow: auto';
                    break
            }

            let css = `body{transform: scale(${scale}); 
                height: ${props.height + 'px'}; width: ${props.width}px; 
                transform-origin: left top; ${overflow};}`;

            const head = document.getElementsByTagName('head')[0];

            let style = document.createElement('style');

            style.type = 'text/css';

            style.appendChild(document.createTextNode(css));

            head.appendChild(style);
        }

        onBeforeMount(() => {
            scale();

            window.onresize = () => scale()
        });

        return () => (
            <>{slots['default'] && slots['default']()}</>
        );
    },
}));