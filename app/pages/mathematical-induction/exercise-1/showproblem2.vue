<script setup lang="ts">
import UserOptionButton from '~/components/UserOptionButton.vue';

definePageMeta({
    layout: 'exercise-content',
    lefturl: 'showproblem',
    righturl: 'basecase',
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
    <div class="grid grid-cols-3 grid-rows-3 gap-4 overflow-hidden " >
        <div class="col-span-2 row-span-2">
            <h3 class="flex text-black text-2xl font-bold mb-4 gap-4"><span>Prove by induction that the nth odd number is 2n − 1.</span></h3>
            <p class="text-black text-2xl font-bold mb-10">
                Can we write this statement with big sigma notation?
            </p>
            
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="showQuestion">
                <UserOptionButton label="Yes" @click="FirstPathFunction('wrong')"></UserOptionButton>
                <UserOptionButton label="No" @click="FirstPathFunction('right')"></UserOptionButton>
            </div>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="showWrongResponse">
                <div><UIcon name="i-lucide-X" class="size-6"></UIcon></div>
                
                <UserOptionButton label="No" @click="FirstPathFunction('right')"></UserOptionButton>
            </div>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="showRightResponse">
                
            </div>
        </div>
        <div class="col-start-3"></div>
        <div class="col-start-3 row-start-2">
            <div class="text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p v-if="showQuestion">
                    What do you think?
                </p>
                <p v-if="showWrongResponse">
                    Some statement doesn’t need <br/>
                    to be written in big sigma notation, <br/>
                    since there is no repetitive addition!
                </p>
                <p v-if="showRightResponse">
                    Great! You discovered that <br/>
                    not all statement can be written <br/>
                    in big sigma notation. 
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
            </div>
        </div>
        <div class="col-span-3 row-start-3">
            <p class="text-black text-2xl font-bold mb-4 justify-items-center text-center">
                Further explanation about big sigma notation in this <a href="https://www.mathsisfun.com/algebra/sigma-notation.html" target="_blank" class="text-blue-500 hover:underline">link</a>.
            </p>
        </div>
    </div>
</template>

