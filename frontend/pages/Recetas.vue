<!-- frontend/pages/recetas.vue -->
<template>
    <div>
      <h1 class="text-4xl text-center my-4">Lista de Recetas</h1>
      
      <!-- Enlace para volver a la página de inicio -->
      <div class="text-center mb-4">
        <NuxtLink to="/" class="text-blue-500 hover:underline">Volver al Home</NuxtLink>
      </div>
  
      <!-- Formulario para agregar una nueva receta -->
      <h2 class="text-2xl text-center my-4">Agregar Nueva Receta</h2>
      <form @submit.prevent="agregarReceta" class="mb-4">
        <input v-model="receta_name" placeholder="Nombre de la receta" required class="border p-2 mb-2 w-full" />
        <input v-model="receta_descripcion" placeholder="Descripción" required class="border p-2 mb-2 w-full" />
        <textarea v-model="receta_instrucciones" placeholder="Instrucciones" required class="border p-2 mb-2 w-full"></textarea>
        <input v-model="tiempo_preparacion" type="number" placeholder="Tiempo de preparación (minutos)" required class="border p-2 mb-2 w-full" />
        <input v-model="categoriaId" type="number" placeholder="ID de categoría" required class="border p-2 mb-2 w-full" />
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Agregar Receta</button>
      </form>
  
      <!-- Lista de recetas -->
      <ul class="list-disc pl-5">
        <li v-for="receta in recetas" :key="receta.id" class="my-2">
          {{ receta.receta_name }} - {{ receta.receta_descripcion }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recetas: [],
        receta_name: '',
        receta_descripcion: '',
        receta_instrucciones: '',
        tiempo_preparacion: '',
        categoriaId: '',
      };
    },
    async mounted() {
      await this.obtenerRecetas();
    },
    methods: {
      async obtenerRecetas() {
        try {
          const response = await fetch('http://localhost:3000/recetas'); // Cambia la URL si es necesario
          if (!response.ok) {
            throw new Error('Error al obtener recetas');
          }
          const data = await response.json();
          this.recetas = data; // Asigna los datos a la variable recetas
        } catch (error) {
          console.error('Error al obtener recetas:', error);
        }
      },
      async agregarReceta() {
        try {
          const nuevaReceta = {
            receta_name: this.receta_name,
            receta_descripcion: this.receta_descripcion,
            receta_instrucciones: this.receta_instrucciones,
            tiempo_preparacion: this.tiempo_preparacion,
            categoriaId: this.categoriaId,
          };
          
          const response = await fetch('http://localhost:3000/recetas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaReceta),
          });
  
          if (!response.ok) {
            throw new Error('Error al agregar receta');
          }
  
          alert('Receta agregada exitosamente');
          this.receta_name = '';
          this.receta_descripcion = '';
          this.receta_instrucciones = '';
          this.tiempo_preparacion = '';
          this.categoriaId = '';
          
          // Actualiza la lista de recetas después de agregar una nueva
          await this.obtenerRecetas();
        } catch (error) {
          console.error('Error al agregar receta:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>