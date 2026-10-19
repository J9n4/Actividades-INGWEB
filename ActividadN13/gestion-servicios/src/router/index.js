import {createRouter, createWebHistory} from 'vue-router';
import ListaServicios from '../views/Listaservicios.vue';
import FormularioServicios from '../views/FormularioServicios.vue';

const rutas = [
    {path: '/', component: ListaServicios},
    {path: '/nuevo',component: FormularioServicio},
    { path: '/editar/:id', component: FormularioServicios }
];
export default createRouter({history: createWebHistory(), routes: rutas});
