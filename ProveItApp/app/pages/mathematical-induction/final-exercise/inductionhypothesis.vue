<script setup lang="ts">
import { useExerciseStore } from '~/store/FinalExerciseStore';
definePageMeta({
    layout: 'exercisefinalcontent',
    lefturl: 'showproblem',
    title: 'Final Exercise'
})


const store = useExerciseStore()

const userTarget = ref('inductionhypothesis')
const userPosition = ref(0)
const watcher = ref(0)

const userInputInductionHypothesis = store.inductionHypothesis
function selectIndex(i: number) {
  userPosition.value = i
  watcher.value++
}
</script>

<template>
    <div class="flex flex-col justify-start" >  
        <p class="text-black text-2xl font-bold mb-10">
            Induction Hypothesis
        </p>
        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
        userPosition === 0
            ? 'border-blue-500 bg-blue-100'
            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
        ]" @click="selectIndex(0)">

        <MathBlock :expression="userInputInductionHypothesis[0] || ''" v-if="userInputInductionHypothesis[0] !== ''"  />
        
        </div>
        <div class="grid grid-cols-3 grid-rows-1 gap-4">
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
        userPosition === 1
            ? 'border-blue-500 bg-blue-100'
            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
        ]" @click="selectIndex(1)">

        <MathBlock :expression="userInputInductionHypothesis[1] || ''" v-if="userInputInductionHypothesis[1] !== ''"  />
        
        </div>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
        userPosition === 2
            ? 'border-blue-500 bg-blue-100'
            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
        ]" @click="selectIndex(2)">

        <MathBlock :expression="userInputInductionHypothesis[2] || ''" v-if="userInputInductionHypothesis[2] !== ''"  />
        
        </div>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
        userPosition === 3
            ? 'border-blue-500 bg-blue-100'
            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
        ]" @click="selectIndex(3)">

        <MathBlock :expression="userInputInductionHypothesis[3] || ''" v-if="userInputInductionHypothesis[3] !== ''"  />
        
        </div>
        </div>
        
        <div class=" flex  gap-4 text-black text-2xl mb-4">
            <FinalExerciseUserMathInputComponent :types=userTarget :index=userPosition :reset=watcher></FinalExerciseUserMathInputComponent>
        </div>      
    </div>
</template>

