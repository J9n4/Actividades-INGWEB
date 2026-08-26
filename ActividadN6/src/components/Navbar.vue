<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <span class="brand-icon">🏔️</span>
      <span class="brand-text">Chillán Digital</span>
    </div>
    <ul class="navbar-links">
      <li><router-link to="/" active-class="active" exact>Inicio</router-link></li>
      <li><router-link to="/atractivos" active-class="active">Atractivos</router-link></li>
      <li><router-link to="/gastronomia" active-class="active">Gastronomía</router-link></li>
      <li><router-link to="/contacto" active-class="active">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
  background-color: #1a3a5c;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
}

.brand-icon {
  font-size: 1.4rem;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: #cbd5e0;
  text-decoration: none;
  padding: 0.4rem 0.9rem;
  border-radius: 4px;
  font-size: 0.95rem;
  transition: background 0.2s, color 0.2s;
}

.navbar-links a:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.navbar-links a.active {
  background: #2a6fc7;
  color: #fff;
}
</style>
