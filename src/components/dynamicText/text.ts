import { PropType } from "vue";
import styled from "vue3-styled-components";

const textProps = {
    colors: { type: Array as PropType<string[]>, default: ['#fff', '#1e80ff'] },
    duration: { type: Number, default: 1 },
    delay: { type: Number, default: 0 },
    spacing: { type: Number, default: 5 },
}

export const Text = styled('span', textProps)`
    color: ${props => props.colors[0]};
    font-size: 36px;
    animation: text-gradient ${props => props.duration}s linear ${props => props.delay}s infinite alternate;
    margin: 0 ${props => props.spacing}px;

    @keyframes text-gradient {
        to {
            color: ${props => props.colors[1]};
        }
    }
`;