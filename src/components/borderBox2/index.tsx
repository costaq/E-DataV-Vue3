/*
 * @Autor: costa
 * @Date: 2023-07-20 10:42:28
 * @LastEditors: costa
 * @LastEditTime: 2023-08-10 13:24:05
 * @Description: 边框组件2
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { BorderContainer } from './borderContainer';
import { GlobalBox } from "../styled/GlobalBox";
import { useResize } from "../../hooks/useResize";

const borderBoxProps = {
    /**
     * @description 边框颜色
     */
    borderColor: {
        type: String,
        default: "#4cc7f3"
    },
    /**
     * @description 边框宽度
     */
    borderWidth: { 
        type: Number, 
        default: 2 
    },
    /**
     * @description 边框线长度
     */
    lineWidth: { 
        type: Number, 
        default: 10 
    },
    /**
     * @description 背景色
     */
    backgroundColor: { 
        type: String, 
        default: 'rgba(76, 199, 243, 0.15)' 
    }
};

export type EBorderBox2Props = ExtractPropTypes<typeof borderBoxProps>;

export const EBorderBox2 = withInstall(defineComponent({
    name: 'EBorderBox2',
    props: borderBoxProps,
    setup(props, { slots }) {
        const { borderColor, borderWidth, lineWidth, backgroundColor } = props;
        const { domRef, domSize } = useResize();
        return () => (
            <GlobalBox className='e-border-box-2' ref={domRef}>
                <BorderContainer borderColor={borderColor} borderWidth={borderWidth} lineWidth={lineWidth} backgroundColor={backgroundColor}>
                    {slots.default?.()}
                </BorderContainer>
            </GlobalBox>
        );
    },
}));