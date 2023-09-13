/*
 * @Autor: costa
 * @Date: 2023-09-12 17:26:39
 * @LastEditors: costa
 * @LastEditTime: 2023-09-13 15:21:45
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ComponentPublicInstance, ExtractPropTypes, PropType, defineComponent, nextTick, onMounted, reactive, ref } from "vue";
import { withInstall } from "../../utils/common";
import { DomSize, useResize } from "../../hooks/useResize";
import { GlobalBox } from "../styled/GlobalBox";
import { BorderContainer, BorderTitle } from "./borderContainer";

type TextPosition = 'left' | 'center' | 'right';

const borderBoxProps = {
    /**
     * @description 边框颜色
     */
    borderColor: {
        type: String,
        default: "#00ecfb"
    },
    /**
     * @description 边框宽度
     */
    borderWidth: {
        type: Number,
        default: 2
    },
    /**
     * @description 背景色
     */
    backgroundColor: {
        type: String,
        default: '#00ecfb26'
    },
    /**
     * @description 标题字体大小
     */
    fontSize: {
        type: Number,
        default: 16
    },
    /**
     * @description 标题字体颜色
     */
    fontColor: {
        type: String,
        default: '#000'
    },
    /**
     * @description 标题位置
     */
    textPosition: {
        type: String as PropType<TextPosition>,
        default: 'left'
    },
    /**
     * @description 标题文本
     */
    text: {
        type: String,
        default: '',
        validator(value: string) {
            return !!value;
        }
    }
}

export type EBorderBox3Props = ExtractPropTypes<typeof borderBoxProps>;

export const EBorderBox3 = withInstall(defineComponent({
    name: 'EBorderBox3',
    props: borderBoxProps,
    setup(props, { slots }) {
        const { domRef, domSize } = useResize();
        const titleRef = ref<ComponentPublicInstance>();
        const titleSize = reactive<DomSize>({
            width: 0,
            height: 0
        });

        onMounted(() => {
            const { clientHeight = 0, clientWidth = 0 } = titleRef.value?.$el || {};
            titleSize.height = clientHeight;
            titleSize.width = clientWidth;
        });

        return () => (
            <GlobalBox className='e-border-box-3' ref={domRef}>
                <BorderContainer borderColor={props.borderColor} borderWidth={props.borderWidth} backgroundColor={props.backgroundColor}>
                    <BorderTitle
                        fontColor={props.fontColor}
                        fontSize={props.fontSize}
                        textPosition={props.textPosition}
                        backgroundColor={props.borderColor}
                        ref={titleRef}
                        height={titleSize.height}
                        width={titleSize.width}>
                        {props.text}
                    </BorderTitle>
                    {slots.default?.()}
                </BorderContainer>
            </GlobalBox>
        );
    },
}));