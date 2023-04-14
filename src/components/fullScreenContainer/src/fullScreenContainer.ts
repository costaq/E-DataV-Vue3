/*
 * @Autor: costa
 * @Date: 2023-04-07 16:40:10
 * @LastEditors: costa
 * @LastEditTime: 2023-04-07 17:46:48
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import type { ExtractPropTypes } from "vue"

export const fullScreenContainerProps = {
    /**
    * @description full 全部拉伸 | full-width 宽度拉伸 | full-height 高度拉伸 | initial 初始化默认不拉伸
    */
    type: {
        type: String,
        required: false,
        default: 'full'
    },
    /**
     * @description 大屏设计稿宽度
     */
    width: {
        type: Number,
        required: false,
        default: 1920
    },
    /**
     * @description 大屏设计稿高度
     */
    height: {
        type: Number,
        required: false,
        default: 1080
    }
}

export type FullScreenContainerProps = ExtractPropTypes<typeof fullScreenContainerProps>;