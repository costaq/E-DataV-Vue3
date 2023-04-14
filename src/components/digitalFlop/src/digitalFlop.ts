import { ExtractPropTypes } from "vue";

export const digitalFlopProps = {
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