import { ExtractPropTypes, defineComponent } from "vue";
import styled, { ThemeProvider, css } from "vue3-styled-components";

const position = css`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const BorderContent = styled.div`
    ${() => position}
`;

export const BorderSvgContainer = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
`;

export const BorderBox = defineComponent({
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