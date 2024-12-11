<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <Header :name="name" :lastName="lastName" :fullName="fullName" />
        <main class="flex-grow container mx-auto p-5 space-y-5">

        </main>
        <Footer />
    </div>
</template>

<script setup>
import {ref, computed } from "vue";

const name = ref ("Lolo");
const lastName = ref ("Joja");

const fullName = computed(()=>  `$(name.value) $(lastName.value)`);
</script>