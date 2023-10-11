/*
 * @Autor: costa
 * @Date: 2023-10-11 13:21:15
 * @LastEditors: costa
 * @LastEditTime: 2023-10-11 15:46:31
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import styled from "vue3-styled-components";
import { colorRgba } from "../../utils/color";

const loadingCircleProps = {
    borderColor: { type: String, default: "#1e80ff" },
    size: { type: Number, default: 120 }
};

const loadingTextProps = {
    color: { type: String, default: "#1e80ff" },
    fontSize: { type: Number, default: 16 }
}

const loadingBallProps = {
    color: { type: String, default: "#1e80ff" },
}

export const LoadingContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingCircle = styled('div', loadingCircleProps)`
    position: relative;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    border: 3px solid ${props => colorRgba(props.borderColor, 0.2)};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: 100%;
        height: 100%;
        border: 3px solid transparent;
        border-top: 3px solid ${props => props.borderColor};
        border-right: 3px solid ${props => props.borderColor};
        border-radius: 50%;
        animation: circle-spin 2s linear infinite;
    }

    @keyframes circle-spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

export const LoadingBall = styled('span', loadingBallProps)`
    --size: 16px;
    --line: 4px;
    display: block;
    position: absolute;
    top: calc(50% - calc(var(--line) / 2));
    left: 50%;
    width: 50%;
    height: var(--line);
    transform-origin: left;
    animation: ball-spin 2s linear infinite;

    &::before {
        content: '';
        position: absolute;
        width: var(--size);
        height: var(--size);
        background: ${props => props.color};
        box-shadow: 0 0 20px 5px ${props => colorRgba(props.color, 0.5)};
        border-radius: 50%;
        right: calc(var(--size) / -2);
        top: calc(var(--size) / -2 + 2px);
    }

    @keyframes ball-spin {
        0% { transform: rotate(45deg); }
        100% { transform: rotate(405deg); }
    }
`;

export const LoadingText = styled('span', loadingTextProps)`
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 10px ${props => props.color};
    box-shadow: 0 0 20px ${props => colorRgba(props.color, 0.15)};
`;