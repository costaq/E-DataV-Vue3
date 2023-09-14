/*
 * @Autor: costa
 * @Date: 2023-07-05 16:38:51
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 16:10:26
 * @Description: 外容器
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import styled from "vue3-styled-components";

const boxContentProps = {
    fontSize: { type: Number, default: 12 },
    fontColor: { type: String, default: '#fff' },
    backgroundColor: { type: String, default: 'transparent' }
}

const waterWaveProps = {
    symbolId: { type: String, default: '' },
    value: { type: Number, default: 0 },
    waveColors: { type: Array<String>, default: () => [] }
}

export const BoxContent = styled('div', boxContentProps)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: ${props => props.backgroundColor};
    border-radius: 100%;
    overflow: hidden;

    .percent {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.fontColor};
        font-size: ${props => props.fontSize}px;
    }
`;

export const WaterWave = styled('div', waterWaveProps)`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    transform: translate(0, ${props => 100 - props.value}%);
    background: ${props => props.waveColors[0]};
    transition: all .3s;

.water_wave {
    width: 200%;
    position: absolute;
    bottom: 100%;
}

.water_wave_back {
    right: 0;
    fill: ${props => props.waveColors[1]};
    -webkit-animation: wave-back-${props => props.symbolId} 2s infinite linear;
    animation: wave-back-${props => props.symbolId} 2s infinite linear;
}

.water_wave_front {
    left: 0;
    fill: ${props => props.waveColors[0]};
    margin-bottom: -1px;
    -webkit-animation: wave-front-${props => props.symbolId} 1s infinite linear;
    animation: wave-front-${props => props.symbolId} 1s infinite linear;
}

@keyframes wave-front-${props => props.symbolId} {
    100% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
}

@keyframes wave-back-${props => props.symbolId} {
    100% {
      -webkit-transform: translate(50%, 0);
      transform: translate(50%, 0);
    }
}
`;