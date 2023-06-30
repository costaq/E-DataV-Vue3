<!--
 * @Autor: costa
 * @Date: 2023-04-07 15:06:20
 * @LastEditors: costa
 * @LastEditTime: 2023-06-21 14:49:07
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
    <div>
        <e-full-screen-container>
            <div style="width:200px;height:200px;margin-left:200px;">
                <e-border-box-1>
                    <e-digital-flop />
                    <e-digital-flop />
                </e-border-box-1>
            </div>

        </e-full-screen-container>
    </div>
</template>
<script setup>
import { EDigitalFlop, EFullScreenContainer, EBorderBox1 } from '../src';
</script>