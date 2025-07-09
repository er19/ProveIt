<script setup lang="ts">
import { useProgressStore } from '~/store/ProgressStore'

definePageMeta({
    layout: 'exercise-intro-outro',
    lefturl: 'inductionstep5',
    righturl: '/mathematical-induction'
})
const params = useRoute().params

const progressStore = useProgressStore()

onMounted(()=>{
    progressStore.FinishFirstExercise()
})
</script>

<template>
    <div class="flex items-center justify-center overflow-hidden ">
        <div class="relative text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Exercise 1, done! Good job! <br/>
                    You have proven the definition of odd number by <br/>
                    mathematical induction. This will be quiet helpful <br/>
                    and you can use the statement in other proof to <br/>
                    support your argument, especially in induction step.<br/>
                    Your progress bar also show progress. Keep going!<br/>
                    In no time, you will be independent
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Good.png" width="256px" height="256px"></NuxtImg>
        </div>
    </div>
</template>

