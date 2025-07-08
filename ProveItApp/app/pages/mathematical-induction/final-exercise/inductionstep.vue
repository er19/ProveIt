<script setup lang="ts">
import { useExerciseStore } from '~/store/FinalExerciseStore';
definePageMeta({
    layout: 'exercisefinalcontent',
    lefturl: 'showproblem',
    title: 'Final Exercise'
})


const store = useExerciseStore()

const mathExpression = store.reformulateStatement[0] 

const userTarget = ref('inductionstep')
const userPosition = ref(0)
const watcher = ref(0)

const userInputInductionStep = store.inductionStep
const userInputInductionStepExplanation = store.inductionStepExplanation
function selectIndexStep(i: number) {
    userTarget.value = "inductionstep"
    userPosition.value = i
    watcher.value++
}
function selectIndexExp(i: number) {
    userTarget.value = "explanation"
    userPosition.value = i
    watcher.value++
}
</script>
<template>
    <div class="flex flex-col" >
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center">
                <p>Let P(n) be the statement that</p> 
                <MathBlock :expression='mathExpression || store.statement' />
                <p> for every positive integer n.</p>
            
        </div>
        <div>
            
            <p class="text-black text-2xl font-bold mb-10">
              2. Induction Step
            </p>
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid  items-start gap-4">
                    <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-24 min-h-8"  :class="[
                    userPosition === 0
                        ? 'border-blue-500 bg-blue-100'
                        : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                    ]" @click="selectIndexStep(0)">

                    <MathBlock :expression="userInputInductionStep[0] || ''" v-if="userInputInductionStep[0] !== ''"  />
                    
                    </div>
                </div>
                
                <div class="grid  items-start gap-4">
                    <MathBlock expression="\implies"/>
                </div>
                
                <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" >
                    <div class="grid grid-rows-7 items-center gap-4">
                        <div class="flex mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 1
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(1)">
                            <MathBlock :expression="userInputInductionStep[1] || ''" v-if="userInputInductionStep[1] !== ''" />
                        </div>
                        
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="grid grid-rows-7 items-center gap-4">
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                    </div>
                    <div class="grid grid-rows-7 items-center gap-4">
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 2
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(2)">
                            <MathBlock :expression="userInputInductionStep[2] || ''" v-if="userInputInductionStep[2] !== ''" />
                        </div>
                        
                        <div class="flex growgap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 3
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(3)">
                            <MathBlock :expression="userInputInductionStep[3] || ''" v-if="userInputInductionStep[3] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 4
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(4)">
                            <MathBlock :expression="userInputInductionStep[4] || ''" v-if="userInputInductionStep[4] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 5
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(5)">
                            <MathBlock :expression="userInputInductionStep[5] || ''" v-if="userInputInductionStep[5] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 6
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(6)">
                            <MathBlock :expression="userInputInductionStep[6] || ''" v-if="userInputInductionStep[6] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 7
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(7)">
                            <MathBlock :expression="userInputInductionStep[7] || ''" v-if="userInputInductionStep[7] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 8
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexStep(8)">
                            <MathBlock :expression="userInputInductionStep[8] || ''" v-if="userInputInductionStep[8] !== ''" />
                        </div>
                        
                    </div>

                     <div class="grid grid-rows-7  items-center gap-4 text-2xl">
                         <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 9
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexExp(0)">
                            <MathBlock :expression="userInputInductionStepExplanation[0] || ''" v-if="userInputInductionStepExplanation[0] !== ''" />
                        </div>
                        
                        <div class="flex growgap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 10
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexExp(1)">
                            <MathBlock :expression="userInputInductionStepExplanation[1] || ''" v-if="userInputInductionStepExplanation[1] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 11
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexExp(2)">
                            <MathBlock :expression="userInputInductionStepExplanation[2] || ''" v-if="userInputInductionStepExplanation[2] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 12
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexExp(3)">
                            <MathBlock :expression="userInputInductionStepExplanation[3] || ''" v-if="userInputInductionStepExplanation[3] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 13
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexExp(4)">
                            <MathBlock :expression="userInputInductionStepExplanation[4] || ''" v-if="userInputInductionStepExplanation[4] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 14
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexExp(5)">
                            <MathBlock :expression="userInputInductionStepExplanation[5] || ''" v-if="userInputInductionStepExplanation[5] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 15
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndexExp(6)">
                            <MathBlock :expression="userInputInductionStepExplanation[6] || ''" v-if="userInputInductionStepExplanation[6] !== ''" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class=" flex  gap-4 text-black text-2xl mb-4">
                <FinalExerciseUserMathInputComponent :types=userTarget :index=userPosition :reset=watcher></FinalExerciseUserMathInputComponent>
            </div>            
        </div>
        
    </div>
</template>

