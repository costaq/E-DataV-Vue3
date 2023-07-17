<!--
 * @Autor: costa
 * @Date: 2023-04-07 15:06:20
 * @LastEditors: costa
 * @LastEditTime: 2023-07-17 10:52:43
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <div>
        <e-full-screen-container>
            <!-- <div style="width:500px;height:500px;margin-left:200px;">
                <e-border-box-1>
                    <e-digital-flop />
                    <e-digital-flop />
                    <e-water-level-pond style="width:200px;height:200px;" :value="36" :background-color="'#000'" />
                    
                </e-border-box-1>
            </div> -->
            <e-water-level-pond style="width:200px;height:200px;" :value="36" :background-color="'#000'" />
            <e-tab style="width:500px;height: 100px;" :items="items" :columns="3" @change="handleClick"></e-tab>

        </e-full-screen-container>
    </div>
</template>
<script setup>
import { EDigitalFlop, EFullScreenContainer, EBorderBox1, EWaterLevelPond, ETab } from '../src';
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