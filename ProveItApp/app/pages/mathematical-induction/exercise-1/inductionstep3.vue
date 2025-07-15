<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep2',
    righturl: 'inductionstep4',
    title: 'Exercise 1',
    showProgressBar: true,
    taskIndex: 2,
})
import { useProgressStore } from '~/store/ProgressStore';
import draggable from 'vuedraggable';


const progressStore = useProgressStore();
const useInductionHypothesis = ref(false);
useInductionHypothesis.value = progressStore.progressInExercise1[2] || false;


const pool = (useInductionHypothesis.value === false) ? ref([
  { id: 1, name: 'Induction Hypothesis' }
]) : ref([])
const dummyZone = ref([])
function handleDrop(evt:any) {
  const droppedItem = evt.added?.element
  if (droppedItem) {
    useInductionHypothesis.value = true
    progressStore.UpdateProgressInExercise1(2);
  }
}


// Drop zone
const proofSteps = ref([])

const hints = [
  'Now what is the next step ?',
  'What can you do with <br/>the induction hypothesis?',
  'Drag and drop Induction <br/>Hypothesis box into our equation.'
]

const EndResponse = 'Great job! Now the only thing <br/>we should do is to transform <br/>our notation into P(k+1) form. <br/>Don’t worry it is easy, <br/>let me show you.'
const currentIndex = ref(0)

function showNextHint() {
  currentIndex.value = (currentIndex.value + 1) % hints.length
}
</script>

<style>
.sortable-ghost {
  font-size: 12px !important; /* or any size you want */
  opacity: 0.7;
  background-color: #e5e7eb; /* optional: gray-200 */
}
</style>

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
        <div class="grid grid-rows-2 items-start  gap-4">
            <span> (k+1)th odd number </span>
            <div></div> 
        </div>
        <div class="grid grid-rows-2 items-start  gap-4">
            <MathBlock expression="="/>
            <MathBlock expression="="/>
        </div>
        <div class="grid grid-rows-2 items-start  gap-4">
            <span>
                    kth odd number + 2
            </span>
            
            <MathBlock expression="2k - 1 + 2" v-if="useInductionHypothesis"/>
            <div v-if ="!useInductionHypothesis" class="flex bg-gray justify-around items-start">
              <draggable
                v-model="dummyZone"
                group="proof"
                item-key="id"
                @change="handleDrop"
                class="min-w-50px bg-gray-200 border-2 border-dashed border-gray-400 rounded p-4"
              >
                <template #item="{ element }" >
                  <div class="text-sm bg-white border rounded shadow">
                    {{ element.name }}
                  </div>
                </template>
              </draggable>
              <MathBlock expression="+ 2"></MathBlock>
            </div>
        </div>
        <div class="grid grid-rows-2  items-start gap-4">
          <span class="ml-2">| Definition of Odd Number</span>
          <span v-if="useInductionHypothesis" class="ml-2">| Induction Hypothesis</span>
        </div>
        
      </div>
    </div>
    <div class="col-start-3">
      <draggable
        v-model="pool"
        group="proof"
        item-key="id"
        @change="useInductionHypothesis = true"
        class="flex items-center justify-center"
      >
        <template #item="{ element }">
          <div class="p-2 bg-white border rounded shadow">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="col-start-3 row-start2-2">
      <div class="text-center px-4 justify-items-center">
        <!-- Speech Bubble -->
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block text-lg relative font-medium mx-auto">
          <p v-html="hints[currentIndex]" v-if="!useInductionHypothesis"></p>
          <p v-html="EndResponse" v-if="useInductionHypothesis"></p>
          <!-- Speech bubble tail -->
          <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <!-- Dr Cube character -->
        
        <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" @click="showNextHint"></NuxtImg>
      </div>
    </div>
  </div>
</template>


