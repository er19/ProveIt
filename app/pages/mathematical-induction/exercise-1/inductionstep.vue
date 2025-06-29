<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionhypothesis',
    righturl: 'inductionstep2',
    title: 'Exercise 1'
})

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">2. Induction Step</p>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">We will now show that P(k+1) also holds.</p>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="n = k + 1"/>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="\implies"/>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <div></div>
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <div></div>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <div></div>
                    
                </div>
                <div class="grid grid-rows-2  items-start gap-4">
                    <div></div>
                
                </div>
        
            </div>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start2-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Now we will do induction step<br/>
                    to prove for any k that our <br/>
                    hypothesis holds.
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

