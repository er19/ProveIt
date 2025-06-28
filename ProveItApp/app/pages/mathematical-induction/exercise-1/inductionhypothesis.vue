<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'basecase2',
    righturl: 'inductionstep',
    title: 'Exercise 1'
})

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">Induction Hypothesis</p>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">Assume that P (k) is correct for some positive integer k .  </p>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4"><span>This means, the kth odd number is 2k-1</span></p>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start2-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    After proving the base case,<br/>
                    we assume our statement holds for a specific k.<br/>
                    This is our hypothesis.<br/>
                    We will use it to prove the next step!
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

