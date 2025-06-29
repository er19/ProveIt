<script setup lang="ts">
const route= useRoute()
const titlePage = computed(() => route.meta.title as string)
const leftUrl = computed(() => route.meta.lefturl as string)
const rightUrl = computed(() => route.meta.righturl as string)
</script>

<template>
    <div class="flex flex-col bg-gradient-to-br from-white to-[#78D0FF] min-h-screen h-screen w-screen overflow-hidden">
        <header class=" p-8 sticky top-0 mx-auto  w-screen">
            <ExerciseContentHeader :title="titlePage"></ExerciseContentHeader>
        </header>
        <div class="flex p-8 mx-auto w-screen justify-center h-screen">
            <slot></slot>
        </div>
        <footer class="p-8 sticky bottom-0 mx-auto w-screen">
            <ExerciseContentFooter :left="leftUrl" :right="rightUrl"></ExerciseContentFooter>
        </footer>
    </div>
</template>