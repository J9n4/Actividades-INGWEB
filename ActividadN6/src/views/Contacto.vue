<template>
  <div class="page">
    <div class="page-header">
      <h1>Contacto</h1>
      <p>¿Tienes preguntas? Escríbenos y te responderemos pronto</p>
    </div>

    <div class="form-container">
      <form @submit.prevent="enviarFormulario" class="contact-form">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input id="nombre" v-model="form.nombre" type="text" placeholder="Tu nombre" required />
        </div>

        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input id="email" v-model="form.email" type="email" placeholder="tu@correo.com" required />
        </div>

        <div class="form-group">
          <label for="asunto">Asunto</label>
          <input id="asunto" v-model="form.asunto" type="text" placeholder="¿En qué te podemos ayudar?" required />
        </div>

        <div class="form-group">
          <label for="mensaje">Mensaje</label>
          <textarea id="mensaje" v-model="form.mensaje" rows="4" placeholder="Escribe tu mensaje aquí..." required></textarea>
        </div>

        <button type="submit" class="btn-submit">Enviar mensaje</button>
      </form>

      <p v-if="enviado" class="success-msg">✅ ¡Mensaje enviado correctamente! Te responderemos pronto.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ nombre: '', email: '', asunto: '', mensaje: '' })
const enviado = ref(false)

function enviarFormulario() {
  console.log('Formulario enviado:', form.value)
  enviado.value = true
  form.value = { nombre: '', email: '', asunto: '', mensaje: '' }
  setTimeout(() => { enviado.value = false }, 4000)
}
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

.form-container {
  max-width: 560px;
  margin: 2.5rem auto;
  padding: 0 1.5rem;
}

.contact-form {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a3a5c;
  margin-bottom: 0.4rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  font-size: 0.95rem;
  color: #333;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #2a6fc7;
}

.form-group textarea {
  resize: vertical;
}

.btn-submit {
  width: 100%;
  background: #2a6fc7;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-submit:hover {
  background: #1a5aaa;
}

.success-msg {
  margin-top: 1rem;
  text-align: center;
  color: #2d7a3a;
  font-weight: 500;
}
</style>
