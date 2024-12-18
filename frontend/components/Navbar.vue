<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between">
      <li>
      <div>
        <NuxtLink to="/" class="text-blue-500 hover:underline mr-4">Home</NuxtLink>
        <NuxtLink to="/recetas" class="text-white hover:underline mr-4">Recetas</NuxtLink>
        <NuxtLink to="/categorias" class="text-white hover:underline mr-4">Categorías</NuxtLink> 
      </div>
    </li>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>





