<script setup lang="ts">
    const props = defineProps<{
        left: string
        right: string
    }>()
</script>

<template>
    <div class="flex container items-center justify-between mx-auto ">
        <NuxtLink :to=left>
            <NuxtImg 
            width="64px" 
            height="64px"   
            src="/left-arrow.png">

            </NuxtImg>
        </NuxtLink>
        <NuxtLink :to=right>
            <NuxtImg 
            width="64px" 
            height="64px"   
            src="/right-arrow.png"> 
            </NuxtImg>
        </NuxtLink>
    </div>
</template>

