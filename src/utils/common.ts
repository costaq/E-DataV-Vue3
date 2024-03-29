/*
 * @Autor: costa
 * @Date: 2023-04-04 15:42:54
 * @LastEditors: costa
 * @LastEditTime: 2023-10-10 09:27:21
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

/**
 * 生成不重复ID
 */
export function genNonDuplicateID() {
    let idStr = Date.now().toString(36) + Math.random().toString(36).substring(3);
    return idStr
}

// 防抖函数
export function debounce(fn: Function, delay: number) {
    let timer: any = null;
    return function (...args: any) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}