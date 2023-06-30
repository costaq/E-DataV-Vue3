/*
 * @Autor: costa
 * @Date: 2023-05-11 16:51:20
 * @LastEditors: costa
 * @LastEditTime: 2023-06-21 14:54:43
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent } from 'vue';
import { withInstall } from '../../utils/common';
import { BorderContent, BorderBox, BorderSvgContainer } from '../styled/BorderBox';
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
     * @description 渐变开始颜色
     */
    startColor: {
        type: String,
        required: false,
        default: '#5ddcff'
    },
    /**
     * @description 渐变结束颜色
     */
    endColor: {
        type: String,
        required: false,
        default: '#4e00c2'
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
        const { borderRadius, borderWidth, startColor, endColor, duration } = props;

        return () => (
            <BorderBox className='e-border-box-1' ref={domRef}>
                <BorderSvgContainer height={domSize.height} width={domSize.width}>
                    <defs>
                        <linearGradient id='gradient1' x1='50%' y1='0%' x2='75%' y2='100%' >
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
                        stroke='url("#gradient1")'
                        fill='transparent'
                        stroke-width={borderWidth}
                    />
                </BorderSvgContainer>
                <BorderContent>
                    {slots.default?.()}
                </BorderContent>
            </BorderBox>
        );
    },
}));