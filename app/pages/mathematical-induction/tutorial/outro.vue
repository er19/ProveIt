<script setup lang="ts">
definePageMeta({
    layout: 'exercise-intro-outro',
    lefturl: 'inductionstep5',
    righturl: '/mathematical-induction'
})
const params = useRoute().params
</script>

<template>
    <div class="flex items-center justify-center overflow-hidden ">
        <div class="relative text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Exercise 2, done! Good job!<br/>
                    You have learned how to do mathematical induction proof.<br/>
                    Now your progress bar has shown that you are ready <br/>
                    to write proof by yourself. <br/>
                    Congrats! Now I have opened the Final Exercise. <br/>
                    Have fun with it !<br/>
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Good.png" width="256px" height="256px"></NuxtImg>
        </div>
    </div>
</template>

