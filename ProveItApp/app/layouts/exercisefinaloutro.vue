<script setup lang="ts">
import FinalExerciseOutroFooter from '~/components/FinalExerciseOutroFooter.vue'

const route= useRoute()
const leftUrl = computed(() => route.meta.lefturl as string)
const rightUrl = computed(() => route.meta.righturl as string)
</script>

<template>
    <div class="bg-gradient-to-br from-white to-[#78D0FF] min-h-screen h-screen w-screen overflow-hidden">
        <div class="flex p-8 mx-auto w-screen justify-center h-screen">
            <slot></slot>
        </div>
        <footer class="p-8 sticky bottom-0 mx-auto items-center">
            <FinalExerciseOutroFooter :left="leftUrl" :right="rightUrl" ></FinalExerciseOutroFooter>
        </footer>
    </div>
    
</template>