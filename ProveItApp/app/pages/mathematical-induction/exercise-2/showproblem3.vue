<script setup lang="ts">
import UserOptionButton from '~/components/UserOptionButton.vue';
import { useProgressStore } from '~/store/ProgressStore';

definePageMeta({
    layout: 'exercise-content',
    lefturl: 'showproblem2',
    righturl: 'basecase',
    title: 'Exercise 2',
    showProgressBar: true,
    taskIndex: 1,
})
const currentIndex = ref(0)
const hints= ['Time to step up! <br/> Try to write the statement <br/> with big sigma notation',
    'Click the triple line icon <br/>and go to insert option<br/> to access big sigma notation',
    'Use i(i+1) after sigma to <br/>represent the sequence'
]
const resetWatcher= ref(0)
function showNextHint() {
  currentIndex.value = (currentIndex.value + 1) % hints.length
  resetWatcher.value++
}
const wrongInput = ref<string[]>([])
const status = ref<'inputting' | 'correct' | 'wrong'>('inputting')
const correctAnswer = ref('\sum_{i=1}^{n}i\left(i+1\right)=\frac{1}{3}\cdot n\cdot\left(n+1\right)\cdot\left(n+2\right)')
const progressStore = useProgressStore();
watch(status, (newStatus) => {
  if (newStatus === 'correct') {
    progressStore.UpdateProgressInExercise2(1);
  } 
})

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-3 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <h3 class="flex flex-col text-black text-2xl font-bold mb-4">
                <div class="flex gap-4">Prove by induction that for <MathBlock expression="n \geq 1"/> :</div> 
                <MathBlock expression="1(2) + 2(3) + 3(4) + . . . + n(n+1) = \frac{1}{3}n(n+1)(n+2)"/>
            </h3>
            
            <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" :class="{
    'border-red-500 border-2': status === 'wrong'}" v-if="status === 'inputting' || status === 'wrong'">
                <UserMathInputComponent correctAnswer="\sum_{i=1}^{n} i(i+1) = \frac{1}{3}n(n+1)(n+2)" :reset=resetWatcher :wrongInput=wrongInput @input-status="status = $event"></UserMathInputComponent>
            </div>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="status === 'correct'">
               <MathBlock expression="\sum_{i=1}^{n} i(i+1) = \frac{1}{3}n(n+1)(n+2)"/>
            </div>  
            
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p v-if="status === 'inputting'" v-html="hints[currentIndex]">
                    
                </p>
                <p v-if="status === 'wrong'">
                    You got it wrong! <br/>
                    If you need help, <br/>
                    you can click on me to get a hint!
                </p>
                <p v-if="status === 'correct'">
                    Correct! Now we can <br/>
                    move to the base case!
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" @click="showNextHint" ></NuxtImg>
            </div>
        </div>
        <div class="col-span-3 row-start-3">
            <p class="text-black text-2xl font-bold mb-4 justify-items-center text-center">
                Further explanation about big sigma notation in this <a href="https://www.mathsisfun.com/algebra/sigma-notation.html" target="_blank" class="text-blue-500 hover:underline">link</a>.
            </p>
        </div>
    </div>
</template>

