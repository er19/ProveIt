<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep2',
    righturl: 'inductionstep4',
    title: 'Tutorial'
})

const useInductionHypothesis = ref(false);
import draggable from 'vuedraggable';

const pool = ref([
  { id: 1, name: 'Induction Hypothesis' }
])
const dummyZone = ref([])
function handleDrop(evt:any) {
  const droppedItem = evt.added?.element
  if (droppedItem) {
    useInductionHypothesis.value = true
  }
}
// Drop zone
const proofSteps = ref([])
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
      <!-- Math lines grid -->
      <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
        <div class="grid grid-rows-2 items-start gap-4">
            <MathBlock expression="n = k + 1"/>
            <div></div>
        </div>
        <div class="grid grid-rows-2 items-start  gap-4">
            <MathBlock expression="\implies"/>
            <div></div>
        </div>
        <div class="grid grid-rows-2 items-start  gap-4">
            <MathBlock expression="\sum_{i=1}^{k+1} i"/> 
            <div></div> 
        </div>
        <div class="grid grid-rows-2 items-start  gap-4">
            <MathBlock expression="="/>
            <MathBlock expression="="/>
        </div>
        <div class="grid grid-rows-2 items-start  gap-4">
            <MathBlock expression="\sum_{i=1}^{k} i + k + 1"/>
            
            <MathBlock expression="\frac{k(k+1)}{2} + k + 1" v-if="useInductionHypothesis"/>
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
              <MathBlock expression="+ k + 1"></MathBlock>
            </div>
        </div>
        <div class="grid grid-rows-2  items-start gap-4">
          <span class="ml-2">| Definition of Big Sigma Notation</span>
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
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block text-lg font-medium mx-auto">
          <p v-if="!useInductionHypothesis">
            Noticed Induction Hypothesis box above. <br/>
            Drag and drop it into the equation
          </p>
          <p v-else>
            Great job! <br/>
            Now our right-hand side <br/>
            of the equation looking <br/>
            similar to what we actually want. <br/> 
            Keep going to make it complete!
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


