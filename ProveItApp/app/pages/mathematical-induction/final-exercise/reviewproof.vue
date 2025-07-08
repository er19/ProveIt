<script setup lang="ts">
import { useExerciseStore } from '~/store/FinalExerciseStore';
import {ComputeEngine}  from '@cortex-js/compute-engine'

const ce = new ComputeEngine()
const isUserCorrect = ref(true)
definePageMeta({
    layout: 'exercise-final-review',
    lefturl: 'outro',
    righturl: 'outro',
    title: 'Final Exercise',
})


const store = useExerciseStore()

const mathExpression =  store.statement

const userInputBaseCase = store.baseCase
const userInputInductionStep= store.inductionStep
const userInputInductionHypothesis = store.inductionHypothesis
const userInputReformulate = store.reformulateStatement
const userInputInductionStepExplanation = store.inductionStepExplanation

const answerBaseCase= ref<string[]>(["n=1", "\\sum_{i=1}^{1}i^3", "1^3", 
"1^2*1", "1^2*(\\frac{4}{4})", "\\frac{1^2*2^2}{4}", "\\frac{1^2*(1+1)^2}{4}", "\\text{P(1) holds}"])

const answerInputReformulate= ref<string[]>(["\\sum_{i=1}^{n}i^3 = \\frac{n^2(n+1)^2}{4}"])

const answerInputInductionHypothesis = ref<string[]>(["\\text{Assume that P(k) is correct for some positive integer k}",
    "\\text{This means}",
    "\\sum_{i=1}^{k}i^3 = \\frac{k^2(k+1)^2}{4}",
    "\\text{holds}"

])

const answerInputInductionStep= ref<string[]>(["n=k+1", "\\sum_{i=1}^{k+1}i^3" ,
"\\sum_{i=1}^{k+1}i^3 + (k+1)^3",  "\\frac{k^2(k+1)^2}{4} + (k+1)^3", "\\frac{k^2(k+1)^2 + 4*(k+1)^3}{4}",
"\\frac{(k+1)^2(k^2 + 4*(k+1))}{4}", "\\frac{(k+1)^2(k^2 + 4k + 4)}{4}", "\\frac{(k+1)^2(k+2)^2}{4}",
"\\frac{(k+1)^2((k+1)+1)^2}{4}"
])

const answerInputInductionStepExplanations= ref<string[]>(["\\text{Definition of Big Sigma Notation}", "\\text{Induction Hypothesis}", 
    "\\text{Arithmetics}", "\\text{Arithmetics}", "\\text{Arithmetics}", "\\text{Arithmetics}", "\\text{Arithmetics}",
])





function areLatexExpressionsEquivalent(a: string, b: string): boolean {
        // console.log('Before parse User input (typing):', a)
        // console.log('Before correctanswer (typing):', b) 
        const exprA = ce.parse(a)
        const exprB = ce.parse(b)
        // if(!exprA.isSame(exprB)){
        //     console.log('--------------------------This is wrong inputttttt--------------------------------------')
        //     console.log('With Parse User input (typing):', exprA.toString())
        //     console.log('With Parse correctanswer (typing):', exprB.toString()) 
        //     console.log('With Simplify User input (typing):', exprA.simplify().toString())
        //     console.log('With Simplify correctanswer (typing):', exprB.simplify().toString()) 
        //     console.log(exprA.isSame(exprB))
        // }
        
        return exprA.isSame(exprB)
    }



</script>

