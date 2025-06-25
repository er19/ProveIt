<!-- components/MathBlock.vue -->
<script setup lang="ts">
import katex from 'katex'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  expression: string
  displayMode?: boolean
}>()

const html = ref('')

watchEffect(() => {
  html.value = katex.renderToString(props.expression, {
    throwOnError: false,
    displayMode: props.displayMode ?? true,
  })
})
</script>

<template>
  <div v-html="html" ></div>
</template>
