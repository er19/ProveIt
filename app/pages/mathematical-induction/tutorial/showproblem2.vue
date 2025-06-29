<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'showproblem',
    righturl: 'basecase',
    title: 'Tutorial'
})

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-3 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <h3 class="flex text-black text-2xl font-bold mb-4 gap-4"><span>Prove by induction that </span><MathBlock expression="1 + 2 + 3 + . . . + n = \frac{n(n+1)}{2}"/> <span>for every positive integer n.</span></h3>
            <p class="text-black text-2xl font-bold mb-10">
                We can transform this statement to make our life easier by using big sigma notation
            </p>
            
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around">
                <div class="grid grid-rows-2 items-center gap-4">
                    <MathBlock expression="1 + 2 + 3 + . . . + n  = \frac{n(n+1)}{2} "/>
                    
                </div>
                <div class="grid grid-rows-2 items-center gap-4">
                    <MathBlock expression="\equiv"/>
                    
                </div>
                <div class="grid grid-rows-2 items-center gap-4">
                    <MathBlock expression="\sum_{i=1}^{n} i = \frac{n(n+1)}{2}"/> 
                    
                </div>
                
        
            </div>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                    Perfect! With this clear notation, <br/>
                    we are now ready to tackle the proof together
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
            </div>
        </div>
        <div class="col-span-3 row-start-3">
            <p class="text-black text-2xl font-bold mb-4 justify-items-center text-center">
                Further explanation about big sigma notation in this <a href="https://www.mathsisfun.com/algebra/sigma-notation.html" target="_blank" class="text-blue-500 hover:underline">link</a>.
            </p>
        </div>
    </div>
</template>

