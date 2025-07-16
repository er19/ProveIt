<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {ComputeEngine}  from '@cortex-js/compute-engine'

const ce = new ComputeEngine()
// Dynamically import MathLive and register the component
const mathfieldEl = ref<any>(null)
    
    const props = defineProps<{
        correctAnswer: string
        reset?: number
        wrongInput: string[]
    }>()
    
    const emit = defineEmits<{
        (e: 'input-status', status: 'inputting' | 'correct' | 'wrong'): void
    }>()
    const latex = ref('')
    const isInputCorrect = ref<'inputting' | 'correct' | 'wrong'>('inputting')
    onMounted(async () => {
        if (!customElements.get('math-field')) {
            await import('mathlive')
        }

        await nextTick() // wait for <math-field> to be in the DOM

        if (mathfieldEl.value) {
            mathfieldEl.value.addEventListener('input', () => {
            latex.value = mathfieldEl.value.getValue()
            console.log('Latex updated:', latex.value)
            })
        } else {
            console.warn('mathfieldEl is still undefined.')
        }
    })
    watch(() => props.reset, () => {
        latex.value = ''
        isInputCorrect.value = 'inputting'
        emit('input-status', 'inputting')
    })
    // Extract normalization logic
    function areLatexExpressionsEquivalent(a: string, b: string): boolean {
        console.log('Before parse User input (typing):', a)
        console.log('Before correctanswer (typing):', b) 
        const exprA = ce.parse(a)
        const exprB = ce.parse(b)
        console.log('With Parse User input (typing):', exprA.toString())
        console.log('With Parse correctanswer (typing):', exprB.toString()) 
        console.log('With Simplify User input (typing):', exprA.simplify().toString())
        console.log('With Simplify correctanswer (typing):', exprB.simplify().toString()) 
        return exprA.isSame(exprB)
    }

    function checkAnswer() {
        const isEquivalent = areLatexExpressionsEquivalent(latex.value, props.correctAnswer)
        console.log('User input:', isEquivalent.toString())
        const isNotInWrongInput = props.wrongInput.includes(latex.value) === false
        console.log('Wrong input:', isNotInWrongInput.toString())
        const isCorrect = isEquivalent && isNotInWrongInput
        if(isCorrect) {
            isInputCorrect.value = 'correct'
        }else {
            isInputCorrect.value = 'wrong'
        }
        emit('input-status', isInputCorrect.value)
    }
    function handleTyping() {
        isInputCorrect.value = 'inputting'
        emit('input-status', 'inputting')
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
            @input="handleTyping"
            @keyup.enter="checkAnswer"
            class=" w-full border border-gray-300 rounded-lg p-2 min-height:2.5rem; resize:vertical; overflow:auto;"
        ></math-field>
</template>

