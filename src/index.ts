/*
 * @Autor: costa
 * @Date: 2023-04-04 14:53:33
 * @LastEditors: costa
 * @LastEditTime: 2023-07-17 14:34:45
 * @Description: 入口文件
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { EDigitalFlop } from './components/digitalFlop';
import { EFullScreenContainer } from './components/fullScreenContainer';
import { EBorderBox1 } from './components/border-box-1';
import { EWaterLevelPond } from './components/waterLevelPond';
import { ETab } from './components/tab';
import type { App } from 'vue';

export default function EDataV(app: App) {
    const components = [EDigitalFlop, EFullScreenContainer, EBorderBox1, EWaterLevelPond, ETab];

    components.forEach(component => app.component(component.name, component));
}

export * from './components/digitalFlop';
export * from './components/fullScreenContainer';
export * from './components/border-box-1';
export * from './components/waterLevelPond';
export * from './components/tab';

