
<template>
  <div class="w-full max-w-md bg-black p-0.5">
    <div class="w-full h-6 bg-gray-300 relative overflow-hidden">
      <div
        class="h-full bg-orange-400 absolute top-0 left-0 transition-all duration-500 ease-in-out"
        :style="{ width: `${initialValue}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">



const props = defineProps<{
  progress: number // 0–100
  currentProgress: number
}>()

const initialValue = ref(0)
onMounted(() => {
  // Wait 1 second after rendering before triggering the animation
  initialValue.value = props.currentProgress
  setTimeout(() => {
    requestAnimationFrame(() => {
      initialValue.value += props.progress
    })
  }, 500)
})
</script>
