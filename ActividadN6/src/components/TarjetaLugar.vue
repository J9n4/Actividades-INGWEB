<script setup>
defineProps({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  icono: { type: String, default: '📍' },
})
</script>

<template>
  <div class="tarjeta">
    <div class="tarjeta-icono">{{ icono }}</div>
    <h3 class="tarjeta-titulo">{{ titulo }}</h3>
    <p class="tarjeta-descripcion">{{ descripcion }}</p>
  </div>
</template>

<style scoped>
.tarjeta {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
}

.tarjeta:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transform: translateY(-3px);
}

.tarjeta-icono {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.tarjeta-titulo {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a3a5c;
  margin: 0 0 0.5rem;
}

.tarjeta-descripcion {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}
</style>
