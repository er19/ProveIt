<script setup lang="ts">
import { useProgressStore } from '~/store/ProgressStore';

    definePageMeta({
    layout: 'default'
    })

    const progressStore = useProgressStore()
    progressStore.ResetProgressList()
</script>
 
<template>
    <div class="flex flex-col items-center justify-center gap-2 h-screen  mx-auto">
        <div class="grid grid-cols gap-10 w-5/6">
            <NuxtLink to="/mathematical-induction/tutorial/intro">
                <ProofExercisesButton label="Tutorial"></ProofExercisesButton>
            </NuxtLink>
            <NuxtLink to="/mathematical-induction/exercise-1/showproblem" v-if="progressStore.isTutorialFinished">
                <ProofExercisesButton label="Exercise 1"></ProofExercisesButton>
            </NuxtLink>
            <NuxtLink to="/mathematical-induction/exercise-2/showproblem" v-if="progressStore.isTutorialFinished">
                <ProofExercisesButton label="Exercise 2"></ProofExercisesButton>
            </NuxtLink>
            <NuxtLink to="/mathematical-induction/final-exercise/intro" v-if="progressStore.isFinalExerciseShowed">
                <ProofExercisesButton label="Final Exercise"></ProofExercisesButton>
            </NuxtLink>
        </div>
    </div>
</template>


