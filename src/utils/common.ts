/*
 * @Autor: costa
 * @Date: 2023-04-04 15:42:54
 * @LastEditors: costa
 * @LastEditTime: 2023-04-17 09:47:31
 * @Description: 组件install工具类
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import type { App, Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(comp: T) {
    const c = comp as SFCWithInstall<T>;
    // 为组件提供install安装方法，供按需引入
    c.install = function (app: App) {
        app.component((c as any).name, c);
    };

    return c;
}