/*
 * @Autor: costa
 * @Date: 2023-07-20 10:42:28
 * @LastEditors: costa
 * @LastEditTime: 2023-07-25 11:35:43
 * @Description: 边框组件2
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { BorderContainer } from './borderContainer';
import { GlobalBox } from "../styled/GlobalBox";
import { useResize } from "../../hooks/useResize";

const borderBoxProps = {
    borderColor: { type: String, default: "#4cc7f3" },
    borderWidth: { type: Number, default: 2 },
    lineWidth: { type: Number, default: 10 },
    backgroundColor: { type: String, default: 'rgba(76, 199, 243, 0.15)' }
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
                <BorderContainer height={domSize.height} width={domSize.width} borderColor={borderColor} borderWidth={borderWidth} lineWidth={lineWidth} backgroundColor={backgroundColor}>
                    {slots.default?.()}
                </BorderContainer>
            </GlobalBox>
        );
    },
}));