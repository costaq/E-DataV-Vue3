/*
 * @Autor: costa
 * @Date: 2023-05-11 16:51:20
 * @LastEditors: costa
 * @LastEditTime: 2023-07-25 10:49:42
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, PropType, defineComponent } from 'vue';
import { genNonDuplicateID, withInstall } from '../../utils/common';
import { BorderContent, BorderSvgContainer } from '../styled/BorderBox';
import { GlobalBox } from '../styled/GlobalBox';
import { useResize } from '../../hooks/useResize';

const borderBoxProps = {
    /**
     * @description 边框圆角
     */
    borderRadius: {
        type: Number,
        required: false,
        default: 3
    },
    /**
     * @description 边框宽度
     */
    borderWidth: {
        type: Number,
        required: false,
        default: 3
    },
    /**
     * @description 渐变颜色
     */
    colors: {
        type: Array as PropType<string[]>,
        required: false,
        default: () => ['#5ddcff', '#4e00c2'],
        validator(value: string[]) {
            return value.length === 2
        }
    },
    /**
     * @description 动画持续时间
     */
    duration: {
        type: Number,
        required: false,
        default: 4
    }
}

export type EBorderBox1Props = ExtractPropTypes<typeof borderBoxProps>;

export const EBorderBox1 = withInstall(defineComponent({
    name: 'EBorderBox1',
    props: borderBoxProps,
    setup(props, { slots }) {
        const { domRef, domSize } = useResize();
        const { borderRadius, borderWidth, colors, duration } = props;
        const symbolId = genNonDuplicateID();
        const startColor = colors.at(0);
        const endColor = colors.at(1);

        return () => (
            <GlobalBox className='e-border-box-1' ref={domRef}>
                <BorderSvgContainer height={domSize.height} width={domSize.width}>
                    <defs>
                        <linearGradient id={symbolId} x1='50%' y1='0%' x2='75%' y2='100%' >
                            <stop offset='0%' stop-color={startColor}>
                                <animate
                                    attributeName='stop-color'
                                    values={`${endColor};${startColor};${endColor}`} dur={`${duration}s`}
                                    repeatCount='indefinite'>
                                </animate>
                            </stop>
                            <stop offset='100%' stop-color={endColor}>
                                <animate
                                    attributeName='stop-color'
                                    values={`${startColor};${endColor};${startColor}`}
                                    dur={`${duration}s`}
                                    repeatCount='indefinite'>
                                </animate>
                            </stop>
                        </linearGradient>
                    </defs>
                    <rect
                        x={borderWidth}
                        y={borderWidth}
                        rx={borderRadius}
                        height={domSize.height > 0 ? domSize.height - borderWidth * 2: 0}
                        width={domSize.width > 0 ? domSize.width - borderWidth * 2: 0}
                        stroke={`url("#${symbolId}")`}
                        fill='transparent'
                        stroke-width={borderWidth}
                    />
                </BorderSvgContainer>
                <BorderContent>
                    {slots.default?.()}
                </BorderContent>
            </GlobalBox>
        );
    },
}));