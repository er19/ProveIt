<script setup lang="ts">
definePageMeta({
    layout: 'exercise-content',
    lefturl: 'inductionstep2',
    righturl: 'inductionstep4',
    title: 'Exercise 2'
})



const showQuestion = ref(true);
const showHelpResponse = ref(false);
const needHelp = ref(false)
function FirstPathFunction(x: string){
    if(x === 'help'){
        showQuestion.value = false;
        showHelpResponse.value = true;
        userProgress.value[0] = 'Correct'
        userProgress.value[1] = 'Correct'
        userProgress.value[2] = 'Correct'
        userProgress.value[3] = 'Correct'
        userProgress.value[4] = 'Correct'
        userProgress.value[5] = 'Correct'
        userProgress.value[6] = 'Correct'
        userProgress.value[7] = 'Correct'
        currentProgress.value = 8
    }else{
        showQuestion.value = false;
        showHelpResponse.value = false;
    }
    needHelp.value = false;
}
const wrongInputCounter = ref(0)
const wrongInput = ref<string[]>([])
const statusA = ref<'inputting' | 'correct' | 'wrong'>('inputting')
const currentProgress = ref<number>(0)
const userProgress = ref<string[]>(['None','None','None','None','None','None','None','None'])
const mathAnswer = ref<string[]>([  '(k+1)(k+2)((\\frac{1}{3}k) + 1)',
                                    '(k+1)(k+2)(\\frac{k+3}{3})',
                                    '\\frac{1}{3}(k+1)(k+2)(k+3)',
                                    '\\frac{1}{3}(k+1)((k+1)+1)((k+1)+2)'])

const userDescriptionStepInput = ref('')

function checkUserDescriptionStepInput() {

    if ('arithmetics'===(userDescriptionStepInput.value.toLowerCase().trim().replace(/\s+/g, ''))) {
        userProgress.value[currentProgress.value] = 'Correct'
        currentProgress.value = currentProgress.value + 1;
        userDescriptionStepInput.value = ''
    } else {
        userProgress.value[currentProgress.value] = 'Wrong'
        wrongInputCounter.value = wrongInputCounter.value +1 ;
        sensingTrouble()
    }
    console.log(userProgress.value);
}

function handleStatus(status:'inputting' | 'correct' | 'wrong') {
    console.log(userProgress.value);
    statusA.value = status;
    if (status === 'wrong') {
        userProgress.value[currentProgress.value] = 'Wrong';
        wrongInputCounter.value = wrongInputCounter.value +1 ;
        sensingTrouble()
    }else if (status === 'inputting') {
        userProgress.value[currentProgress.value] = 'None';
    } 
    else{
        userProgress.value[currentProgress.value] = 'Correct';
        currentProgress.value = currentProgress.value + 1;
    } 
    console.log(userProgress.value);
}

