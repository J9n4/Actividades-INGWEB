<template>
  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <h1>Bienvenido a Chillán</h1>
      <p>Ciudad cuna de Bernardo O'Higgins y corazón de la Región de Ñuble</p>
    </section>

    <!-- Historia -->
    <section class="section">
      <h2>Historia de Chillán</h2>
      <p>
        Chillán es una ciudad fundada en 1580 por Martín Ruiz de Gamboa en pleno período colonial.
        Destruida y reconstruida varias veces por terremotos, su espíritu resiliente la ha convertido
        en un símbolo de la región de Ñuble. Es la cuna del prócer de la independencia
        <strong>Bernardo O'Higgins</strong>, nacido aquí en 1778.
      </p>
      <p>
        Con una rica tradición artesanal, gastronómica y termal, Chillán atrae a miles de visitantes
        que buscan disfrutar de su cultura, sus paisajes andinos y la calidez de su gente.
      </p>
    </section>

    <!-- Highlights -->
    <section class="section">
      <h2>¿Por qué visitar Chillán?</h2>
      <div class="highlights-grid">
        <div class="highlight" v-for="item in highlights" :key="item.titulo">
          <span class="highlight-icon">{{ item.icono }}</span>
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.texto }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const highlights = [
  { icono: '🏔️', titulo: 'Naturaleza', texto: 'Volcanes, termas y paisajes únicos del sur de Chile.' },
  { icono: '🍷', titulo: 'Gastronomía', texto: 'Longanizas, pan amasado y vinos del Itata reconocidos a nivel nacional.' },
  { icono: '🎨', titulo: 'Cultura', texto: 'Murales de la Escuela México y una vibrante oferta artística.' },
  { icono: '⛷️', titulo: 'Aventura', texto: 'Ski y deportes de invierno en el Valle Las Trancas.' },
]
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1a3a5c 0%, #2a6fc7 100%);
  color: #fff;
  text-align: center;
  padding: 4rem 2rem;
}

.hero h1 {
  font-size: 2.2rem;
  margin: 0 0 0.75rem;
}

.hero p {
  font-size: 1.05rem;
  opacity: 0.85;
  margin: 0;
}

.section {
  max-width: 860px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

.section h2 {
  color: #1a3a5c;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #2a6fc7;
  padding-left: 0.75rem;
}

.section p {
  color: #444;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.highlight {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
}

.highlight-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.highlight h3 {
  color: #1a3a5c;
  font-size: 1rem;
  margin: 0 0 0.4rem;
}

.highlight p {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}
</style>
