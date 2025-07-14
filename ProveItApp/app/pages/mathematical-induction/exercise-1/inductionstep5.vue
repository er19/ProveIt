<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep4',
    righturl: 'outro',
    title: 'Exercise 1'
})
const isAllAnimated = ref(true);
</script>
<template>
  <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden">
    <div class="col-span-2 row-span-2 flex flex-col">
      <p class="text-black text-2xl font-bold mb-4">2.Induction Step</p>
      <p class="text-black text-2xl font-bold mb-4">We will now show that P(k+1) also holds.</p>
      <!-- Math lines grid -->
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
    <div class="col-start-3 row-start2-2 place-content-center">
      <div class="text-center px-4 justify-items-center">
        
        <NuxtImg src="/square.png" width="50px" height="50px"></NuxtImg>
      </div>
    </div>
  
  </div>
</template>

