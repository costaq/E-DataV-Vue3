/*
 * @Autor: costa
 * @Date: 2023-05-16 11:02:59
 * @LastEditors: costa
 * @LastEditTime: 2023-07-13 17:13:39
 * @Description: hooks 帮助类 获取组件可用宽高
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ComponentPublicInstance, onMounted, reactive, ref } from "vue";
import _ from 'lodash';

export interface DomSize {
    width: number;
    height: number;
}

export function useResize() {
    const domRef = ref<ComponentPublicInstance>();
    const domSize = reactive<DomSize>({
        width: 0,
        height: 0
    });

    function handleDomSizeChange() {
        const { clientWidth = 0, clientHeight = 0 } = domRef.value?.$el || {};
        domSize.height = clientHeight;
        domSize.width = clientWidth;
    }

    onMounted(() => {
        handleDomSizeChange();
    });

    return {
        domRef,
        domSize
    }
}




