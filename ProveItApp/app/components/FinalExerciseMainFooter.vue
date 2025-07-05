<script setup lang="ts">
    const props = defineProps<{
        right: string
    }>()
</script>

<template>
    <div class="flex container items-center justify-end mx-auto ">
        <NuxtLink :to=right>
            <NuxtImg 
            width="64px" 
            height="64px"   
            src="/editdoc.png">
            </NuxtImg>
        </NuxtLink>
    </div>
</template>

