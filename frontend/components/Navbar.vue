<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">
          <NuxtLink to="/">Home</NuxtLink>
        </div>
        <div class="flex space-x-4">
          <NuxtLink to="/categorias" class="text-white hover:text-gray-300">Categorías</NuxtLink>
          <NuxtLink to="/recetas" class="text-white hover:text-gray-300">Recetas</NuxtLink>
          <NuxtLink to="/ingredientes" class="text-white hover:text-gray-300">Ingredientes</NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí si lo deseas */
  </style>