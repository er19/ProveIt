<script setup lang="ts">

import { progress } from '#build/ui';
import { useProgressStore } from '~/store/ProgressStore';
definePageMeta({
    layout: 'exercisefinaloutro',
    lefturl: '',
    righturl: '/mathematical-induction'
})


const progressStore = useProgressStore()
</script>

<template>
    <div class="flex items-center justify-center overflow-hidden ">
        <div class="relative text-center px-4 justify-items-center" v-if="progressStore.isFinalExerciseFinished">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p>
                    Congratulation! <br/>
                    You have learned proof by mathematical induction.<br/>
                    There will be more exercises and other proof method coming soon. 
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Good.png" width="256px" height="256px"></NuxtImg>
        </div>

        <div class="relative text-center px-4 justify-items-center" v-else>
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p>
                    There is some mistake in your proof.<br/>
                     <br/>
                    You can click on review button on the left bottom corner to review in detail<br/>
                    Revisit the exercises and pay attention to those part of the proof!<br/>
                    You can try again later. Keep practicing! 
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Bad.png" width="256px" height="256px"></NuxtImg>
        </div>
    </div>
</template>

