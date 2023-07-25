<!--
 * @Autor: costa
 * @Date: 2023-04-07 15:06:20
 * @LastEditors: costa
 * @LastEditTime: 2023-07-25 16:26:50
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <div>
        <e-full-screen-container>
            <!-- <div>
                <e-border-box-1 style="width:500px;height:300px;margin-left:200px;">
                    <e-digital-flop />
                    <e-digital-flop />
                    <e-water-level-pond style="width:200px;height:200px;" :value="36" :background-color="'#000'" />
                    
                </e-border-box-1>
            </div> -->
            <div style="width: 200px;height:200px;">
                <e-water-level-pond :value="36" :background-color="'#000'" />

            </div>
            <div style="width:500px;height: 100px;">
                <e-tab :items="items" :columns="3" @change="handleClick"></e-tab>
            </div>
            <div>
                <e-border-box2 :line-width="20" style="width: 200px;height:200px;margin-left: 100px;margin-top:50px;">

                </e-border-box2>
            </div>


        </e-full-screen-container>
    </div>
</template>
<script setup>
import { EDigitalFlop, EFullScreenContainer, EBorderBox1, EWaterLevelPond, ETab, EBorderBox2 } from '../src';
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