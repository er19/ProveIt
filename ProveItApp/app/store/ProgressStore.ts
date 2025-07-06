import { defineStore } from 'pinia'

export const useProgressStore = defineStore('progress', {
  state: () => ({
    isTutorialFinished:false,
    isFirstExerciseFinished:false,
    isSecondExerciseFinished:false,
    isFinalExerciseFinished:false,
    independentBar: 10 

  }),
  actions:{
    IncreasingIndependentBar(value:number){
        this.independentBar += value
    },
    FinishTutorial(){
        this.isTutorialFinished = true;
    },
    FinishFirstExercise(){
        this.isFirstExerciseFinished = true;
    },
    FinishSecondExercise(){
        this.isSecondExerciseFinished = true;
    },
    FinishFinalExercise(){
        this.isFinalExerciseFinished = true;
    },
  },
  persist: {
    storage: sessionStorage, // 👈 THIS makes it clear on tab close!
  }
})