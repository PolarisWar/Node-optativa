<template>
  <div class="relative min-h-screen w-full bg-gray-900">
    <Navbar />
    <div class="flex flex-col items-center justify-center h-full">
      <h1 class="text-4xl text-white font-bold mb-4">Bienvenido</h1>
    </div>
    <NuxtImg
      class="absolute inset-0 w-4/5 h-4/5 object-contain mx-auto"
      src="/logo.jpg" 
      alt="Imagen de fondo"
      format="webp"
      style="display: none;"
    />
    <div class="fixed inset-0 bg-gray-800 bg-opacity-20"></div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar
  }
}
</script>