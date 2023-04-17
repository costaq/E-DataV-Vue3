/*
 * @Autor: costa
 * @Date: 2023-04-04 14:59:47
 * @LastEditors: costa
 * @LastEditTime: 2023-04-17 11:11:25
 * @Description: 数字翻牌器
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { withInstall } from '../../utils/common';
import { animation } from '../../utils/animation';
import './index.scss';
import { digitalFlopProps } from './digitalFlop';

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
            <span style={styles}>{displayVal.value}</span>
        );
    },
}));

