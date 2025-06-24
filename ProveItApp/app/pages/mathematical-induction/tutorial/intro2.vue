<script setup lang="ts">
definePageMeta({
    layout: 'exercise-intro-outro',
    lefturl: 'intro',
    righturl: 'intro3'
})
</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="relative text-center px-4 justify-items-center">
            <!-- Speech Bubble -->
            <div class="bg-white border-4 border-black rounded-xl p-6 text-left inline-block relative text-lg font-medium mx-auto">
                <p class="">
                   So, we know that Mathematical induction is a proof
                    technique used to show that a statement is true for all 
                    natural numbers n. For that we have to follow a few steps:<br/>

                    1. Base Case<br/>
                    To prove that the statement holds for the initial value n = n_0.
                    That is, show that P(n_0) is true.<br/>
                    2. Inductive Step<br/>
                    Assume that the statement is true for some arbitrary
                    number n = k (this is the induction hypothesis).<br/>
                    Then, prove that it must also be true for n = k + 1; that is,
                    prove P(k)→ P(k+1).
                    
                </p>
                <!-- Speech bubble tail -->
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>

            <!-- Dr Cube character -->
            <NuxtImg src="/Dr.Cube/Default.png" width="256px" height="256px"></NuxtImg>
        </div>
    </div>
</template>

