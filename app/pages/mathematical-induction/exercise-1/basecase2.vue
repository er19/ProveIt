<script setup lang="ts">
import UserOptionButton from '~/components/UserOptionButton.vue';

definePageMeta({
    layout: 'exercise-content',
    lefturl: 'basecase',
    righturl: 'inductionhypothesis',
    title: 'Exercise 1'
})
const showQuestion = ref(true);
const showWrongResponse = ref(false);
const showRightResponse = ref(false);

function FirstPathFunction(x: string){
    if(x === 'right'){
        showQuestion.value = false;
        showRightResponse.value = true;
        showWrongResponse.value = false;
    }else{
        showQuestion.value = false;
        showRightResponse.value = false;
        showWrongResponse.value = true;
    }
}

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-2 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4"><span>Prove by induction that the nth odd number is 2n−1.</span></p>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4">Let P(n) be the statement that the nth odd number is 2n-1</p>
            <p class="text-black text-2xl font-bold mb-10">
              1. Base Case
            </p>
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid  items-start gap-4">
                    <MathBlock expression="n = ?"/>
                    
                </div>
                <div class="grid  items-start gap-4">
                    <MathBlock expression="\implies"/>
                    
                </div>
                <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-between"  v-if="showQuestion">
                    <UserOptionButton  label="0" @click="FirstPathFunction('wrong')"></UserOptionButton>
                    <UserOptionButton label="1"  @click="FirstPathFunction('right')"></UserOptionButton>
                </div>

                 <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around"  v-if="showWrongResponse">
                    <div></div>
                    <UserOptionButton label="1"  @click="FirstPathFunction('right')"></UserOptionButton>
                </div>
                
                <div class="flex-auto grow gap-4 mb-2 text-black text-2xl font-bold justify-around"  v-if="showRightResponse">
                    <span>
                        The first odd number is 1, which is 2(1)-1
                    </span>
                </div>
            </div>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4" v-if="showRightResponse"><span>P(1) holds</span></p>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start2-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p v-if="showQuestion">
                   What value of n should we <br/> 
                   choose for our base case?
                </p>
                <p v-if="showWrongResponse">
                    Zero-th odd number doesn’t exist. <br/>
                    Click the other option!
                </p>
                <p v-if="showRightResponse">
                    Good! Since we are talking about <br/>
                    the nth odd number, we should start <br/>
                    with the FIRST odd number (n=1) <br/>
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

