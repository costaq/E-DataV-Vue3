import styled from "vue3-styled-components";

const boardItemProps = {
    height: { type: Number, default: 50 },
    color: { type: String, default: '#fff' },
}

const boardItemIconProps = {
    fontSize: { type: Number, default: 18 },
    color: { type: String, default: '#fff' },
}

const boardItemLabelProps = {
    fontSize: { type: Number, default: 14 },
}

const boardItemValueProps = {
    fontSize: { type: Number, default: 18 },
}

const boardItemShadowProps = {
    color: { type: String, default: '#28f8ff' },
}

export const BoardItem = styled('div', boardItemProps)`
    position: relative;
    height: ${props => props.height}px;
    width: 100%;
    display: flex;
    align-items: center;
    color: ${props => props.color};
    transition: all 0.3s;
    overflow: hidden;
    cursor: pointer;
    //background: #0070c342;
    padding: 0 10px;
    box-sizing: border-box;
`;

export const BoardItemIcon = styled('div', boardItemIconProps)`
    font-family: 'electronic';
    width: 50px;
    color: ${props => props.color};
    font-size: ${props => props.fontSize}px;
`;

export const BoardItemLabel = styled('div', boardItemLabelProps)`
    flex: 1;
    font-size: ${props => props.fontSize}px;
`;

export const BoardItemValue = styled('div', boardItemValueProps)`
    font-family: 'electronic';
    font-size: ${props => props.fontSize}px;
`;

export const BoardItemShadow = styled('div', boardItemShadowProps)`
        position: absolute;
        left: 0;
        bottom: 5px;
        height: 5px;
        width: 0;
        transform: translateX(-50%);
        background: radial-gradient(${props => props.color} 5%,transparent 80%);
        animation: shadow 3s linear infinite;

        @keyframes shadow {
            0% {
                width: 20%;
            }
            50% {
                width: 200%;
            }
            100% {
                width: 20%;
            }
        }
`;