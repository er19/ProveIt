<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    })
</script>
<template>
    <div>
        <h2>Mathematic Induction</h2>
        <p>
             A proof by induction of P(n), a mathematical statement involving a value n, involves these main
            steps:
            • Prove directly that P is correct for the initial value of n (for most examples you will see this
            is zero or one). This is called the base case.
            • Assume for some value k that P(k) is correct. This is called the induction hypothesis. We
            will now prove directly that P(k) ⇒ P(k + 1). That means prove directly that P(k + 1) is
            correct by using the fact that P(k) is correct. This is called the induction step.
            The combination of these steps shows that P(n) is true for all values of n.
        </p>
    </div>
</template>


