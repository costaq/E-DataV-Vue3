/*
 * @Autor: costa
 * @Date: 2023-06-30 16:59:40
 * @LastEditors: costa
 * @LastEditTime: 2023-07-25 10:52:51
 * @Description: 水位图
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, PropType, defineComponent, onMounted, ref, watch } from "vue";
import { genNonDuplicateID, withInstall } from "../../utils/common";
import { BoxContent, WaterWave } from "./boxContainer";
import { animation } from "../../utils/animation";
import { GlobalBox } from "../styled/GlobalBox";

const waterLevelPondProps = {
    /**
     * @description 当前值
     */
    value: {
        type: Number,
        required: true,
        default: 100,
        validator(value: number) {
            return value <= 100
        }
    },
    /**
     * @description 小数点保留几位
     */
    decimals: {
        type: Number,
        required: false,
        default: 0,
        validator(value: number) {
            return value >= 0
        }
    },
    /**
     * @description 持续时间
     */
    duration: {
        type: Number,
        required: false,
        default: 3000
    },
    /**
     * @description 字体字号
     */
    fontSize: {
        type: Number,
        required: false,
        default: 36
    },
    /**
     * @description 字体颜色
     */
    fontColor: {
        type: String,
        required: false,
        default: '#fff'
    },
    /**
     * @description 背景色
     */
    backgroundColor: {
        type: String,
        required: false,
        default: 'transparent'
    },
    /**
     * @description 波浪颜色
     */
    waveColors: {
        type: Array as PropType<string[]>,
        required: false,
        default: () => ['#41a9e3', '#b0e0ff'],
        validator(value: string[]) {
            return value.length === 2
        }
    }
}

export type EWaterLevelPondProps = ExtractPropTypes<typeof waterLevelPondProps>;

export const EWaterLevelPond = withInstall(defineComponent({
    name: 'EWaterLevelPond',
    props: waterLevelPondProps,
    setup(props) {
        const { fontSize, decimals, fontColor, backgroundColor, waveColors } = props;
        const startVal = ref<number>(0);
        const displayVal = ref<number>(0);
        const symbolId = genNonDuplicateID();

        onMounted(() => {
            start();
        });

        watch(() => props.value, (newValue, oldValue) => {
            startVal.value = oldValue;
            start();
        })

        const start = () => {
            animation(props.duration, startVal.value, props.value, (value) => {
                displayVal.value = +value.toFixed(decimals);
            });
        }

        return () => (
            <GlobalBox className='e-water-level-pond'>
                <BoxContent fontSize={fontSize} fontColor={fontColor} backgroundColor={backgroundColor}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style="display: none;">
                        <symbol id={symbolId}>
                            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                        </symbol>
                    </svg>
                    <div class="percent">
                        <div class="value">{displayVal.value}</div>
                        <div class="suffix">%</div>
                    </div>
                    <WaterWave symbolId={symbolId} value={displayVal.value} waveColors={waveColors}>
                        <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
                            <use href={`#${symbolId}`}></use>
                        </svg>
                        <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
                            <use href={`#${symbolId}`}></use>
                        </svg>
                    </WaterWave>
                </BoxContent>
            </GlobalBox>
        );
    },
}));