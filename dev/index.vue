<!--
 * @Autor: costa
 * @Date: 2023-04-07 15:06:20
 * @LastEditors: costa
 * @LastEditTime: 2023-07-12 14:24:57
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <div>
        <e-full-screen-container>
            <div style="width:500px;height:500px;margin-left:200px;">
                <e-border-box-1>
                    <!-- <e-digital-flop />
                    <e-digital-flop /> -->
                    <!-- 不通过样式设置宽高，则会根据父元素100%拉伸 -->
                    <e-water-level-pond style="width:200px;height:200px;" :value="36" :background-color="'#000'" />
                </e-border-box-1>
            </div>

        </e-full-screen-container>
    </div>
</template>
<script setup>
import { EDigitalFlop, EFullScreenContainer, EBorderBox1, EWaterLevelPond } from '../src';
</script>