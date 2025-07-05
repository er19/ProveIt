<script setup lang="ts">
definePageMeta({
    layout: 'exercisefinalcontent',
    lefturl: 'showproblem2',
    righturl: 'basecase2',
    title: 'Final Exercise'
})

const mathExpression = defineModel('mathExpression')
</script>
<template>
   <div class="flex flex-col" >
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center">
            <p>Prove by induction that </p> 
            <MathBlock :expression=mathExpression/>
            <p> for every positive integer n.</p>
        </div>
        <div>
            <p class=" flex gap-4 text-black text-2xl font-bold mb-4">Let P(n) be the statement that </p>
            <p class="text-black text-2xl font-bold mb-10">
              1. Base Case
            </p>
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-col-2 items-start gap-4">
                    <MathBlock expression="n ="/>
                    
                </div>
                <div class="flex min-w-24 gap-4 mb-2 text-black text-2xl font-bold justify-around item-center" :class="{
'border-red-500 border-2': status === 'wrong'}" v-if="status === 'inputting' || status === 'wrong'">
                    <UserMathInputComponent correctAnswer='1' :wrongInput=wrongInput @input-status="status = $event; "/>
                </div>
                <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="status === 'correct'">
                    <MathBlock expression="1"/>
                </div>
                <div class="grid  items-start gap-4">
                    <MathBlock expression="\implies"/>
                    
                </div>
                
                <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around"  v-if="status === 'correct'">
                    <div class="grid grid-rows-6 items-start gap-4">
                        <MathBlock expression='\sum_{i=1}^{1}i\left(i+1\right)'/>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="grid grid-rows-6 items-start gap-4">
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                    </div>
                    <div class="grid grid-rows-6 items-start gap-4">
                        <MathBlock expression='1(2)'/>
                        <MathBlock expression='2'/>
                        <MathBlock expression='1(1)(2)'/>
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" :class="{
    'border-red-500 border-2': statusA === 'wrong'}" v-if="statusA === 'inputting' || statusA === 'wrong'">
                            <UserMathInputComponent correctAnswer='\frac{3}{3}\cdot1\cdot(2)' :wrongInput=wrongInputA :reset=resetWatcherA @input-status="handleStatusA"/>
                        </div>
                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="statusA === 'correct'">
                            <MathBlock expression="\frac{3}{3}\cdot1\cdot(2)"/>
                        </div>
                        <MathBlock expression='\frac{1}{3}1(2)(3)'/>
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" :class="{
        'border-red-500 border-2': statusB === 'wrong'}" v-if="statusB === 'inputting' || statusB === 'wrong'">
                            <UserMathInputComponent correctAnswer='\frac{1}{3}\cdot1\cdot(1+1)\cdot(1+2)' :wrongInput=wrongInputB :reset=resetWatcherB @input-status="handleStatusB" />
                        </div>
                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around" v-if="statusB === 'correct'">
                            <MathBlock expression="\frac{1}{3}\cdot1\cdot(1+1)\cdot(1+2)"/>
                        </div>
                    </div>
                </div>
            </div>
            <p class=" flex  gap-4 text-black text-2xl font-bold mb-4" v-if="focusInput === 'Done'"><span>P(1) holds</span></p>
        </div>
        
    </div>
</template>

