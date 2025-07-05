<script setup lang="ts">
definePageMeta({
    layout: 'exercisefinalmain',
    lefturl: 'intro3',
    righturl: 'showproblem2',
    title: 'Final Exercise'
})
</script>

<template>
    <div class="grid grid-flow-col grid-rows-2 gap-4 overflow-hidden" >
        <div >
            <h3 class="flex text-black text-2xl font-bold mb-4"><span>Prove by induction that </span><MathBlock expression="1^3 + 2^3 + 3^3 + \dots + n^3 = \frac{n^2(n+1)^2}{4}"/> <span>for every positive integer n.</span></h3>
        </div>
        <div>
            <div class="grid grid-cols-2 gap-20">
                <MethodsButton url="basecase" label="Base Case"></MethodsButton> 
                <MethodsButton url="inductionstep" label="Induction Case"></MethodsButton>
                <MethodsButton url="inductionhypothesis" label="Induction Hypothesis"></MethodsButton>
                <MethodsButton url="reformulatestatement" label="Reformulate Statement"></MethodsButton>
            </div>
        </div>
        
    </div>
</template>

