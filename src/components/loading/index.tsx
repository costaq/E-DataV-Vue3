/*
 * @Autor: costa
 * @Date: 2023-10-11 13:21:06
 * @LastEditors: costa
 * @LastEditTime: 2023-10-24 10:49:27
 * @Description: loading组件
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, defineComponent } from "vue";
import { withInstall } from "../../utils/common";
import { LoadingBall, LoadingCircle, LoadingContainer } from "./loading.style";
import { Theme } from "../../mixins/theme";

const loadingProps = {
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
    name: 'ELoading',
    props: loadingProps,
    mixins: [Theme],
    setup(props, { slots }) {
        return () =>
            <LoadingContainer class="e-loading">
                <LoadingCircle borderColor={props.borderColor} size={props.size}>
                    <LoadingBall color={props.borderColor} />
                    {slots.default?.()}
                </LoadingCircle>
            </LoadingContainer>
    }
}));