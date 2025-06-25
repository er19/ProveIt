<script setup lang="ts">
definePageMeta({
    layout: 'exercise-intro-outro',
    lefturl: 'outro1',
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
                    If you need help, just click on me and <br />
                    I will show you some hint for your task. 
                    <br /><br/>
                    Also there will be a bar to show the level <br/>
                    of independence you have. Remember our goal is to be independent <br/>
                    when it comes to writing proofs. If you reach the end of the bar, <br/>
                    the final exercise will be opened and you can try write proof on your own. <br/>
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Good.png" width="256px" height="256px"></NuxtImg>
        </div>
    </div>
</template>

