<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep',
    righturl: 'inductionstep3',
    title: 'Exercise 2'
})

const useInductionHypothesis = ref(false);
import draggable from 'vuedraggable';

type DraggableItem = {
  id: number
  name: string
}

const pool = ref<DraggableItem[]>([
  { id: 1, name: 'Induction Hypothesis' }
])

const dummyZone = ref<DraggableItem[]>([])
function handleDrop(evt:any) {
  const droppedItem = evt.added?.element
  if (droppedItem && (userProgress.value[0] !== 'Correct')) {
    useInductionHypothesis.value = true
    userProgress.value[0] = 'Wrong'
    dummyZone.value = dummyZone.value.filter(item => item.id !== droppedItem.id)
    if (!pool.value.some(item => item.id === droppedItem.id)) {
      pool.value.push(droppedItem)
    }
  }else if (droppedItem && (userProgress.value[0] === 'Correct')) {
    useInductionHypothesis.value = true
    userProgress.value[2] = 'Correct'
    currentProgress.value = currentProgress.value + 1;
  }
}
// Drop zone
const proofSteps = ref([])


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
const statusA = ref<'inputting' | 'correct' | 'wrong'>('inputting')
const statusB = ref<'inputting' | 'correct' | 'wrong'>('inputting')
const statusWrong = ref<'inputting' | 'correct' | 'wrong'>('inputting')
const currentProgress = ref<number>(0)
const userProgress = ref<string[]>(['None','None','None','None'])

const userDescriptionFirstStepInput = ref('')

const acceptedAnswer = ['definitionofbigsigmanotation', 'bigsigmadefinition', 'bigsigmanotationdefinition', 'bigsigmanotation']
function checkUserDescriptionFirstStepInput() {

    if (acceptedAnswer.includes(userDescriptionFirstStepInput.value.toLowerCase().trim().replace(/\s+/g, ''))) {
        userProgress.value[currentProgress.value] = 'Correct'
        currentProgress.value = currentProgress.value + 1;
    } else {
        userProgress.value[currentProgress.value] = 'Wrong'
    }
    console.log(userProgress.value);
}

function handleStatus(status:'inputting' | 'correct' | 'wrong') {
    console.log(userProgress.value);
    statusA.value = status;
    if (status === 'wrong') {
        userProgress.value[currentProgress.value] = 'Wrong';
    }else if (status === 'inputting') {
        userProgress.value[currentProgress.value] = 'None';
    } 
    else{
        userProgress.value[currentProgress.value] = 'Correct';
        currentProgress.value = currentProgress.value + 1;
    } 
    console.log(userProgress.value);
}
</script>
<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">2.Induction Step</p>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">We will now show that P(k+1) also holds.</p>
           <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="n = k + 1"/>
                    <div></div>
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="\implies"/>
                    <div></div>
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="\sum_{i=1}^{k+1}i\left(i+1\right)"/>
                    <div></div>
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <MathBlock expression="=" />
                    <MathBlock expression="=" v-if="userProgress[0] === 'Correct' && userProgress[1] === 'Correct'"/>
                </div>
                <div class="grid grid-rows-2 items-start gap-4">
                    <div v-if ="userProgress[0] === 'None' || userProgress[0] === 'Wrong' " class="flex bg-gray justify-around items-start" :class="{
'border-red-500 border-2': userProgress[0] === 'Wrong'}">
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
                    </div>
                    <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="userProgress[0] === 'Correct'">
                        <MathBlock expression="\sum_{i=1}^{k}i\left(i+1\right) + (k+1)(k+2)"/>
                    </div>
                     <div v-if ="(userProgress[1] === 'Correct' && userProgress[2] === 'None' || userProgress[2] === 'Wrong') " class="flex bg-gray justify-around items-start" :class="{
