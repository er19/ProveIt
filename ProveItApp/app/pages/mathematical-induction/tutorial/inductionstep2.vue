<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep',
    righturl: 'inductionstep3',
    title: 'Tutorial'
})


</script>
<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">2.Induction Step</p>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">We will now show that P(k+1) also holds.</p>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="n = k + 1"/>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="\implies"/>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="\sum_{i=1}^{k+1} i"/> 
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="="/>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="\sum_{i=1}^{k} i + k + 1"/>
                    
                </div>
                <div class="grid grid-rows-2  items-start gap-4">
                <span class="ml-2">| Definition of Big Sigma Notation</span>
                
                </div>
        
            </div>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start2-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-base font-medium mx-auto">
                <p class="">
                    We use definition of big sigma notation <br/>
                    to transform our left side of equation <br/>
                    to more common form. This is important technique. <br/>
                    Remember to use this later<br/>
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

