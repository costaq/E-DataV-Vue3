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