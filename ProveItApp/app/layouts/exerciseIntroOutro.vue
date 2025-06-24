<script setup lang="ts">
const route= useRoute()
const leftUrl = computed(() => route.meta.lefturl as string)
const rightUrl = computed(() => route.meta.righturl as string)
</script>

<template>
    <div class="bg-gradient-to-br from-white to-[#78D0FF] h-max">
        <div class="w-full mx-auto p-8 h-max">
            <slot></slot>
        </div>
        <footer class="p-8 sticky bottom-0 mx-auto items-center">
            <ExerciseContentFooter :left="leftUrl" :right="rightUrl"></ExerciseContentFooter>
        </footer>
    </div>
    
</template>