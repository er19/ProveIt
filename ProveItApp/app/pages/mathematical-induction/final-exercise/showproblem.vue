<script setup lang="ts">
import { useExerciseStore } from '~/store/FinalExerciseStore';

definePageMeta({
    layout: 'exercisefinalmain',
    righturl: 'review',
    title: 'Final Exercise'
})


const store = useExerciseStore()

onMounted(() => {
    store.statement='1^3 + 2^3 + 3^3 + \\dots + n^3 = \\frac{n^2(n+1)^2}{4}'
    // if(store.reformulateStatement[0] === '') store.reformulateStatement[0]='1^3 + 2^3 + 3^3 + \\dots + n^3 = \\frac{n^2(n+1)^2}{4}'
})

const mathExpression = '1^3 + 2^3 + 3^3 + \\dots + n^3 = \\frac{n^2(n+1)^2}{4}'
</script>

<template>
    <div class="flex flex-col" >
        <div class="flex text-black text-2xl font-bold gap-4 mb-4 items-center">
            <p>Prove by induction that </p> 
            <MathBlock :expression='mathExpression' />
            <p> for every positive integer n.</p>
        </div>
        <div>
            <div class="grid grid-cols-2 gap-20">
                <MethodsButton url="basecase" label="Base Case" ></MethodsButton> 
                <MethodsButton url="inductionstep" label="Induction Step"></MethodsButton>
                <MethodsButton url="inductionhypothesis" label="Induction Hypothesis"></MethodsButton>
                <MethodsButton url="reformulatestatement" label="Reformulate Statement"></MethodsButton>
            </div>
        </div>
        
    </div>
</template>

