<script setup lang="ts">
    definePageMeta({
    layout: 'default'
    })
</script>
 
<template>
    <div class="flex flex-col items-center justify-center gap-2 h-screen  mx-auto">
        <div class="grid grid-cols gap-10 w-5/6">
            <NuxtLink to="/mathematical-induction/tutorial/intro">
                <ProofExercisesButton label="Tutorial"></ProofExercisesButton>
            </NuxtLink>
            <NuxtLink to="/mathematical-induction/exercise-1/showproblem">
                <ProofExercisesButton label="Exercise 1"></ProofExercisesButton>
            </NuxtLink>
            <NuxtLink to="/mathematical-induction/exercise-2/showproblem">
                <ProofExercisesButton label="Exercise 2"></ProofExercisesButton>
            </NuxtLink>
            <NuxtLink to="/mathematical-induction/final-exercise/intro">
                <ProofExercisesButton label="Final Exercise"></ProofExercisesButton>
            </NuxtLink>
        </div>
    </div>
</template>


