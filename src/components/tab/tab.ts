/*
 * @Autor: costa
 * @Date: 2023-07-13 15:31:04
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 16:08:14
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import styled from "vue3-styled-components";

const TabItemProps = {
    symbolId: { type: String, default: '' },
    width: { type: Number, default: 300 },
    height: { type: Number, default: 300 },
    margin: { type: Number, default: 10 },
    duration: { type: Number, default: 3 },
    backgroundColor: { type: String, default: 'transparent' }
}

const TabItemContentProps = {
    fontSize: { type: Number, default: 16 },
    fontColor: { type: String, default: '#fff' }
}

const TabProps = {
    symbolId: { type: String, default: '' },
    length: { type: Number, default: 300 }
}

export const TabItem = styled('div', TabItemProps)`
    position: relative;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    float: left;
    margin: ${props => props.margin}px;
    cursor: pointer;

    &.active {
        rect {
            stroke-dasharray:${props => props.width + props.height}; 
            animation: blinker-active-${props => props.symbolId} ${props => props.duration}s linear infinite;
        }
    }

    &:hover {
        rect {
            animation: blinker-hover-${props => props.symbolId} ${props => props.duration}s linear infinite;
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
`;

export const ItemBorder = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const ItemContent = styled('div', TabItemContentProps)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fontSize}px;
    color: ${props => props.fontColor};
`;

export const ItemText = styled.span`
    margin: 0 5px;
`;

export const ItemIcon = styled.span``;

export const Tab = styled('div', TabProps)`
    position: absolute;
    width: 100%;
    height: 100%;

    @keyframes blinker-hover-${props => props.symbolId} {
        0% { stroke-dashoffset: 0; stroke-dasharray: 0 10000; }
        50% { stroke-dasharray:${props => props.length}; }
        100% { stroke-dashoffset: -${props => (props.length) * 2}; stroke-dasharray: 10000 0;}
    }

    @keyframes blinker-active-${props => props.symbolId} {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -${props => (props.length) * 2};}
    }
`;