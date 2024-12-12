<template>
  <div class="relative min-h-screen w-full">
    <Navbar />
    <NuxtImg
      class="absolute inset-0 w-4/5 h-4/5 object-contain mx-auto"
      src="/logo.jpg" 
      alt="Imagen de fondo"
      format="webp"
    />
    <div class="fixed inset-0 bg-gray-800 bg-opacity-20 flex items-center justify-center"></div>
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