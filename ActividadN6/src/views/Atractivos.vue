<template>
  <div class="page">
    <div class="page-header">
      <h1>Atractivos Turísticos</h1>
      <p>Descubre los lugares más destacados de Chillán y sus alrededores</p>
    </div>

    <div class="cards-container">
      <TarjetaLugar
        v-for="lugar in atractivos"
        :key="lugar.titulo"
        :titulo="lugar.titulo"
        :descripcion="lugar.descripcion"
        :icono="lugar.icono"
      />
    </div>
  </div>
</template>

<script setup>
import TarjetaLugar from '../components/TarjetaLugar.vue'

const atractivos = [
  {
    icono: '⛪',
    titulo: 'Catedral de Chillán',
    descripcion: 'Imponente catedral moderna construida tras el terremoto de 1939, con una cruz de 36 metros de altura que domina el centro de la ciudad.',
  },
  {
    icono: '♨️',
    titulo: 'Termas de Chillán',
    descripcion: 'Complejo termal y de ski ubicado en el corazón de la Cordillera de los Andes, famoso por sus aguas termales y pistas de esquí de clase mundial.',
  },
  {
    icono: '🏔️',
    titulo: 'Valle Las Trancas',
    descripcion: 'Hermoso valle andino ideal para el ecoturismo, senderismo y deportes de aventura, con impresionantes vistas al volcán Chillán.',
  },
  {
    icono: '🛒',
    titulo: 'Feria de Chillán',
    descripcion: 'Una de las ferias más grandes del sur de Chile, donde encontrarás artesanías, gastronomía local, longanizas y productos de la zona.',
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
