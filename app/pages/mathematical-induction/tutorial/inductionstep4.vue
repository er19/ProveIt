<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep3',
    righturl: 'outro',
    title: 'Tutorial'
})
const isAllAnimated = ref(false);
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="grid grid-rows-2 items-start gap-4">
            <MathBlock expression="\implies"/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="grid grid-rows-2 items-start gap-4">
            <MathBlock expression="\sum_{i=1}^{k+1} i"/> 
            <div></div> 
            <div></div>
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
            <MathBlock expression="="/>
            <MathBlock expression="="/>
        </div>
        <div class="grid grid-rows-2 items-start gap-4">
            <MathBlock expression="\sum_{i=1}^{k} i + k + 1"/>
            <MathBlock expression="\frac{k(k+1)}{2} + k + 1"/>
            <MathBlock expression="\frac{k(k+1)}{2} + \frac{2(k+1)}{2}"/>
            <MathBlock expression="\frac{k(k+1) + 2(k+1)}{2}"/>
            <MathBlock expression="\frac{(k+1)(k+2)}{2} + k + 1"/>
            <MathBlock expression="\frac{(k+1((k+1)+1))}{2} + k + 1"/>
        </div>
        <div class="grid grid-rows-2  items-start gap-4">
          <span class="ml-2">| Definition of Big Sigma Notation</span>
          <span class="ml-2">| Induction Hypothesis</span>
          <span class="ml-2">| Arithmetics</span>
          <span class="ml-2">| Arithmetics</span>
          <span class="ml-2">| Arithmetics</span>
          <span class="ml-2">| Arithmetics</span>
        </div>
        
      </div>
    </div>
    <div class="col-start-3">
     
    </div>
    <div class="col-start-3 row-start2-2">
      <div class="flex items-center justify-center">
        <!-- <LucideSquare :size="32"></LucideSquare> -->
      </div>
    </div>
  </div>
</template>

