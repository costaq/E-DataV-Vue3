/*
 * @Autor: costa
 * @Date: 2023-04-04 16:26:50
 * @LastEditors: costa
 * @LastEditTime: 2023-04-04 16:30:07
 * @Description: 动画函数
 * @Copyright: © 2023 by costa. All rights reserved.
 */

/**
* @description 动画函数
* @param {Number} duration 持续时间
* @param {Number} from 开始值
* @param {Number} to 差值
* @param {void} onProcess 处理回调
*/
const animation = (duration: number, from: number, to: number, onProcess: (val: number) => void) => {
    // 获取差值
    const dif = to - from;
    // 计算速度
    const speed = dif / duration;
    // 初始值
    let value = from;
    
    const startime = new Date();

    onProcess(value);

    const _run = () => {
        // 计算已经执行的时间
        const difTime = new Date().getTime() - startime.getTime();

        if(difTime > duration) {
            value = to;
            onProcess(value);
            return;
        }

        // 起始值+已经执行的时间*速度
        value = from + speed * difTime;

        onProcess(value);

        requestAnimationFrame(_run);
    }

    requestAnimationFrame(_run);
}

export {
    animation
}