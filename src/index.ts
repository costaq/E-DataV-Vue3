/*
 * @Autor: costa
 * @Date: 2023-04-04 14:53:33
 * @LastEditors: costa
 * @LastEditTime: 2023-04-07 16:30:47
 * @Description: 入口文件
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { EDigitalFlop } from './components/digitalFlop';
import { EFullScreenContainer } from './components/fullScreenContainer';
import type { App } from 'vue';

export default function EDataV(app: App) {
    const components = [EDigitalFlop, EFullScreenContainer];

    components.forEach(component => app.component(component.name, component));
}

export * from './components/digitalFlop';
export * from './components/fullScreenContainer';

