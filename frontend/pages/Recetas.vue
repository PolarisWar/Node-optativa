<template>
  <div class="p-4">
    <h1 class="text-4xl text-center my-4">Lista de Recetas</h1>
    
    <div class="text-center mb-4">
      <NuxtLink to="/" class="text-blue-500 hover:underline">Volver al Home</NuxtLink>
    </div>

    <h2 class="text-2xl text-center my-4">Agregar Nueva Receta</h2>
    <form @submit.prevent="agregarReceta" class="mb-4">
      <input v-model="receta_name" placeholder="Nombre de la receta" required class="border p-2 mb-2 w-full" />
      <input v-model="receta_descripcion" placeholder="Descripción" required class="border p-2 mb-2 w-full" />
      <textarea v-model="receta_instrucciones" placeholder="Instrucciones" required class="border p-2 mb-2 w-full"></textarea>
      <input v-model="tiempo_preparacion" type="number" placeholder="Tiempo de preparación (minutos)" required class="border p-2 mb-2 w-full" />
      <input v-model="categoriaId" type="number" placeholder="ID de categoría" required class="border p-2 mb-2 w-full" />
      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Agregar Receta</button>
    </form>

    <h2 class="text-2xl text-center my-4">Recetas Existentes</h2>
    <ul class="list-disc pl-5">
      <li v-for="receta in recetas" :key="receta.id" class="my-2">
        {{ receta.receta_name }} - {{ receta.receta_descripcion }}
        <button @click="editarReceta(receta)" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition">Editar</button>
        <button @click="eliminarReceta(receta.id)" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">Eliminar</button>
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
      recetaId: null, // Para almacenar el ID de la receta que se está editando
    };
  },
  async mounted() {
    await this.obtenerRecetas();
  },
  methods: {
    async obtenerRecetas() {
      try {
        const response = await fetch('http://localhost:3000/recetas');
        if (!response.ok) {
          throw new Error('Error al obtener recetas');
        }
        const data = await response.json();
        this.recetas = data; // Asegúrate de que 'data' contenga la lista de recetas
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
        this.limpiarFormulario();
        await this.obtenerRecetas();
      } catch (error) {
        console.error('Error al agregar receta:', error);
      }
    },
    async eliminarReceta(id) {
      try {
        const response = await fetch(`http://localhost:3000/recetas/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Error al eliminar receta');
        }

        alert('Receta eliminada exitosamente');
        await this.obtenerRecetas();
      } catch (error) {
        console.error('Error al eliminar receta:', error);
      }
    },
    async editarReceta(receta) {
      this.recetaId = receta.id;
      this.receta_name = receta.receta_name;
      this.receta_descripcion = receta.receta_descripcion;
      this.receta_instrucciones = receta.receta_instrucciones;
      this.tiempo_preparacion = receta.tiempo_preparacion;
      this.categoriaId = receta.categoriaId;
    },
    async actualizarReceta() {
      try {
        const recetaActualizada = {
          receta_name: this.receta_name,
          receta_descripcion: this.receta_descripcion,
          receta_instrucciones: this.receta_instrucciones,
          tiempo_preparacion: this.tiempo_preparacion,
          categoriaId: this.categoriaId,
        };

        const response = await fetch(`http://localhost:3000/recetas/${this.recetaId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recetaActualizada),
        });

        if (!response.ok) {
          throw new Error('Error al actualizar receta');
        }

        alert('Receta actualizada exitosamente');
        this.limpiarFormulario();
        await this.obtenerRecetas();
      } catch (error) {
        console.error('Error al actualizar receta:', error);
      }
    },
    limpiarFormulario() {
      this.receta_name = '';
      this.receta_descripcion = '';
      this.receta_instrucciones = '';
      this.tiempo_preparacion = '';
      this.categoriaId = '';
      this.recetaId = null;
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para tu componente */
</style>
