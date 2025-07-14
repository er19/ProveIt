<script setup lang="ts">
import { useProgressStore } from '~/store/ProgressStore';

    const props = defineProps<{
        title: string
        showProgressBar: boolean 
        exerciseIndex: number
        taskIndex: number
    }>()
    
    const progressStore = useProgressStore()

    const taskProgressList = computed(() => {
    return props.exerciseIndex === 1
        ? progressStore.progressInExercise1
        : progressStore.progressInExercise2
    })

    const currentValue = computed(() => {
        if (!props.showProgressBar) return 0
        let value = progressStore.independentBar
        taskProgressList.value.forEach((element) => {
            if (element) value += 5
        })
        return value
    })

    const showBar = computed(() => {
    return props.showProgressBar && taskProgressList.value[props.taskIndex]
    })
</script>

<template>

    <div class="flex container items-center justify-between gap-3 mx-auto">
        <a href="/" class="flex items-center">
            <span class="text-2xl font-bold text-green-900">{{ props.title }}</span>
        </a>
        <div class="flex flex-row items-center gap-8 justify-items-end">
            <div class="w-100 ">
                <ProgressBarComponent :progress="5" :current-progress="currentValue" v-if="showBar" />
            </div>
            <div>
               <NuxtLink to="/" class="flex text-green-900 text-2xl">
                Home
                </NuxtLink>
            </div>
            
        </div>
        
    </div>
</template>

