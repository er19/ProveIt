<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: '/mathematical-induction',
    righturl: 'showproblem2',
    title: 'Exercise 2'
})
</script>

<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden" >
        <div class="col-span-2 row-span-2 overflow-hidden">
            <h3 class="flex flex-col text-black text-2xl font-bold mb-4">
                <div class="flex gap-4">Prove by induction that for <MathBlock expression="n \geq 1"/> :</div> 
                <MathBlock expression="1(2) + 2(3) + 3(4) + . . . + n(n+1) = \frac{1}{3}n(n+1)(n+2)"/>
            </h3>
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

