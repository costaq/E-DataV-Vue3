/*
 * @Autor: costa
 * @Date: 2023-07-25 10:46:01
 * @LastEditors: costa
 * @LastEditTime: 2023-07-25 10:46:47
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { defineComponent } from "vue";
import { ThemeProvider, css } from "vue3-styled-components";

const position = css`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const GlobalBox = defineComponent({
    props: {
        className: {
            type: String,
            required: true
        }
    },
    setup(props, { slots }) {
        const { className } = props;
        return () => (
            <ThemeProvider class={className} style={position} theme={{}}>
                {slots.default?.()}
            </ThemeProvider>
        )
    }
})