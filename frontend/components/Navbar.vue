<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between">
      <li>
      <div>
        <NuxtLink to="/" class="text-blue-500 hover:underline">Volver al Home</NuxtLink>
        <NuxtLink to="/recetas" class="text-white hover:underline">Recetas</NuxtLink>
        <NuxtLink to="/categorias" class="text-white hover:underline">Categorías</NuxtLink> 
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





<!----><a href="/" class="text-blue-500 hover:underline">Volver al Home</a>
<a href="/recetas" class="text-white hover:underline">Recetas</a>
<a href="/categorias" class="text-white hover:underline">Categorías</a>  -->