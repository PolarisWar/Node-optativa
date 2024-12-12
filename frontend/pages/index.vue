<template>
  <div class="relative min-h-screen w-full">
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
export default {
  name: 'HomePage',
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si lo deseas */
</style>