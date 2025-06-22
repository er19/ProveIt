<script setup lang="ts">
    definePageMeta({
    layout: 'default'
    })
</script>
 
<template>
    <div class="flex flex-col items-center justify-center gap-2 h-screen  mx-auto">
        <div class="grid grid-cols gap-10 w-5/6">
            <ProofExercisesButton url="/mathematical-induction/tutorial" label="Tutorial"></ProofExercisesButton>
            <ProofExercisesButton url="/mathematical-induction/exercise-1" label="Exercise 1"></ProofExercisesButton>
            <ProofExercisesButton url="/mathematical-induction/exercise-2" label="Exercise 2"></ProofExercisesButton>
            <ProofExercisesButton url="/mathematical-induction/final-exercise" label="Final Exercise"></ProofExercisesButton>
        </div>
    </div>
</template>


