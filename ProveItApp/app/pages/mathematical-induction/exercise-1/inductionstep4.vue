<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep3',
    righturl: 'inductionstep5',
    title: 'Exercise 1'
})
const isAllAnimated = ref(false);
</script>
<template>
  <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden">
    <div class="col-span-2 row-span-2 flex flex-col">
      <p class="text-black text-2xl font-bold mb-4">2.Induction Step</p>
      <p class="text-black text-2xl font-bold mb-4">We will now show that P(k+1) also holds.</p>
      <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="n = k + 1"/>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="\implies"/>
                    
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <span>
                    The k+1th odd number is kth odd number +  2.<br/>
                     This is based on pattern of odd number. 
                    </span>
                </div>
            </div>
      <!-- Math lines grid -->
      <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
        
        <div class="grid grid-rows-2 items-start gap-4">
            <span> (k+1)th odd number </span>
            <div></div> 
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="grid grid-rows-2 items-start gap-4">
            <MathBlock expression="="/>
            <MathBlock expression="="/>
            <MathBlock expression="="/>
            <MathBlock expression="="/>
        </div>
        <div class="grid grid-rows-2 items-start gap-4">
            <span>
                    kth odd number + 2
            </span>
            <MathBlock expression="2k - 1 + 2"/>
            <MathBlock expression="2k + 2 -1"/>
            <MathBlock expression="2(k + 1) - 1"/>
        </div>
        <div class="grid grid-rows-2  items-start gap-4">
          <span class="ml-2">| Definition of Odd Number</span>
          <span class="ml-2">| Induction Hypothesis</span>
          <span class="ml-2">| Arithmetics</span>
          <span class="ml-2">| Arithmetics</span>
        </div>
        
      </div>
    </div>
    <div class="col-start-3">
     
    </div>
    <div class="col-start-3 row-start2-2">
      <div class="text-center px-4 justify-items-center">
        <!-- Speech Bubble -->
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
          <p>
            Wonderful! We are actually done. <br/>
            Now I can transform into end-of-proof <br/>
            symbol and conclude our proof. <br/>
          </p>
          <!-- Speech bubble tail -->
          <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <!-- Dr Cube character -->
        <NuxtImg src="/Dr.Cube/Good.png" width="256px" height="256px"></NuxtImg>
      </div>
    </div>
  </div>
</template>

