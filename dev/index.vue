<!--
 * @Autor: costa
 * @Date: 2023-04-07 15:06:20
 * @LastEditors: costa
 * @LastEditTime: 2023-11-23 10:59:15
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <div>
        <div style="height: 200px;width:200px;">
            <e-gauge-chart :value="value" text="每日上报人数" :textFontSize="12"></e-gauge-chart>
        </div>
        
        <input type="text" v-model="defaultValue" />
        <input type="button" @click="changeValue" value="设置值" />
        <!-- <e-full-screen-container> -->
            <!-- <div>
                <e-loading border-color="#f53f3f" :size="80" style="position:absolute;font-size:12px;color:#ff9797;">
                    加载中...
                </e-loading>
            </div> -->
            <!-- <div>
                <e-border-box3 text="E-DataV 边框" text-position="left" style="width: 500px;height: 300px;margin-top:20px;color:#fff;">
                    dasdasdasdsd
                </e-border-box3>
            </div>
            <div>
                <e-border-box-1 :colors="['#fff', '#000']" style="width:500px;height:300px;margin-left:200px;">
                    <e-digital-flop :value="1000" color="#fff" />
                    <e-digital-flop />
                    <e-water-level-pond style="width:200px;height:200px;" :value="36" :background-color="'#000'" />
                    
                </e-border-box-1>
            </div>
            <div style="width: 200px;height:200px;">
                <e-water-level-pond :value="36" :background-color="'#000'" />

            </div> -->
            <!-- <div style="width:700px;height: 150px;margin-top:30px;">
                <e-tab :items="items" :columns="3" @change="handleClick"></e-tab>
            </div>
            <div style="width:700px;height: 500px;margin-top:30px;">
                <e-tab :items="items" :columns="3" @change="handleClick"></e-tab>
            </div> -->
            <!-- <div style="margin-top: 100px;margin-left: 100px;height: 400px;width: 200px;">
                <e-border-box2 :line-width="20" style="width: 200px;height:200px;margin-left: 100px;margin-top:50px;">
                    <e-scroll-ranking-board type="single" :items="rankingItems" :highlightRowNum="4"
                        color="#eee"></e-scroll-ranking-board>
                </e-border-box2>
                <e-border-box-1 style="width:500px;height:300px;">
                    <e-scroll-ranking-board type="single" :items="rankingItems"
                        :highlightColors="['#1e80ff', '#4cc7f3', '#CDDC39']"></e-scroll-ranking-board>
                </e-border-box-1>
            </div>
            <input type="button" value="测试" @click="() => handleChangeItems()" /> -->
            <!-- <div style="width:800px;height:200px;">
                <e-dynamic-text :text="text" style="font-weight: bold;font-size:36px;" />
            </div>
            <button @click="handleChangeText">更改文字</button> -->

        <!-- </e-full-screen-container> -->
    </div>
</template>
<script lang="ts" setup>
import { EDigitalFlop, EFullScreenContainer, EBorderBox1, EWaterLevelPond, EBorderBox3, ETab, EBorderBox2, ETabProps, TabItem, EScrollRankingBoard, EDynamicText, ELoading, EGaugeChart } from '../src';
// icon组件可使用其他库，这里只是举例
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { h, reactive, ref, watch } from 'vue';
const text = ref('E-DataV数据大屏');
const value = ref(66);
const defaultValue = ref(66);

const changeValue = () => {
    value.value = +defaultValue.value;
}

const items: TabItem[] = [
    {
        label: '测试1',
        value: '123',
        // icon: () => h(MailOutlined)
    },
    {
        label: '测试2',
        value: '1234',
        // icon: () => h(AppstoreOutlined)
    },
    {
        label: '测试3',
        value: '1235',
        // icon: () => h(SettingOutlined)
    }
]

// let rankingItems = reactive({
//     items: Array(6).fill(0).map((item, index) => {
//         return {
//             label: `测试${index}`,
//             value: index * 100
//         }
//     })
// })

const rankingItems = ref(Array(6).fill(0).map((item, index) => {
        return {
            label: `测试${index}`,
            value: index * 100
        }
    }))

const interval = ref(3000);

// const rankingItems = Array(6).fill(0).map((item, index) => {
//     return {
//         label: `测试${index}`,
//         value: index * 100
//     }
// })

const handleChangeItems = () => {
    // interval.value = 10000;
    rankingItems.value = Array(10).fill(0).map((item, index) => {
        return {
            label: `测试${index}`,
            value: index * 100
        }
    })
}

const handleClick = (value: string) => {
    console.log(value);
}

const handleChangeText = () => {
    text.value = 'E-DataV数据可视化大屏';
}
</script>
<style>
*{
    margin: 0;
}
</style>