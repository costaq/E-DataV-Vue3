<!--
 * @Autor: costa
 * @Date: 2023-04-07 15:06:20
 * @LastEditors: costa
 * @LastEditTime: 2023-07-11 11:01:58
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
                    <e-water-level-pond :width="200" :height="200" :value="56" :background-color="'#000'" />
                </e-border-box-1>
            </div>

        </e-full-screen-container>
    </div>
</template>
<script setup>
import { EDigitalFlop, EFullScreenContainer, EBorderBox1, EWaterLevelPond } from '../src';
</script>