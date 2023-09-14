import { provide } from "vue";

export const Theme = {
    created() {
        // 去除vue3-styled-components的主题
        provide('theme', '');
    }
};