<template>
   <div class="flex flex-col" >
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center">
            <p>Prove by induction that </p> 
            <MathBlock :expression='mathExpression' />
            <p> for every positive integer n.</p>
        </div>
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center" v-if="userInputReformulate[0] !== ''" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputReformulate[0]??'', answerInputReformulate[0]??'')
    }">
                <p>Reformulated statement: Let P(n) be the statement that</p> 
                <MathBlock :expression='userInputReformulate[0] || ""' />
                <p> for every positive integer n.</p>
        </div>
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center" v-if="userInputReformulate[0] === '' ">
            <p>No reformulation of statement</p>
        </div>
        <div>
            <p class="text-black text-2xl font-bold mb-10">
              1. Base Case
            </p>
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid grid-rows-6 items-center gap-4">
                    <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-24 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[0]??'', answerBaseCase[0]??'')
    }">

                    <MathBlock :expression="userInputBaseCase[0] || ''" v-if="userInputBaseCase[0] !== ''"  />
                    
                    </div>
                    <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                
                <div class="grid grid-rows-6 items-start gap-4">
                    <MathBlock expression="\implies"/>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                
                <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" >
                    <div class="grid grid-rows-6 items-center gap-4">
                        <div class="flex mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[1]??'', answerBaseCase[1]??'')
    }">
                            <MathBlock :expression="userInputBaseCase[1] || ''" v-if="userInputBaseCase[1] !== ''" />
                        </div>
                        
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="grid grid-rows-6 items-center gap-4">
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                        <MathBlock expression='='/>
                    </div>
                    <div class="grid grid-rows-6 items-center gap-4">
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[2]??'', answerBaseCase[2]??'')
    }">
                            <MathBlock :expression="userInputBaseCase[2] || ''" v-if="userInputBaseCase[2] !== ''" />
                        </div>
                        
                        <div class="flex growgap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[3]??'', answerBaseCase[3]??'')
    }">
                            <MathBlock :expression="userInputBaseCase[3] || ''" v-if="userInputBaseCase[3] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[4]??'', answerBaseCase[4]??'')
    }">
                            <MathBlock :expression="userInputBaseCase[4] || ''" v-if="userInputBaseCase[4] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[5]??'', answerBaseCase[5]??'')
    }">
                            <MathBlock :expression="userInputBaseCase[5] || ''" v-if="userInputBaseCase[5] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[6]??'', answerBaseCase[6]??'')
    }">
                            <MathBlock :expression="userInputBaseCase[6] || ''" v-if="userInputBaseCase[6] !== ''" />
                        </div>

                    </div>
                </div>
            </div>
            <div class=" flex  gap-4 text-black text-2xl font-bold mb-10" >
                <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100"  >
                    <MathBlock :expression="userInputBaseCase[7] || ''" v-if="userInputBaseCase[7] !== ''" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputBaseCase[7]??'', answerBaseCase[7]??'')
    }"/>
                </div>
                
            </div>    
        </div>
        <div class="flex flex-col justify-start" >  
            <p class="text-black text-2xl font-bold mb-10">
                Induction Hypothesis
            </p>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100"  >

            <MathBlock :expression="userInputInductionHypothesis[0] || ''" v-if="userInputInductionHypothesis[0] !== ''"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionHypothesis[0]??'', answerInputInductionHypothesis[0]??'')
    }"/>
            
            </div>
            <div class="grid grid-cols-3 grid-rows-1 gap-4">
                <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionHypothesis[1]??'', answerInputInductionHypothesis[1]??'')
    }">

            <MathBlock :expression="userInputInductionHypothesis[1] || ''" v-if="userInputInductionHypothesis[1] !== ''"  />
            
            </div>
                <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionHypothesis[2]??'', answerInputInductionHypothesis[2]??'')
    }">

            <MathBlock :expression="userInputInductionHypothesis[2] || ''" v-if="userInputInductionHypothesis[2] !== ''"  />
            
            </div>
            <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8 border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionHypothesis[3]??'', answerInputInductionHypothesis[3]??'')
    }">

            <MathBlock :expression="userInputInductionHypothesis[3] || ''" v-if="userInputInductionHypothesis[3] !== ''"  />
            
            </div>
        </div>
       
        <div class="flex flex-col" >
            <p class="text-black text-2xl font-bold mb-10">
              2. Induction Step
            </p>
             <div class="flex gap-4 mb-2 text-black text-2xl font-bold">
                <div class="grid  items-start gap-4">
                    <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-24 min-h-8"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[0]??'', answerInputInductionStep[0]??'')
    }">

                    <MathBlock :expression="userInputInductionStep[0] || ''" v-if="userInputInductionStep[0] !== ''"  />
                    
                    </div>
                </div>
                
                <div class="grid  items-start gap-4">
                    <MathBlock expression="\implies"/>
                </div>
                
                <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around" >
                    <div class="grid grid-rows-6 items-start gap-4">
                        <div class="flex mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[1]??'', answerInputInductionStep[1]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[1] || ''" v-if="userInputInductionStep[1] !== ''" />
                        </div>
                        
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
                    <div class="grid grid-rows-6 items-start gap-4 mb-10">
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[2]??'', answerInputInductionStep[2]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[2] || ''" v-if="userInputInductionStep[2] !== ''" />
                        </div>
                        
                        <div class="flex growgap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[3]??'', answerInputInductionStep[3]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[3] || ''" v-if="userInputInductionStep[3] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[4]??'', answerInputInductionStep[4]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[4] || ''" v-if="userInputInductionStep[4] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[5]??'', answerInputInductionStep[5]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[5] || ''" v-if="userInputInductionStep[5] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[6]??'', answerInputInductionStep[6]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[6] || ''" v-if="userInputInductionStep[6] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[7]??'', answerInputInductionStep[7]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[7] || ''" v-if="userInputInductionStep[7] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStep[8]??'', answerInputInductionStep[8]??'')
    }">
                            <MathBlock :expression="userInputInductionStep[8] || ''" v-if="userInputInductionStep[8] !== ''" />
                        </div>
                        
                    </div>
                    <div class="grid grid-rows-6 items-start gap-4 mb-10">
                        <div class="flex grow gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100":class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStepExplanation[0]??'', answerInputInductionStepExplanations[0]??'')
    }">
