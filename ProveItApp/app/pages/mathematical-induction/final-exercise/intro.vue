<script setup lang="ts">
definePageMeta({
    layout: 'exercise-intro-outro',
    lefturl: '/mathematical-induction',
    righturl: 'showproblem'
})
const params = useRoute().params
</script>

<template>
    <div class="flex items-center justify-center overflow-hidden ">
        <div class="relative text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Ready for the final exercise? <br/>
                    In this final exercise, you will write <br/> 
                    your own proof by mathematical induction. <br/>
                    We will meet again after you finished this exercise. 
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
        </div>
    </div>
</template>

