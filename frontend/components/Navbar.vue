<template>
  <nav class="bg-gray-800 p-4">
    <NuxtLink to="/" class="text-white hover:underline">Home</NuxtLink>
    <NuxtLink to="/recetas" class="text-white hover:underline ml-4">Recetas</NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>