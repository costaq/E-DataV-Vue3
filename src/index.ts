/*
 * @Autor: costa
 * @Date: 2023-04-04 14:53:33
 * @LastEditors: costa
 * @LastEditTime: 2023-11-21 15:23:37
 * @Description: 入口文件
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { EDigitalFlop } from './components/digitalFlop';
import { EFullScreenContainer } from './components/fullScreenContainer';
import { EBorderBox1 } from './components/borderBox1';
import { EBorderBox2 } from './components/borderBox2';
import { EBorderBox3 } from './components/borderBox3';
import { EWaterLevelPond } from './components/waterLevelPond';
import { ETab } from './components/tab';
import { EScrollRankingBoard } from './components/scrollRankingBoard';
import { EDynamicText } from './components/dynamicText';
import { ELoading } from './components/loading';
import { EGaugeChart } from './components/gaugeChart';
import type { App } from 'vue';

export default function EDataV(app: App) {
    const components = [EDigitalFlop, EFullScreenContainer, EBorderBox1, EBorderBox2, EBorderBox3, EWaterLevelPond, ETab, EScrollRankingBoard, EDynamicText, ELoading, EGaugeChart];

    components.forEach(component => app.component(component.name, component));
}

export * from './components/digitalFlop';
export * from './components/fullScreenContainer';
export * from './components/borderBox1';
export * from './components/borderBox2';
export * from './components/borderBox3';
export * from './components/waterLevelPond';
export * from './components/tab';
export * from './components/scrollRankingBoard';
export * from './components/dynamicText';
export * from './components/loading';
export * from './components/gaugeChart';

