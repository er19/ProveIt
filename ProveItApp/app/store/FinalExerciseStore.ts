import { defineStore } from 'pinia'

export const useExerciseStore = defineStore('exercise', {
  state: () => ({
    baseCase: [''] as string[],
    inductionHypothesis: [''] as string[],
    inductionStep: [''] as string[],
    reformulateStatement: [''] as string[],
    statement: '' as string,
    inductionStepExplanation:  [''] as string[],
  }),
  persist: {
    storage: sessionStorage, // 👈 THIS makes it clear on tab close!
  }
})