'border-red-500 border-2':  userProgress[3] === 'Wrong'}">
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
                    </div>
                    <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="userProgress[3] === 'Correct' ">
                        <MathBlock expression="\frac{1}{3}k(k+1)(k+2) + (k+1)(k+2)"/>
                    </div>
                </div>
                <div class="grid grid-rows-2  items-start gap-4">
                    <div v-if ="userProgress[0] === 'None'"></div>
                    <div v-if ="userProgress[0] === 'Correct'">
                        <div v-if ="userProgress[1] === 'None'">
                            <UInput v-model="userDescriptionFirstStepInput" @keyup.enter="checkUserDescriptionFirstStepInput"/>
                        </div>
                        <div v-if ="userProgress[1] === 'Wrong'" class="flex grow border-red-500 border-2 text-red">
                            <UInput v-model="userDescriptionFirstStepInput" @keyup.enter="checkUserDescriptionFirstStepInput"/>
                        </div>
                        <span class="ml-2" v-if ="userProgress[1] === 'Correct'">| Definition of Big Sigma Notation</span>
                    </div>
                    <div v-if ="userProgress[1] === 'None'"></div>
                    <div v-if ="userProgress[1] === 'Correct'">
                        <span class="ml-2" v-if ="userProgress[2] !== 'Correct'"></span>
                        <span class="ml-2" v-if ="userProgress[2] === 'Correct'">| Induction Hypothesis</span>
                    </div>
                </div>
        
            </div>
            <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': statusA === 'wrong'}" v-if="userProgress[0] !== 'Correct'">
                <UserMathInputComponent correctAnswer='\sum_{i=1}^{k}i\left(i+1\right) + (k+1)(k+2)' :wrongInput=wrongInput @input-status="handleStatus"/>
            </div>
            <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': statusB === 'wrong'}" v-if="userProgress[3] !== 'Correct' && userProgress[2] !== 'Correct' && userProgress[0] === 'Correct' && userProgress[1] === 'Correct'">
                <UserMathInputComponent correctAnswer='asdasdasdasd' :wrongInput=wrongInput @input-status="statusB = $event"/>
            </div>
            <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': statusB === 'wrong'}" v-if="userProgress[3] !== 'Correct' && userProgress[2] === 'Correct' && userProgress[0] === 'Correct' && userProgress[1] === 'Correct'">
                <UserMathInputComponent correctAnswer='\frac{1}{3}k(k+1)(k+2) + (k+1)(k+2)' :wrongInput=wrongInput @input-status="handleStatus"/>
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
            <div class="text-center px-4 justify-items-center" v-if="currentProgress === 0">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-base font-medium mx-auto" >
                 <p v-if="userProgress[0] === 'None'">
                   Now, it is good to practice doing it by yourself. <br/>
                   You can type in your answer in the input box.<br/>
                   If you need any help, revisit tutorial or exercise 1. <br/>
                   Remember to drag induction hypothesis when you need to use it.
                </p>
                <p v-if="userProgress[0] === 'Wrong'">
                   Something is not right! <br/>
                   Check your answer again.
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>

                <!-- Dr Cube character -->
                <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
            </div>

            <div class="text-center px-4 justify-items-center" v-if="currentProgress === 1">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-base font-medium mx-auto" >
                <p v-if="userProgress[1] === 'None'">
                   Good job! Finding the correct expression <br/>
                   for  the first step. Now fill the input <br/>
                   box to explain what you did.
                </p>
                <p v-if="userProgress[1] === 'Wrong'">
                   Something is not right! <br/>
                   Check your answer again.
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>

                <!-- Dr Cube character -->
                <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
            </div>

            <div class="text-center px-4 justify-items-center" v-if="currentProgress === 2">
                <!-- Speech Bubble -->
                <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-base font-medium mx-auto" >
                    <p v-if="userProgress[2] === 'None'">
                    Now anyone can understand what you did! <br/>
                    What should we do next? 
                    </p>
                    <p v-if="userProgress[2] === 'Wrong'">
                    Something is not right! <br/>
                    Check your answer again.
                    </p>
                    <!-- Speech bubble tail -->
                    <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
                    <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
                </div>

            </div>
            <div class="text-center px-4 justify-items-center" v-if="currentProgress === 3">
                <!-- Speech Bubble -->
                <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-base font-medium mx-auto" >
                    <p v-if="userProgress[3] === 'None'">
                    Now anyone can understand what you did! <br/>
                    What should we do next? 
                    </p>
                    <p v-if="userProgress[3] === 'Wrong'">
                    Something is not right! <br/>
                    Check your answer again.
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

