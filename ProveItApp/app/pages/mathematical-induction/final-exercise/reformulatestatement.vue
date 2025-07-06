<script setup lang="ts">
import { useExerciseStore } from '~/store/FinalExerciseStore';
definePageMeta({
    layout: 'exercisefinalcontent',
    lefturl: 'showproblem',
    title: 'Final Exercise'
})


const store = useExerciseStore()

const mathExpression = store.statement

const userTarget = ref('reformulate')
const userPosition = ref(0)
const watcher = ref(0)

const userInputReformulateStatement = store.reformulateStatement
function selectIndex(i: number) {
  userPosition.value = i
  watcher.value++
}


</script>
<template>
    <div class="flex flex-col justify-start" >  
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center">
                <p>Let P(n) be the statement that</p> 
                <MathBlock :expression='mathExpression' />
                <p> for every positive integer n.</p>
        </div>
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center">
                Reformulate the statement
        </div>
        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
        userPosition === 0
            ? 'border-blue-500 bg-blue-100'
            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
        ]" @click="selectIndex(0)">

        <MathBlock :expression="userInputReformulateStatement[0] || ''" v-if="userInputReformulateStatement[0] !== ''"  />
        </div>
        
        
        <div class=" flex  gap-4 text-black text-2xl mb-4">
            <FinalExerciseUserMathInputComponent :types=userTarget :index=userPosition :reset=watcher></FinalExerciseUserMathInputComponent>
        </div>      
    </div>
</template>