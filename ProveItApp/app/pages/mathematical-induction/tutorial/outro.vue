<script setup lang="ts">
import { useProgressStore } from '~/store/ProgressStore'

definePageMeta({
    layout: 'exercise-intro-outro',
    lefturl: 'inductionstep6',
    righturl: 'outro2'
})
const params = useRoute().params

const progressStore = useProgressStore()

onMounted(()=>{
    progressStore.FinishTutorial()
})
</script>

<template>
    <div class="flex items-center justify-center overflow-hidden ">
        <div class="relative text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Good job for completing the tutorial !<br/>
                     Now you actually have proven the famous Gauss summation formula. <br/>
                     Cool right? On the next exercise, you will practice <br/>
                     mathematicalinduction further with my assistance and at the end <br/>
                    you will be able to use this method without any help from me.
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Good.png" width="256px" height="256px"></NuxtImg>
        </div>
    </div>
</template>

