<!--
 * @Autor: costa
 * @Date: 2023-04-04 14:41:34
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 16:13:59
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
## E-DataV
<a href="https://www.npmjs.com/package/e-datav-vue3">
    <img src="https://img.shields.io/npm/v/e-datav-vue3.svg" alt="LICENSE" />
</a>

### 什么是E-DataV?

* E-DataV是一个基于**Vue3**的数据可视化组件库（[Vue2版本](https://github.com/costaq/E-DataV)及[React版本](https://github.com/costaq/E-DataV-React)）
* 提供数据可视化大屏所需的各种组件，朋友写的[DataV](https://github.com/DataV-Team/DataV)组件库中已有的组件，我这边不会过多增加，最多是效果提升
* 因个人比较佛系，更新会比较慢，但会持续更新

### 链接

[E-DataV 官方文档](https://costaq.github.io/)


### npm安装

```shell
$ npm install e-datav-vue3
```

### 使用

```js
import Vue from 'vue'
import EDataV from 'e-datav-vue3'
// 全局全部组件注册
Vue.use(EDataV)

// 按需引入，全局注册
import { EDigitalFlop } from 'e-datav-vue3'
Vue.use(EDigitalFlop)

// 单组件内按需引入
<script setup>
import { EDigitalFlop } from 'e-datav-vue3';
</script>

```

### UMD版

```js

<body>
    <div id="app">
        <e-full-screen-container>
            <e-digital-flop :value="9999" separator="," color="#c75151"></e-digital-flop>
        </e-full-screen-container>
    </div>
</body>
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/e-datav-vue3/umd/e-datav-vue3.umd.js"></script>
<script>
    const { createApp } = Vue;
    const { EDigitalFlop, EFullScreenContainer } = EDataV;

    const App = createApp();
    App.component('EDigitalFlop', EDigitalFlop);
    App.component('EFullScreenContainer', EFullScreenContainer);
    App.mount('#app');
</script>

```