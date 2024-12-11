<template>
    <header class="bg-black text-white">
        <div class="container mx-auto flex justify-between items-center p-5 border-b-4 border-red-600">
            <h1 class="text-4x1 font-bold">Gestor de recetas</h1>
            <h3 class="text-2x1">Welcome {{ fullname }}!!</h3>
            <nav>
                <ul class="flex space-x-4">
                    <li>
                        <NuxtLink to="/categorias" class="text-yellow-500 hover:text-yellow-400">
                            Categorias
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/recetas" class="text-yellow-500 hover:text-yellow-400">
                            Recetas
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/ingredientes" class="text-yellow-500 hover:text-yellow-400">
                            Ingredientes
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="mt-2 text center">
            <p>
                Explora las variadas e interesantes recetas de cocina existentes
            </p>
        </div>
    </header>
</template>
<script>
export default{
    props: {
        fullName: {
            type: String,
            rquerired: true,
        }
    }
}
</script>
