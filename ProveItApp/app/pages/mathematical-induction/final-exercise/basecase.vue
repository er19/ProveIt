<script setup lang="ts">
import { useExerciseStore } from '~/store/FinalExerciseStore';
definePageMeta({
    layout: 'exercisefinalcontent',
    lefturl: 'showproblem',
    title: 'Final Exercise'
})


const store = useExerciseStore()



const mathExpression = store.reformulateStatement[0]

const userTarget = ref('basecase')
const userPosition = ref(0)
const watcher = ref(0)

const userInputBaseCase = store.baseCase
function selectIndex(i: number) {
  userPosition.value = i
  watcher.value++
}
</script>

<template>
   <div class="flex flex-col" >
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center">
                <p>Let P(n) be the statement that</p> 
                <MathBlock :expression='mathExpression || store.statement ' />
                <p> for every positive integer n.</p>
            
        </div>
        <div>
            
            <p class="text-black text-2xl font-bold mb-10">
              1. Base Case
            </p>
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-rows-5 items-center gap-4">
                    <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-24 min-h-8"  :class="[
                    userPosition === 0
                        ? 'border-blue-500 bg-blue-100'
                        : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                    ]" @click="selectIndex(0)">

                    <MathBlock :expression="userInputBaseCase[0] || ''" v-if="userInputBaseCase[0] !== ''"  />
                    
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                
                <div class="grid grid-rows-5 items-center gap-4">
                    <MathBlock expression="\implies"/>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                
                <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" >
                    <div class="grid grid-rows-5 items-center gap-4">
                        <div class="flex mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 1
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndex(1)">
                            <MathBlock :expression="userInputBaseCase[1] || ''" v-if="userInputBaseCase[1] !== ''" />
                        </div>
                        
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="grid grid-rows-5 items-center gap-4 ">
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                    </div>
                    <div class="grid grid-rows-5 items-center gap-4">
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 2
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndex(2)">
                            <MathBlock :expression="userInputBaseCase[2] || ''" v-if="userInputBaseCase[2] !== ''" />
                        </div>
                        
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 3
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndex(3)">
                            <MathBlock :expression="userInputBaseCase[3] || ''" v-if="userInputBaseCase[3] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 4
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndex(4)">
                            <MathBlock :expression="userInputBaseCase[4] || ''" v-if="userInputBaseCase[4] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 5
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndex(5)">
                            <MathBlock :expression="userInputBaseCase[5] || ''" v-if="userInputBaseCase[5] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                        userPosition === 6
                            ? 'border-blue-500 bg-blue-100'
                            : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                        ]" @click="selectIndex(6)">
                            <MathBlock :expression="userInputBaseCase[6] || ''" v-if="userInputBaseCase[6] !== ''" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8"  :class="[
                userPosition === 7
                    ? 'border-blue-500 bg-blue-100'
                    : 'border-blue-300 hover:border-gray-300 hover:bg-gray-100'
                ]" @click="selectIndex(7)">
                <MathBlock :expression="userInputBaseCase[7] || ''" v-if="userInputBaseCase[7] !== ''" />
            </div>
            <div class=" flex  gap-4 text-black text-2xl mb-4">
                <FinalExerciseUserMathInputComponent :types=userTarget :index=userPosition :reset=watcher></FinalExerciseUserMathInputComponent>
            </div>            
        </div>
        
    </div>
</template>

