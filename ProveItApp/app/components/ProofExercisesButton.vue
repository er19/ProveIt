<script setup lang="ts">
    const props = defineProps<{
        label: string
        url: string
    }>()

</script>

<template>
    <NuxtLink :to="props.url" >
        <UCard class="flex border-4 border-black rounded-5xl bg-[#274C43] items-center py-2 w-full">
            <span class="text-3xl text-white w-full">
                {{ props.label }}
            </span> 
        </UCard>
    </NuxtLink>
</template>
