/*
 * @Autor: costa
 * @Date: 2023-10-11 13:21:06
 * @LastEditors: costa
 * @LastEditTime: 2023-10-11 15:40:27
 * @Description: loading组件
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { LoadingBall, LoadingCircle, LoadingContainer, LoadingText } from "./loading.style";
import { Theme } from "../../mixins/theme";

const loadingProps = {
    /**
     * @description 文字颜色
     */
    fontColor: {
        type: String,
        default: '#1e80ff'
    },
    /**
     * @description 文字字体大小
     */
    fontSize: {
        type: Number,
        default: 16
    },
    /**
     * @description 边框颜色
     */
    borderColor: {
        type: String,
        default: '#1e80ff'
    },
    /**
     * @description 尺寸，即宽高
     */
    size: {
        type: Number,
        default: 120
    },
}

export type ELoadingProps = ExtractPropTypes<typeof loadingProps>;

export const ELoading = withInstall(defineComponent({
    name: 'EDynamicText',
    props: loadingProps,
    mixins: [Theme],
    setup(props, { slots }) {
        return () =>
            <LoadingContainer class="e-loading">
                <LoadingCircle borderColor={props.borderColor} size={props.size}>
                    <LoadingBall color={props.borderColor} />
                    <LoadingText color={props.fontColor} fontSize={props.fontSize}>{slots.default?.()}</LoadingText>
                </LoadingCircle>
            </LoadingContainer>
    }
}));