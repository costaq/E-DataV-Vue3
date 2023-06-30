/*
 * @Autor: costa
 * @Date: 2023-06-21 14:51:11
 * @LastEditors: costa
 * @LastEditTime: 2023-06-21 14:51:50
 * @Description: 插入全局样式
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { flatten } from 'lodash';
import stylis from 'stylis';

export function InjectGlobal(rules: TemplateStringsArray) {
    return (id: string) => {
        const head = document.getElementsByTagName('head')[0];

        const fontStyle = head.querySelector(`#${id}`);
    
        if(!fontStyle) {
            let style = document.createElement('style');
    
            style.id = id;
        
            const flatCSS = flatten(rules).join('');
        
            const css = stylis('', flatCSS);
        
            style.appendChild(document.createTextNode(css));
        
            head.appendChild(style);
        }
        return () => <> </>;
    }
}