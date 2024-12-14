<!-- frontend/pages/index.vue -->
<template>
  <div class="relative min-h-screen w-full">
    <Navbar />
    <div class="flex flex-col items-center justify-center h-full">
      <h1 class="text-4xl text-white font-bold mb-4">Bienvenido a la Aplicación de Recetas</h1>
      <NuxtLink to="/agregar-receta" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-2">Agregar Receta</NuxtLink>
    </div>
    <NuxtImg
      class="absolute inset-0 w-4/5 h-4/5 object-contain mx-auto"
      src="/logo.jpg" 
      alt="Imagen de fondo"
      format="webp"
    />
    <div class="fixed inset-0 bg-gray-800 bg-opacity-20"></div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'; // Importa el componente Navbar

export default {
  name: 'HomePage',
  components: {
    Navbar // Declara el componente Navbar
  }
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si lo deseas */
</style>