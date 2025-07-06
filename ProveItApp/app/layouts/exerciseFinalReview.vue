<script setup lang="ts">

const route= useRoute()
const titlePage = computed(() => route.meta.title as string)
const leftUrl = computed(() => route.meta.lefturl as string)
const rightUrl = computed(() => route.meta.righturl as string)
</script>

<template>
    <div class="flex flex-col bg-gradient-to-br from-white to-[#78D0FF] min-h-screen h-full w-full overflow-hidden">
        <header class=" p-8 sticky top-0">
            <ExerciseContentHeader :title="titlePage"></ExerciseContentHeader>
        </header>
        <div class="flex grow p-8 w-screen justify-center mx-auto mb-10">
            <slot></slot>
        </div>
        <footer class="p-8 sticky bottom-0">
            <FinalExerciseReviewFooter :left="leftUrl" :right="rightUrl"></FinalExerciseReviewFooter>
        </footer>
    </div>
</template>