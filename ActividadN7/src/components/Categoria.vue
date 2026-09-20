<script setup> 
const productos = [
    { Nombre_del_Servicio: 'wola', categoria: 'servicio', Descripcion_Breve: 'test', Valor: 100, Disponibilidad: 'Disponible' }
]

const mostrardisponibles = ref(true)
const productos_seleccionado = ref('')

</script>

<template>
    <section class = 'catalogo'>
        <div class = 'header'>
            <div class = 'titulo'>
                <h2>Catálogo y Categorias</h2>
            </div>
            <label class = 'filtro'>
                <input v-model="mostrardisponibles" type="checkbox" />
                Solo productos disponibles
            </label>
        </div>

        

    </section>
</template>