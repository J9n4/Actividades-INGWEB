<template>
  <div class="page">
    <div class="page-header">
      <h1>Gastronomía de Chillán</h1>
      <p>Sabores auténticos que representan el alma de Ñuble</p>
    </div>

    <div class="cards-container">
      <TarjetaLugar
        v-for="plato in gastronomia"
        :key="plato.titulo"
        :titulo="plato.titulo"
        :descripcion="plato.descripcion"
        :icono="plato.icono"
      />
    </div>
  </div>
</template>

<script setup>
import TarjetaLugar from '../components/TarjetaLugar.vue'

const gastronomia = [
  {
    icono: '🌭',
    titulo: 'Longanizas de Chillán',
    descripcion: 'El producto emblema de la ciudad. Elaboradas artesanalmente con cerdo y especias, ahumadas con madera de roble, son reconocidas como las mejores del país.',
  },
  {
    icono: '🍞',
    titulo: 'Pan Amasado',
    descripcion: 'Tradición panadera de la zona que se vende en la feria y en panaderías locales. Esponjoso, dorado y perfecto para acompañar con mantequilla o mermelada casera.',
  },
  {
    icono: '🍷',
    titulo: 'Vinos del Itata',
    descripcion: 'El Valle del Itata produce vinos únicos con cepas antiguas de País y Moscatel. Reconocidos internacionalmente por su carácter rústico y auténtico.',
  },
]
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1a3a5c 0%, #2a6fc7 100%);
  color: #fff;
  text-align: center;
  padding: 3rem 2rem;
}

.page-header h1 {
  font-size: 2rem;
  margin: 0 0 0.5rem;
}

.page-header p {
  opacity: 0.85;
  margin: 0;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 0 1.5rem;
}
</style>
