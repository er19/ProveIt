<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {ComputeEngine}  from '@cortex-js/compute-engine'
import { useExerciseStore } from '~/store/FinalExerciseStore';

const ce = new ComputeEngine()
// Dynamically import MathLive and register the component
const mathfieldEl = ref<any>(null)
    
    const props = defineProps<{
        types:string,
        index:number,
        reset?: number
    }>()
    const store = useExerciseStore()
    const latex = ref('')
    onMounted(async () => {
        if (!customElements.get('math-field')) {
            await import('mathlive')
        }

        await nextTick() // wait for <math-field> to be in the DOM
        if (mathfieldEl.value) {
            mathfieldEl.value.addEventListener('input', () => {
            latex.value = mathfieldEl.value.getValue()
            })
        } else {
            console.warn('mathfieldEl is still undefined.')
        }
         if (mathfieldEl.value) {

            mathfieldEl.value.addEventListener('input', () => {
                
            })
        } else {
            console.warn('mathfieldEl is still undefined.')
        }
    })
    watch(() => props.reset, () => {
        let initialLatex = ''
        switch (props.types) {
            case "basecase":
                initialLatex = store.baseCase[props.index] || ''
                mathfieldEl.value.setValue(initialLatex)
                break
            case "inductionhypothesis":
                initialLatex = store.inductionHypothesis[props.index] || ''
                mathfieldEl.value.setValue(initialLatex)
                break
            case "inductionstep":
                initialLatex = store.inductionStep[props.index] || ''
                mathfieldEl.value.setValue(initialLatex)
                break
            case "reformulate":
                initialLatex = store.reformulateStatement[props.index] || ''
                mathfieldEl.value.setValue(initialLatex)
                break
        }
        latex.value = mathfieldEl.value.getValue()
    })

    
    
    
    function submitAnswer() {
        const answer = latex.value

        switch (props.types) {
            case "basecase":
            store.baseCase[props.index] = answer
            break
            case "inductionhypothesis":
            store.inductionHypothesis[props.index] = answer
            break
            case "inductionstep":
            store.inductionStep[props.index] = answer
            break
            case "reformulate":
            store.reformulateStatement[props.index] = answer
            break
            default:
            break
        }
    }
   
</script>

<style scoped>
math-field {
    font-size: 1em;
}
</style>
<template>
        <math-field
            ref="mathfieldEl"
            @keyup.enter="submitAnswer"
            class=" w-full h-16 border border-gray-300 rounded-lg p-2"
        ></math-field>
</template>

