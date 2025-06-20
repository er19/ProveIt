<script setup lang="ts">

</script>

<template >
    <div class="bg-gradient-to-br from-white to-[#78D0FF]">
        <header class="p-8 sticky top-0">
            <MainNavBar></MainNavBar>
        </header>
        <div>
            <slot></slot>
        </div>
        <footer>
            
        </footer>
    </div>
    
</template>
