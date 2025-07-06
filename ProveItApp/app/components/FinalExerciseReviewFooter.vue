<script setup lang="ts">
import { useProgressStore } from '~/store/ProgressStore';

    const props = defineProps<{
        left: string
        right: string
    }>()
    
</script>

<template>
    <div class="flex container items-start justify-between mx-auto " v-if="left === 'outro'">
        <NuxtLink :to=left>
            <NuxtImg 
            width="64px" 
            height="64px"   
            src="/left-arrow.png">

            </NuxtImg>
        </NuxtLink>
    </div>
    <div class="flex container items-center justify-between mx-auto" v-else>
        <NuxtLink :to=left>
            <NuxtImg 
            width="64px" 
            height="64px"   
            src="/left-arrow.png">

            </NuxtImg>
        </NuxtLink>
        <NuxtLink :to=right >
            <NuxtImg 
            width="128px" 
            height="128px"   
            src="/submit.png"> 
            </NuxtImg>
        </NuxtLink>
    </div>
    
</template>

