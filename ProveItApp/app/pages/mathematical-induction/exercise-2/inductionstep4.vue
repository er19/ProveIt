<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep3',
    righturl: 'outro',
    title: 'Exercise 2'
})
const mathAnswer = ref<string[]>([  '(k+1)(k+2)((\\frac{1}{3}k) + 1)',
                                    '(k+1)(k+2)(\\frac{k+3}{3})',
                                    '\\frac{1}{3}(k+1)(k+2)(k+3)',
                                    '\\frac{1}{3}(k+1)((k+1)+1)((k+1)+2)'])

const isAllAnimated = ref(false);
</script>
<template>
  <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden">
    <div class="col-span-2 row-span-2 flex flex-col">
      <p class="text-black text-2xl font-bold mb-4">2.Induction Step</p>
      <p class="text-black text-2xl font-bold mb-4">We will now show that P(k+1) also holds.</p>
      <div class="flex gap-4 mb-2 text-black text-xl font-bold items-start">
        <div class="grid grid-rows-2 gap-4">
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
            <MathBlock expression="\sum_{i=1}^{k+1}i\left(i+1\right)"/>
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

            <MathBlock expression="=" />
            <MathBlock expression="=" />
            <MathBlock expression="=" />
            <MathBlock expression="="/>
        </div>
        <div class="grid grid-rows-2 items-start gap-4">
            <MathBlock expression="\sum_{i=1}^{k}i\left(i+1\right) + (k+1)(k+2)"/>
            <MathBlock expression="\frac{1}{3}k(k+1)(k+2) + (k+1)(k+2)"/>
            
            <MathBlock :expression="mathAnswer[0] ?? ''" />
            <MathBlock :expression="mathAnswer[1] ?? ''"/>
            <MathBlock :expression="mathAnswer[2] ?? ''"/>
            <MathBlock :expression="mathAnswer[3] ?? ''" />
        </div>
        <div class="grid grid-rows-2  items-center gap-4 text-2xl">
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
      <div class="text-center px-4 justify-items-center">
        <!-- Speech Bubble -->
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block text-lg font-medium mx-auto">
          <p>
            The rest of the step will be <br/>
            just about transforming our equation <br/>
            to what we want to proof with <br/>
            P(k+1) right side
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

