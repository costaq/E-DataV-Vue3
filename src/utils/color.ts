/**
 * @description 转换成rgba
 */
export function colorRgba(sHex: string, alpha: number = 1) {
    if (sHex.indexOf('rgb') === -1) {
        // 十六进制颜色值的正则表达式
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
        /* 16进制颜色转为RGB格式 */
        let sColor = sHex.toLowerCase();
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4 || sColor.length === 5) {
                let sColorNew = '#';
                for (let i = 1; i < sColor.length; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            // 如果有透明度并且传入的透明度为1再执行
            if (sColor.length === 9 && alpha === 1) {
                alpha = Number((parseInt('0x' + sColor.slice(7, 9)) / 255).toFixed(2));
            }
            //  处理六位的颜色值
            const sColorChange: any = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
            }
            return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
        } else {
            return sColor;
        }
    } else { // 若原本就是rgba或rgb，则需要再次转换
        const colorList = sHex.replace('rgba(', '').replace('rgb(', '').replace(')', '').replace(/\s*/g, '').split(',');
        if (colorList.length === 4) { // 若为rgba
            colorList.pop();
        } // 删除最后一个
        return ('rgba(' + colorList.join(',') + ',' + alpha + ')');
    }
}