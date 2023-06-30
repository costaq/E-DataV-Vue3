/*
 * @Autor: costa
 * @Date: 2023-04-04 14:59:47
 * @LastEditors: costa
 * @LastEditTime: 2023-06-21 14:49:54
 * @Description: 数字翻牌器
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { withInstall } from '../../utils/common';
import { animation } from '../../utils/animation';
import { GlobalFontStyle } from '../styled/GlobalStyle';
// import './index.scss';

const digitalFlopProps = {
    /**
    * @description 终止值
    */
    value: {
        type: Number,
        required: false,
        default: 1000
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
     * @description 字体大小
     */
    fontSize: {
        type: Number,
        required: false,
        default: 50
    },
    /**
     * @description 字体库 内置 electronic
     */
    fontFamily: {
        type: String,
        required: false,
        default: 'electronic'//'electronic'
    },
    /**
     * @description 字体颜色
     */
    color: {
        type: String,
        required: false,
        default: '#000'
    },
    /**
     * @description 千位分隔符
     */
    separator: {
        type: String,
        required: false,
        default: ''
    }
}

export type DigitalFlopProps = ExtractPropTypes<typeof digitalFlopProps>;

export const EDigitalFlop = withInstall(defineComponent({
    name: 'EDigitalFlop',
    props: digitalFlopProps,
    setup(props) {
        const displayVal = ref<string>('0');
        const startVal = ref<number>(0);
        const styles = reactive({
            fontFamily: `${props.fontFamily}`,
            fontSize: `${props.fontSize}px`,
            color: props.color
        });

        const start = () => {
            animation(props.duration, startVal.value, props.value, (value) => {
                displayVal.value = formatVal(value);
            });
        }

        /**
         * @description 格式化数值
         * @param val 
         * @returns 
         */
        const formatVal = (val: number) => {
            const num = val.toFixed(props.decimals);
            const numStr = String(num);
            const x = numStr.split('.');
            // 整数部分
            let x1 = x[0];
            // 小数点部分
            const x2 = x.length > 1 ? `.${x[1]}` : '';
            // 数字后面是三位数字
            const rgx = /(\d+)(\d{3})/;
            // 有分隔符并且非数字
            if (props.separator && typeof props.separator !== 'number') {
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + props.separator + '$2');
                }
            }
            return `${x1}${x2}`;
        }

        // 监听传入参数value，当发生变化，将上一次的结果赋给开始值，然后开始动画
        watch(() => props.value, (newValue, oldValue) => {
            startVal.value = oldValue;
            start();
        })

        onMounted(() => {
            start();
        });

        return () => (
            <>
                <GlobalFontStyle></GlobalFontStyle>
                <span class='e-digital-flop' style={styles}>{displayVal.value}</span>
            </>
        );
    },
}));

