/*
 * @Autor: costa
 * @Date: 2023-08-31 15:22:02
 * @LastEditors: costa
 * @LastEditTime: 2023-09-14 14:31:32
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
/*
 * @Autor: costa
 * @Date: 2023-08-31 15:22:02
 * @LastEditors: costa
 * @LastEditTime: 2023-09-11 15:47:39
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { PropType, computed, defineComponent, watch } from "vue";
import { withInstall } from "../../utils/common";
import { ExtractPropTypes } from "vue";
import { Text, TextContainer } from "./text.style";
import { ThemeProvider } from "vue3-styled-components";

const dynamicTextProps = {
    /**
     * @description 文字
     */
    text: {
        type: String,
        default: ''
    },
    /**
     * @description 左右间距
     */
    spacing: {
        type: Number,
        default: 5
    },
    /**
     * @description 文本渐变颜色，只支持两种颜色，第一个为起始颜色，第二个为结束颜色
     */
    colors: {
        type: Array as PropType<string[]>,
        default: () => ['#fff', '#1e80ff'],
        validator: (val: number[]) => {
            return val.length === 2;
        }
    }
}

export type EDynamicTextProps = ExtractPropTypes<typeof dynamicTextProps>;

export const EDynamicText = withInstall(defineComponent({
    name: 'EDynamicText',
    props: dynamicTextProps,
    setup(props) {
        // 将字符串拆分为数组
        const spans = computed(() => {
            return props.text.split('');
        });

        const speed = computed(() => {
            return 1 / spans.value.length;
        })

        return () =>
            <ThemeProvider class='e-dynamic-text' theme={{}}>
                <TextContainer colors={props.colors}>
                    {spans.value.map((txt, index) => {
                        return <Text key={`${spans.value.length}${index}`} spacing={props.spacing} duration={spans.value.length * speed.value} delay={index * speed.value}>{txt}</Text>
                    })}
                </TextContainer>
            </ThemeProvider>
    }
}));