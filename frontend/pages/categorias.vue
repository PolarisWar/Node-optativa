<template>
    <div class="p-4">
      <h1 class="text-4xl text-center my-4">Lista de Categorías</h1>
      
      <div class="text-center mb-4">
        <NuxtLink to="/" class="text-blue-500 hover:underline">Volver al Home</NuxtLink>
      </div>
  
      <h2 class="text-2xl text-center my-4">Agregar Nueva Categoría</h2>
      <form @submit.prevent="agregarCategoria" class="mb-4">
        <input v-model="categoria_name" placeholder="Nombre de la categoría" required class="border p-2 mb-2 w-full" />
        <input v-model="categoria_descripcion" placeholder="Descripción" required class="border p-2 mb-2 w-full" />
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Agregar Categoría</button>
      </form>
  
      <ul class="list-disc pl-5">
        <li v-for="categoria in categorias" :key="categoria.id" class="my-2">
          {{ categoria.categoria_name }} - {{ categoria.categoria_descripcion }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categorias: [],
        categoria_name: '',
        categoria_descripcion: '',
      };
    },
    async mounted() {
      await this.obtenerCategorias();
    },
    methods: {
      async obtenerCategorias() {
        try {
          const response = await fetch('http://localhost:3000/categorias');
          if (!response.ok) {
            throw new Error('Error al obtener categorías');
          }
          const data = await response.json();
          this.categorias = data;
        } catch (error) {
          console.error('Error al obtener categorías:', error);
        }
      },
      async agregarCategoria() {
        try {
          const nuevaCategoria = {
            categoria_name: this.categoria_name,
            categoria_descripcion: this.categoria_descripcion,
          };
          
          const response = await fetch('http://localhost:3000/categorias', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaCategoria),
          });
  
          if (!response.ok) {
            throw new Error('Error al agregar categoría');
          }
  
          alert('Categoría agregada exitosamente');
          this.categoria_name = '';
          this.categoria_descripcion = '';
          
          // Actualiza la lista de categorías después de agregar una nueva
          await this.obtenerCategorias();
        } catch (error) {
          console.error('Error al agregar categoría:', error);
        }
      },
    },
  };
  </script>