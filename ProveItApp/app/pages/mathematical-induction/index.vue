<script setup lang="ts">
    import { MathfieldElement } from "mathlive";
    const mfe = new MathfieldElement();
    definePageMeta({
    layout: 'default'
    })
</script>
 
<template>
    <link rel="stylesheet" href="mathlive-fonts.css" />
    <div>
         <math-field>f(x)= x+1</math-field>
    </div>
</template>


