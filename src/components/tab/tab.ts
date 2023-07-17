import styled from "vue3-styled-components";

const TabItemProps = {
    width: { type: Number, default: 300 },
    height: { type: Number, default: 300 },
    margin: { type: Number, default: 10 },
    fontSize: { type: Number, default: 16 },
    fontColor: { type: String, default: '#fff' },
    duration: { type: Number, default: 3 },
    backgroundColor: { type: String, default: 'transparent' }
}

export const TabItem = styled('svg', TabItemProps)`
    position: relative;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    float: left;
    margin: ${props => props.margin}px;
    cursor: pointer;

    &.active {
        rect {
            stroke-dasharray:${props => props.width + props.height}; 
            animation: blinker-active ${props => props.duration}s linear infinite;
        }
    }

    &:hover {
        rect {
            animation: blinker-hover ${props => props.duration}s linear infinite;
        }
    }

    rect {
        height: ${props => props.height}px;
        width: ${props => props.width}px;
        fill: ${props => props.backgroundColor};
        stroke-dasharray: 0 10000;
        stroke-dashoffset: 0;
        stroke-width: 3px;
    }
    
    text {
        fill: ${props => props.fontColor};
        text-anchor: middle;
        dominant-baseline: middle;
        font-size: ${props => props.fontSize}px;
    }

    @keyframes blinker-hover {
        0% { stroke-dashoffset: 0; stroke-dasharray: 0 10000; }
        50% { stroke-dasharray:${props => props.width + props.height}; }
        100% { stroke-dashoffset: -${props => (props.width + props.height) * 2}; stroke-dasharray: 10000 0;}
    }

    @keyframes blinker-active {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -${props => (props.width + props.height) * 2};}
    }
`;

export const Tab = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;