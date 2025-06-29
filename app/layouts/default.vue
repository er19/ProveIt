<script setup lang="ts">

</script>

<template >
    <div class="bg-gradient-to-br from-white to-[#78D0FF]">
        <header class="p-8 sticky top-0 mx-auto items-center">
            <DefaultNavBar></DefaultNavBar>
        </header>
        <div class="w-full mx-auto p-8">
            <slot></slot>
        </div>
    </div>
    
</template>
