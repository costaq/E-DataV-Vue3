/*
 * @Autor: costa
 * @Date: 2023-11-16 16:29:30
 * @LastEditors: costa
 * @LastEditTime: 2023-11-23 10:33:35
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, computed, defineComponent, onMounted, ref, watch } from "vue";
import { withInstall } from "../../utils/common";
import { Theme } from "../../mixins/theme";
import { GaugeContainer, GaugeText, Graduate, GaugeTextContainer } from "./gaugeChart.style";
import { animation } from "../../utils/animation";
import { GlobalFontStyle } from "../styled/GlobalStyle";
import { useResize } from "../../hooks/useResize";

const gaugeChartProps = {
    /**
     * @description 百分比值
     */
    value: {
        type: Number,
        default: 0,
        validator: (val: number) => {
            return val >= 0 && val <= 100;
        }
    },
    /**
     * @description 描述文字
     */
    text: {
        type: String,
        default: '',
        required: false
    },
    /**
     * @description 数值字体大小
     */
    valueFontSize: {
        type: Number,
        default: 30
    },
    /**
     * @description 描述文字字体大小
     */
    textFontSize: {
        type: Number,
        default: 24
    },
    /**
     * @description 文本的上下间距
     */
    spacing: {
        type: Number,
        default: 2
    }
}

export type EGaugeChartProps = ExtractPropTypes<typeof gaugeChartProps>;

export const EGaugeChart = withInstall(defineComponent({
    name: 'EGaugeChart',
    props: gaugeChartProps,
    mixins: [Theme],
    setup(props) {
        const displayVal = ref<string>('0%');
        const startVal = ref<number>(0);
        const { domRef, domSize } = useResize();

        // 计算角度
        const calcDeg = (i: number) => {
            return i / 100 * 360;
        }

        // 宽高的最小值
        const minSize = computed<number>(() => Math.min(domSize.width, domSize.height));

        // 动画开始
        const start = () => {
            animation(1000, startVal.value, props.value, (value) => {
                displayVal.value = formatVal(value);
            });
        }

        const formatVal = (val: number) => {
            return `${(+val).toFixed(0)}%`;
        };

        // 监听值的变化，重新开始动画
        watch(() => props.value, (newValue, oldValue) => {
            startVal.value = oldValue;
            start();
        })

        onMounted(() => {
            start();
        });

        return () => (
            <GaugeContainer ref={domRef}>
                <GlobalFontStyle></GlobalFontStyle>
                {
                    Array.from({ length: 100 }).map((item, i) =>
                        <Graduate
                            key={i}
                            parentSize={minSize.value}
                            deg={calcDeg(i)}
                            bg={props.value > i ? `hsl(${calcDeg(i)}, 100%, 50%)` : '#000'}
                        />
                    )
                }

                <GaugeTextContainer>
                    <GaugeText spacing={props.spacing} fontSize={props.textFontSize} color={`hsl(${calcDeg(props.value)}deg, 100%, 50%)`}>
                        {props.text}
                    </GaugeText>
                    <GaugeText spacing={props.spacing} fontSize={props.valueFontSize} color={`hsl(${calcDeg(props.value)}deg, 100%, 50%)`}>
                        {displayVal.value}
                    </GaugeText>
                </GaugeTextContainer>
            </GaugeContainer>
        );
    }
}));