<script setup lang="ts">
import UserOptionButton from '~/components/UserOptionButton.vue';
import { useProgressStore } from '~/store/ProgressStore';

definePageMeta({
    layout: 'exercise-content',
    lefturl: 'basecase',
    righturl: 'inductionhypothesis',
    title: 'Exercise 2',
    showProgressBar: true,
    taskIndex: 2,
})

const status = ref<'inputting' | 'correct' | 'wrong'>('inputting')
const statusA = ref<'inputting' | 'correct' | 'wrong'>('inputting')
const statusB = ref<'inputting' | 'correct' | 'wrong'>('inputting')

const focusInput = ref<'statusA'| 'statusB'| 'None' | 'Done'>('None')
const resetWatcherA= ref(0)
const resetWatcherB= ref(0)

const currentIndexHintA = ref(0)
const currentIndexHintB = ref(0)
const hintsA= ['How can I put 1/3 here?<br/>Click on me to get a new hint!',
    '(1/3)*3 = ..?',
]
const hintsB= ['what does n = 1 have <br/>to do with right-side of P(n)?<br/>Click on me to get a new hint!',
    '2 = 1+1 and 3 = 1+2',
]
function showNextHintA() {
  currentIndexHintA.value = (currentIndexHintA.value + 1) % hintsA.length
  resetWatcherA.value = resetWatcherA.value + 1; // Increment the reset watcher to trigger reactivity
}
function showNextHintB() {
  currentIndexHintB.value = (currentIndexHintB.value + 1) % hintsB.length
  resetWatcherB.value = resetWatcherB.value + 1; // Increment the reset watcher to trigger reactivity
}
function handleStatusA(status:'inputting' | 'correct' | 'wrong') {
    statusA.value = status;
    if (status !== 'correct') {
        focusInput.value = 'statusA';
    }else{
        focusInput.value = 'statusB';
    } 
    if((statusA.value === 'correct') && (statusB.value === 'correct')) {
        focusInput.value = 'Done';
    }
}
function handleStatusB(status: 'inputting' | 'correct' | 'wrong') {
    statusB.value = status;
    if (status !== 'correct') {
        focusInput.value = 'statusB';
    }else{
        focusInput.value = 'statusA';
    }
    if(statusA.value === 'correct' && statusB.value === 'correct') {
        focusInput.value = 'Done';
    }
}
const wrongInput = ref<string[]>([])
const wrongInputA = ref<string[]>(['2'])
const wrongInputB = ref<string[]>(['2'])
const progressStore = useProgressStore();
watch(() => focusInput.value, (newValue) => {
    if (newValue === 'Done') {
        progressStore.UpdateProgressInExercise2(2);
    }
});

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <p class=" flex gap-4 text-black text-2xl font-bold mb-4">Let P(n) be the statement that for <MathBlock expression="n \geq 1"/> : <MathBlock expression="\sum_{i=1}^{n}i\left(i+1\right) = \frac{1}{3}n(n+1)(n+2)"/></p>
            <p class="text-black text-2xl font-bold mb-10">
              1. Base Case
            </p>
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-col-2 items-start gap-4">
                    <MathBlock expression="n ="/>
                    
                </div>
                <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': status === 'wrong'}" v-if="status === 'inputting' || status === 'wrong'">
                    <UserMathInputComponent correctAnswer='1' :wrongInput=wrongInput @input-status="status = $event; "/>
                </div>
                <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="status === 'correct'">
                    <MathBlock expression="1"/>
                </div>
                <div class="grid  items-start gap-4">
                    <MathBlock expression="\implies"/>
                    
                </div>
                
                <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around"  v-if="status === 'correct'">
                    <div class="grid grid-rows-6 items-start gap-4">
                        <MathBlock expression='\sum_{i=1}^{1}i\left(i+1\right)'/>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="grid grid-rows-6 items-start gap-4">
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                    </div>
                    <div class="grid grid-rows-6 items-start gap-4">
                        <MathBlock expression='1(2)'/>
                        <MathBlock expression='2'/>
                        <MathBlock expression='1(1)(2)'/>
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" :class="{
    'border-red-500 border-2': statusA === 'wrong'}" v-if="statusA === 'inputting' || statusA === 'wrong'">
                            <UserMathInputComponent correctAnswer='\frac{3}{3}\cdot1\cdot(2)' :wrongInput=wrongInputA :reset=resetWatcherA @input-status="handleStatusA"/>
                        </div>
                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="statusA === 'correct'">
                            <MathBlock expression="\frac{3}{3}\cdot1\cdot(2)"/>
                        </div>
                        <MathBlock expression='\frac{1}{3}1(2)(3)'/>
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" :class="{
        'border-red-500 border-2': statusB === 'wrong'}" v-if="statusB === 'inputting' || statusB === 'wrong'">
                            <UserMathInputComponent correctAnswer='\frac{1}{3}\cdot1\cdot(1+1)\cdot(1+2)' :wrongInput=wrongInputB :reset=resetWatcherB @input-status="handleStatusB" />
                        </div>
                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="statusB === 'correct'">
                            <MathBlock expression="\frac{1}{3}\cdot1\cdot(1+1)\cdot(1+2)"/>
                        </div>
                    </div>
                </div>
            </div>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4" v-if="focusInput === 'Done'"><span>P(1) holds</span></p>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start2-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p v-if="status==='inputting'">
                   What value of n should we <br/> 
                   choose for our base case?
                </p>
                <p v-if="status==='wrong'">
                    Think again! Look at <br/>
                    the first possible step 
                </p>
                <p v-if="status==='correct' && focusInput === 'None'">
                    Great! Now we can show <br/>
                    that P(1) holds. I did <br/>
                    some part of the computation. <br/>
                    Fill in the missing part!
                </p>
                
                <p v-if="focusInput === 'statusA'">
                    <span v-if="statusA=== 'inputting'" v-html="hintsA[currentIndexHintA]"> </span>
                    <span v-if="statusA=== 'wrong'">Not quite right! <br/>Check your answer again <br/> or click on me to get another hint</span>
                </p>
                <p v-if="focusInput === 'statusB'">
                    <span v-if="statusB=== 'inputting'" v-html="hintsB[currentIndexHintB]"></span>
                    <span v-if="statusB=== 'wrong'">Not quite right! <br/>Check your answer again <br/> or click on me to get another hint</span>
                </p>
                <p v-if="focusInput === 'Done'">
                    <span>Great! Now we can move to the next step!</span>
                </p>
            
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" v-if="focusInput==='None'"></NuxtImg>
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" v-if=" focusInput==='statusA'"  @click="showNextHintA"></NuxtImg>
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" v-if=" focusInput==='statusB'" @click="showNextHintB" ></NuxtImg>
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" v-if=" focusInput==='Done'" ></NuxtImg>
        </div>
        </div>
    </div>
</template>

