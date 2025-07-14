<script setup lang="ts">
import { useProgressStore } from '~/store/ProgressStore'

definePageMeta({
    layout: 'exercise-intro-outro',
    lefturl: 'outro',
    righturl: '/mathematical-induction'
})
const params = useRoute().params

const progressStore = useProgressStore()

onMounted(()=>{
    progressStore.FinishTutorial()
})
</script>

<template>
    <div class="flex flex-col h-screen items-center justify-center  overflow-hidden gap-20">
        <div class="flex p-8 sticky top-0 mx-auto  w-screen">
            <div class="flex container justify-end  gap-3 h-full mx-auto ">
                <ProgressBarComponent :progress="25" :current-progress="0" />
            </div>
        </div>
        <div class="flex items-center justify-center overflow-hidden ">
            <div class="relative text-center px-4 justify-items-center">
                <!-- Speech Bubble -->
                <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                    <p class="">
                        If you need help, just click on me and I will show you some hint for your task. <br/>
                        <br/>
                        Also there will be a bar to show the level of independence you have. <br/>
                        Remember our goal is to be independent when it comes to writing proofs. <br/>
                        If you reach the end of the bar, the final exercise will be opened and you can try write proof on your own.
                    </p>
                    <!-- Speech bubble tail -->
                    <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>

                <!-- Dr Cube character -->
                <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
            </div>
        </div>
    </div>
    
</template>

