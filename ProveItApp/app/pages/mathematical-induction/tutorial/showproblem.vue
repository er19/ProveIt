<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'intro3',
    righturl: 'showproblem2',
    title: 'Tutorial'
})
</script>

<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden" >
        <div class="col-span-2 row-span-2 overflow-hidden">
            <h3 class="flex text-black text-2xl font-bold mb-4 gap-4"><span>Prove by induction that </span><MathBlock expression="1 + 2 + 3 + . . . + n = \frac{n(n+1)}{2}"/> <span>for every positive integer n.</span></h3>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start2-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Now let’s prove this statement together!
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

