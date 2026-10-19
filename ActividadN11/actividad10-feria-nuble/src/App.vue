<script setup>
import {ref, computed} from 'vue'
import {productos as BaseProductos, productos} from './data/productos'
import ProductoCard from './components/ProductCard.vue'
import ProductModal from './components/ProductModal.vue'
import ProductCard from './components/ProductCard.vue'

const filtro = ref("")
const categoria = ref("Todas")
const mostrarCatalogo = ref(true)
const seleccionado = ref(null)
const modalVisible = ref(false)

const categorias = computed(() => [
  'Todas',
  ...new Set(BaseProductos.map(producto => producto.categoria))
])

const listaFiltrada = computed(() => { 
  const texto = filtro.value.trim().toLowerCase()

  return BaseProductos.filter(producto =>{
    const coincideTexto =
    !texto ||
    producto.nombre.toLowerCase().includes(texto) ||
    producto.categoria.toLowerCase().includes(texto)

    const coincideCategoria =
      categoria.value === 'Todas' || producto.categoria === categoria.value
      return coincideTexto && coincideCategoria
  })
})
function verDetalle(producto) {
  seleccionado.value = producto
  modalVisible.value = true
}
function cerrarModal() {
  modalVisible.value = false
  seleccionado.value = null
}
</script>

<template>
  <main class = "page">
    <section class = "hero">
      <div>
        <p class="eyebrow">Actividad N° 10 · Vue.js</p>
        <h1>Feria Artesanal de Ñuble</h1>
        <p class="hero__text">
          Explora productos elaborados por emprendedores locales y practica
          v-model, v-if, v-else, v-show y v-for en una interfaz completa.
        </p>
      </div>
    </section>
    <section class="toolbar" aria-label="Filtros del Catalogo">
      <div class="field field--grow">
        <label for = "buscar">Buscar Producto</label>
        <input
        id="buscar"
        v-model = "filtro"
        type="search"
        placeholder="Ej.Queso"
        />
      </div>
      <div class="field">
        <label for="categoria">Categoría</label>
        <select id="categoria" v-model="categoria">
          <option v-for="item in categorias" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      
    </section>
  </main>
</template>
