<script setup lang="ts">
    const props = defineProps<{
        title: string
    }>()
</script>

<template>

    <div class="flex container items-center justify-between gap-3 h-full mx-auto ">
        <a href="/" class="flex items-center">
            <span class="text-2xl font-bold text-green-900">{{ props.title }}</span>
        </a>
        <NuxtLink to="/" class="flex text-green-900">
            <!-- <LucideHome :size="64"></LucideHome> -->
             Home
        </NuxtLink>
    </div>
</template>

