<template>
  <div class="relative min-h-screen w-full">
    <!-- Imagen de fondo usando NuxtImg -->
    <NuxtImg
      class="absolute inset-0 w-4/5 h-4/5 object-contain mx-auto"
      src="/logo.jpg"
      alt="Imagen de fondo"
      format="webp"
    />

    <!-- Capa grisácea que cubre toda la pantalla -->
    <div
      class="fixed inset-0 bg-gray-800 bg-opacity-20 flex items-center justify-center"
    ></div>
  </div>
</template>

<style scoped>
/* No es necesario añadir estilos adicionales si usas Tailwind CSS */
</style>