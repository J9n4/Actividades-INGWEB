<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <footer class="footer">
    <p>© 2025 Municipalidad de Chillán — Turismo Digital</p>
  </footer>
</template>

<style scoped>
main {
  min-height: calc(100vh - 60px - 48px);
}

.footer {
  background: #1a3a5c;
  color: #a0aec0;
  text-align: center;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
}
</style>
