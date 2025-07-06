<script setup lang="ts">
const left= "reviewproof"
const right= "/mathematical-induction"
</script>

<template>
    <div class="flex container items-center justify-between mx-auto">
        <NuxtLink :to=left>
            <NuxtImg 
            width="64px" 
            height="64px"   
            src="/editdoc.png">

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

