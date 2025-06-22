<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps<{
        label: string
        url: string
    }>()
    const passedUrl = props.url
    const isUrlExist = computed(() => !!passedUrl?.trim())
</script>

<template> 
    <div v-if="isUrlExist">
        <NuxtLink :to="props.url" >
            <UCard class="flex border-8 border-black rounded-5xl bg-[#274C43] items-center justify-center py-12">
                    <span class="text-4xl text-white">
                    {{ props.label }}
                </span>
            </UCard>
        </NuxtLink>
    </div>
    <div v-else >
        <UCard class="flex border-8 border-black rounded-5xl bg-[#274C43] items-center justify-center py-12">
            <div class="grid grid-cols-1 justify-items-center">
                <span class="text-4xl text-neutral-600 ">
                    {{ props.label }}
                </span> 
                <span class="text-2xl text-neutral-600">
                    ( Coming soon! )
                </span>
            </div>
        </UCard>
    </div>
</template>
