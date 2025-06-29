<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'showproblem3',
    righturl: 'basecase2',
    title: 'Exercise 2'
})

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <div class=" flex gap-4 text-black text-2xl font-bold mb-4">
                <div class="flex gap-4">Prove by induction that for <MathBlock expression="n \geq 1"/> :</div> 
                <MathBlock expression="\sum_{i=1}^{n}i\left(i+1\right) = \frac{1}{3}n(n+1)(n+2)"/>
            </div>
            <p class=" flex gap-4 text-black text-2xl font-bold mb-4">Let P(n) be the statement that for <MathBlock expression="n \geq 1"/> : <MathBlock expression="\sum_{i=1}^{n}i\left(i+1\right) = \frac{1}{3}n(n+1)(n+2)"/></p>
            <p class="text-black text-2xl font-bold mb-10">
              1. Base Case
            </p>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start2-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Now we continue with the base case
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

