## E-DataV
<a href="https://www.npmjs.com/package/e-datav-vue3">
    <img src="https://img.shields.io/npm/v/e-datav-vue3.svg" alt="LICENSE" />
</a>

### 什么是E-DataV?

* E-DataV是一个基于**Vue3**的数据可视化组件库（[Vue2版本](https://github.com/costaq/E-DataV)及[React版本](https://github.com/costaq/E-DataV-React)）
* 提供数据可视化大屏所需的各种组件，朋友写的[DataV](https://github.com/DataV-Team/DataV)组件库中已有的组件，我这边不会过多增加，最多是效果提升
* 因工作原因及个人比较佛系，更新会比较慢，但会持续更新


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
import { DigitalFlop } from 'e-datav-vue3'
Vue.use(DigitalFlop)

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

### 组件介绍

#### 数字翻牌器

```js

// Portal.vue
<template>
    <div>
        <e-digital-flop />
    </div>
</template>
<script setup>
import { EDigitalFlop } from 'e-datav-vue3';
</script>
```
##### 效果演示

<img src="./images/digital-flop.gif">

##### 可选参数
字段|类型|备注
-|-|-
value|Number|数值，默认1000
decimals|Number|小数点，默认0
duration|Number|持续时间，默认3000毫秒
fontSize|Number|字体大小，默认50
fontFamily|String|字体，默认液晶字体，传空值则恢复正常浏览器字体
color|String|颜色，默认#000
separator|String|千位分隔符，默认''


#### 水位图

```js

// Portal.vue
<template>
    <div>
        <e-water-level-pond style="width:200px;height:200px;" :value="56" :background-color="'#000'" />
    </div>
</template>
<script setup>
import { EWaterLevelPond } from 'e-datav-vue3';
</script>
```
##### 效果演示

<img src="./images/water-level-pond.gif">

##### 可选参数
字段|类型|备注
-|-|-
value|Number|数值，必填
decimals|Number|小数点，默认0
duration|Number|数字变动时动画持续时间，默认3000毫秒
fontSize|Number|字体大小，默认36
fontColor|String|颜色，默认#000
backgroundColor|String|背景色颜色，默认transparent透明
waveColors|String[]|水波颜色，默认['#41a9e3', '#b0e0ff']，第一个参数为前波浪，后一个参数为后波浪


#### Tab组件

```js

// Portal.vue
<template>
    <e-tab style="width:500px;height: 100px;" :items="items" :columns="3" @change="handleClick"></e-tab>
</template>
<script setup>
import { ETab } from 'e-datav-vue3';

const items = [
    {
        label: '测试1',
        value: '123'
    },
    {
        label: '测试2',
        value: '1234'
    },
    {
        label: '测试3',
        value: '1235'
    }
]

const handleClick = (value) => {
    console.log(value);
}
</script>
```
##### 效果演示

竖列效果

<img src="./images/tab1.gif">

横列效果

<img src="./images/tab2.gif">

##### 可选参数
字段|类型|备注
-|-|-
value|Number或String|非必填，必须是数字或字符串，指定当前值，若不指定，则会默认选中items中的第一个
items|TabItem[]|项，必填
columns|Number|列数，非必填，默认值3，表示显示3列，单竖列效果即传值1即可
margin|Number|间距，非必填，默认每项间距10px
fontSize|Number|文本字号，非必填，默认16
fontColor|Number|文本颜色，非必填，默认#fff
backgroundColor|Number|背景色，非必填，默认transparent
duration|Number|动画持续时间，非必填，默认值3，表示3秒
borderColors|Number|边框渐变颜色，非必填，默认值['#1CE3B6', '#1F38F1', '#F95A5A']

###### TabItem
字段|类型|备注
-|-|-
label|String|显示名
value|Number或String|值，必须是数字或字符串

###### 事件
事件名称|说明|回调参数
-|-|-
change|值变化时触发的事件|选中的item值

#### 全屏组件

根据屏幕尺寸，自动拉伸

```js

// Portal.vue
<template>
    <div>
        <e-full-screen-container>
            <div>
                <e-digital-flop />
            </div>
        </e-full-screen-container>
    </div>
</template>
<script setup>
import { EDigitalFlop, EFullScreenContainer } from 'e-datav-vue3';
</script>

```

##### 可选参数
字段|类型|备注
-|-|-
type|String|数值，默认'full', 其他可选类型：full（全屏拉伸） full-width（宽度拉伸 ）full-height（高度拉伸）initial （默认不拉伸）
width|Number|大屏设计稿宽度，也就是公司设计师出的效果图尺寸，默认1920
height|Number|大屏设计稿高度，默认1080


#### 边框组件

所有边框组件，根据父容器宽高自适应

边框组件1

```js

// Portal.vue
<template>
    <div style="width:200px;height:200px;">
        <e-border-box-1>
            <e-digital-flop />
        </e-border-box-1>
    </div>
</template>
<script setup>
import { EDigitalFlop, EBorderBox1 } from 'e-datav-vue3';
</script>

```

##### 效果演示

<img src="./images/border-box-1.gif">

##### 可选参数
字段|类型|备注
-|-|-
borderRadius|Number|边框圆角，默认值3
borderWidth|Number|边框宽度，默认值3
colors|String[]|渐变颜色，默认值['#5ddcff', '#4e00c2']，只接受2个值
duration|Number|动画持续时间，默认值4，单位秒