function sensingTrouble(){
  if(wrongInputCounter.value % 10 === 0){
    needHelp.value = true
  }else{
    needHelp.value = false
  }

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

            <MathBlock expression="=" v-if="showHelpResponse && !showQuestion"/>
            <MathBlock expression="=" v-if="showHelpResponse && !showQuestion"/>
            <MathBlock expression="=" v-if="showHelpResponse && !showQuestion"/>
            <MathBlock expression="=" v-if="showHelpResponse && !showQuestion"/>

            <MathBlock expression="=" v-if="!showHelpResponse && currentProgress>=0 && !showQuestion"/>
            <MathBlock expression="=" v-if="!showHelpResponse && currentProgress>=2 && !showQuestion"/>
            <MathBlock expression="=" v-if="!showHelpResponse && currentProgress>=4 && !showQuestion"/>
            <MathBlock expression="=" v-if="!showHelpResponse && currentProgress>=6 && !showQuestion"/>
        </div>
        <div class="grid grid-rows-2 items-start gap-4">
            <MathBlock expression="\sum_{i=1}^{k}i\left(i+1\right) + (k+1)(k+2)"/>
            <MathBlock expression="\frac{1}{3}k(k+1)(k+2) + (k+1)(k+2)"/>
            
            <MathBlock :expression="mathAnswer[0] ?? ''" v-if="showHelpResponse && !showQuestion"/>
            <MathBlock :expression="mathAnswer[1] ?? ''" v-if="showHelpResponse && !showQuestion"/>
            <MathBlock :expression="mathAnswer[2] ?? ''" v-if="showHelpResponse && !showQuestion"/>
            <MathBlock :expression="mathAnswer[3] ?? ''" v-if="showHelpResponse && !showQuestion"/>

            <MathBlock :expression="mathAnswer[0] ?? ''" v-if="!showHelpResponse && userProgress[0] === 'Correct' && currentProgress>0 && !showQuestion"/>
            <MathBlock :expression="mathAnswer[1] ?? ''" v-if="!showHelpResponse && userProgress[2] === 'Correct' && currentProgress>2 && !showQuestion"/>
            <MathBlock :expression="mathAnswer[2] ?? ''" v-if="!showHelpResponse && userProgress[4] === 'Correct' && currentProgress>4 && !showQuestion"/>
            <MathBlock :expression="mathAnswer[3] ?? ''" v-if="!showHelpResponse && userProgress[6] === 'Correct' && currentProgress>6 && !showQuestion"/>
        </div>
        <div class="grid grid-rows-2  items-center gap-4 text-2xl">
          <span class="ml-2">| Definition of Big Sigma Notation</span>
          <span class="ml-2">| Induction Hypothesis</span>
          <span class="ml-2" v-if="showHelpResponse || userProgress[1] === 'Correct'">| Arithmetics</span>
          <span class="ml-2" v-if="showHelpResponse || userProgress[3] === 'Correct'">| Arithmetics</span>
          <span class="ml-2" v-if="showHelpResponse || userProgress[5] === 'Correct'">| Arithmetics</span>
          <span class="ml-2" v-if="showHelpResponse || userProgress[7] === 'Correct'">| Arithmetics</span>
          <div v-if="!showHelpResponse && !showQuestion && !needHelp ">
            <div v-if ="userProgress[1] === 'None' && currentProgress === 1">
              <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
            <div v-if ="userProgress[1] === 'Wrong' && currentProgress === 1" class="flex grow border-red-500 border-2 text-red">
                <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
            <div v-if ="userProgress[3] === 'None' && currentProgress === 3 ">
              <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
            <div v-if ="userProgress[3] === 'Wrong' && currentProgress === 3" class="flex grow border-red-500 border-2 text-red">
                <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
            <div v-if ="userProgress[5] === 'None' && currentProgress === 5">
              <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
            <div v-if ="userProgress[5] === 'Wrong' && currentProgress === 5" class="flex grow border-red-500 border-2 text-red">
                <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
            <div v-if ="userProgress[7] === 'None' && currentProgress === 7 ">
              <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
            <div v-if ="userProgress[7] === 'Wrong' && currentProgress === 7" class="flex grow border-red-500 border-2 text-red">
                <UInput v-model="userDescriptionStepInput" @keyup.enter="checkUserDescriptionStepInput"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 mb-2 text-black text-2xl font-bold" v-if="showQuestion ">
        <p class="flex justify-center">Be independent and do the arithmetics by yourself or ask for Dr.Cube help?</p>
        <div class="flex grow gap-4 mb-2 text-black text-xl font-bold justify-between" >
            <UserOptionButton  label="Be Independent" @click="FirstPathFunction('nohelp')"></UserOptionButton>
            <UserOptionButton label="Ask for help"  @click="FirstPathFunction('help')"></UserOptionButton>
        </div>
      </div>

      <div class="flex flex-col gap-4 mb-2 text-black text-2xl font-bold" v-if="needHelp">
        <p class="flex justify-center">Do you want help from Dr.Cube and solve the rest of arithmetic operations?</p>
        <div class="flex grow gap-4 mb-2 text-black text-xl font-bold justify-between" >
            <UserOptionButton  label="Not really, I can do this" @click="FirstPathFunction('nohelp')"></UserOptionButton>
            <UserOptionButton label="Ask for help"  @click="FirstPathFunction('help')"></UserOptionButton>
        </div>
      </div>
      <div v-if="!needHelp">
        <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': statusA === 'wrong'}" v-if="userProgress[0] !== 'Correct' && !showQuestion && currentProgress === 0">
          <UserMathInputComponent :correctAnswer="mathAnswer[0]?? ''" :wrongInput=wrongInput @input-status="handleStatus" />
      </div>
      <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': statusA === 'wrong'}" v-if="userProgress[2] !== 'Correct' && !showQuestion && currentProgress === 2">
          <UserMathInputComponent :correctAnswer="mathAnswer[1]?? ''" :wrongInput=wrongInput @input-status="handleStatus" />
      </div>
      <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': statusA === 'wrong'}" v-if="userProgress[4] !== 'Correct' && !showQuestion && currentProgress === 4">
          <UserMathInputComponent :correctAnswer="mathAnswer[2]?? ''" :wrongInput=wrongInput @input-status="handleStatus" />
      </div>
      <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': statusA === 'wrong'}" v-if="userProgress[6] !== 'Correct' && !showQuestion && currentProgress === 6">
          <UserMathInputComponent :correctAnswer="mathAnswer[3]?? ''" :wrongInput=wrongInput @input-status="handleStatus" />
      </div>
      </div>
      

    </div>
    <div class="col-start-3">
      
    </div>
    <div class="col-start-3 row-start2-2">
      <div class="text-center px-4 justify-items-center" v-if="showQuestion">
        <!-- Speech Bubble -->
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block text-lg font-medium mx-auto">
          <p>
            Now the rest is arithmetic operations.<br/>
            It is a good idea to practice this arithmetics operations.<br/>
            I highly recommend you to do <br/>
            the arithmetic operations on your own.<br/>
            But, if you are comfortable with it <br/>
            from the first place, I can help you do this work.
          </p>
          <!-- Speech bubble tail -->
          <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <!-- Dr Cube character -->
        
        <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" ></NuxtImg>
      </div>


      <div class="text-center px-4 justify-items-center" v-if="showHelpResponse">
        <!-- Speech Bubble -->
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block text-lg font-medium mx-auto">
          <p>
            Here is the arithmetic operations <br/>
            that we need to show. Wonderful! <br/>
            We are actually done. Now I can <br/>
            transform into end-of-proof symbol <br/>
            and conclude our proof. 
          </p>
          <!-- Speech bubble tail -->
          <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <!-- Dr Cube character -->
        
        <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
      </div>

      <div class="text-center px-4 justify-items-center" v-if="!showHelpResponse && currentProgress===0">
        <!-- Speech Bubble -->
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block text-lg font-medium mx-auto">
          <p>
            Respect! I believe you can do this! <br/>
            I won’t be giving any hints from now. <br/>
            Don’t be afraid. If I sense you are struggling, <br/>
            I will provide option for my help.
          </p>
          <!-- Speech bubble tail -->
          <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <!-- Dr Cube character -->
        
        <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" ></NuxtImg>
      </div>

      <div class="text-center px-4 justify-items-center" v-if="!showHelpResponse && needHelp">
        <!-- Speech Bubble -->
        <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block text-lg font-medium mx-auto">
          <p>
            I sense you are struggling. <br/>
            I am here to help.
          </p>
          <!-- Speech bubble tail -->
          <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <!-- Dr Cube character -->
        
        <NuxtImg src="/Dr.Cube/Bad.png" width="256px" height="256px" ></NuxtImg>
      </div>

      <div class="text-center px-4 justify-items-center" v-if="!showHelpResponse && !needHelp">
        <!-- Speech Bubble -->
        
        <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px" ></NuxtImg>
      </div>

      
    </div>
  </div>
</template>