<MathBlock :expression="userInputInductionStepExplanation[0] || ''" v-if="userInputInductionStepExplanation[0] !== ''" />                        </div>
                        
                        <div class="flex growgap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100"  :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStepExplanation[1]??'', answerInputInductionStepExplanations[1]??'')
    }">
                            <MathBlock :expression="userInputInductionStepExplanation[1] || ''" v-if="userInputInductionStepExplanation[1] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStepExplanation[2]??'', answerInputInductionStepExplanations[2]??'')
    }">
                            <MathBlock :expression="userInputInductionStepExplanation[2] || ''" v-if="userInputInductionStepExplanation[2] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStepExplanation[3]??'', answerInputInductionStepExplanations[3]??'')
    }">
                            <MathBlock :expression="userInputInductionStepExplanation[3] || ''" v-if="userInputInductionStepExplanation[3] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStepExplanation[4]??'', answerInputInductionStepExplanations[4]??'')
    }">
                            <MathBlock :expression="userInputInductionStepExplanation[4] || ''" v-if="userInputInductionStepExplanation[4] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStepExplanation[5]??'', answerInputInductionStepExplanations[5]??'')
    }">
                            <MathBlock :expression="userInputInductionStepExplanation[5] || ''" v-if="userInputInductionStepExplanation[5] !== ''" />
                        </div>

                        <div class="flex gap-4 mb-2 text-black text-2xl font-bold justify-around p-1 rounded-md cursor-pointer border transition-colors duration-200 min-w-70 min-h-8  border-blue-300 hover:border-gray-300 hover:bg-gray-100" :class="{
      'border-red-500 bg-red-100': !areLatexExpressionsEquivalent(userInputInductionStepExplanation[6]??'', answerInputInductionStepExplanations[6]??'')
    }">
                            <MathBlock :expression="userInputInductionStepExplanation[6] || ''" v-if="userInputInductionStepExplanation[6] !== ''" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    
    </div>
    </div>
</template>
