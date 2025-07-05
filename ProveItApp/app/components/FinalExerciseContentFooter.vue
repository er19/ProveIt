<script setup lang="ts">
    const props = defineProps<{
        left: string
    }>()
</script>

<template>
    <div class="flex container items-center justify-start mx-auto ">
        <NuxtLink :to=left>
            <NuxtImg 
            width="64px" 
            height="64px"   
            src="/left-arrow.png">

            </NuxtImg>
        </NuxtLink>
    </div>
</template>

