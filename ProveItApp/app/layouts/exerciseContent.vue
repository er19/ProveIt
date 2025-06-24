<script setup lang="ts">
const route= useRoute()
const titlePage = computed(() => route.meta.title as string)
const leftUrl = computed(() => route.meta.lefturl as string)
const rightUrl = computed(() => route.meta.righturl as string)
</script>

<template>
    <div class="flex flex-col bg-gradient-to-br from-white to-[#78D0FF] min-h-screen h-screen overflow-hidden">
        <header class=" p-8 sticky top-0 mx-auto items-center">
            <ExerciseContentHeader :title="titlePage"></ExerciseContentHeader>
        </header>
        <div class="flex p-8 mx-auto ">
            <slot></slot>
        </div>
        <footer class="p-8 sticky bottom-0 mx-auto items-center">
            <ExerciseContentFooter :left="leftUrl" :right="rightUrl"></ExerciseContentFooter>
        </footer>
    </div>
</template>