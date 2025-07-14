import { defineStore } from 'pinia'

export const useProgressStore = defineStore('progress', {
  state: () => ({
    isTutorialFinished:false,
    isFirstExerciseFinished:false,
    isSecondExerciseFinished:false,
    isFinalExerciseShowed:false,
    independentBar: 0,
    progressInExercise1: [false,false,false,false] as boolean[],
    progressInExercise2: [false,false,false,false,false,false] as boolean[]

  }),
  actions:{
    IncreasingIndependentBar(value:number){
        this.independentBar += value
    },
    FinishTutorial(){
        this.isTutorialFinished = true;
        if(this.independentBar == 0){
          this.IncreasingIndependentBar(25)
        } 
    },
    FinishFirstExercise(){
        this.isFirstExerciseFinished = true;
        if(this.independentBar == 25){
          this.IncreasingIndependentBar(25)
        } 
        if(this.independentBar == 50 && this.isSecondExerciseFinished){
          this.IncreasingIndependentBar(25)
        }
    },
    FinishSecondExercise(){
        this.isSecondExerciseFinished = true;
         if(this.independentBar == 25){
          this.IncreasingIndependentBar(25)
        } 
        if(this.independentBar == 50 && this.isFirstExerciseFinished){
          this.IncreasingIndependentBar(25)
        }
    },
    ShowFinalExercise(){
      if(this.isFirstExerciseFinished && this.isSecondExerciseFinished && this.isTutorialFinished){
        this.isFinalExerciseShowed = true;
        this.independentBar = 100;
      }
    },
    ResetProgressList(){
      this.progressInExercise1 = [false,false,false,false];
      this.progressInExercise2 = [false,false,false,false,false,false];
    },
    UpdateProgressInExercise1(index: number) {
      console.log("Before update:", this.progressInExercise1)
      this.progressInExercise1.splice(index, 1, true)
      console.log("After update:", this.progressInExercise1)
    },
    UpdateProgressInExercise2(index: number) {
      this.progressInExercise2.splice(index, 1, true)
    }
  },
  persist: {
    storage: sessionStorage
  }
})