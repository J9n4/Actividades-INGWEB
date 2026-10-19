<script setup>
import { computed} from 'vue'

const props = defineProps({
    producto:{
        type: Object,
        required: true
    }
})

const emit = defineEmits(['ver-detalle'])

const precioCLP = computed(()=>
    new Intl.NumberFormat('es-CL',{
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
    }).format(props.producto.precio)
)
</script>

<template>
    <article class = 'card'>
        <img
        class = "card__img"
        :src = "producto.imagen"
        :alt = "producto.nombre"
        loading = "lazy"
        />

        <div class = "card__body">
            <span class = "card__cat">{{ producto.categoria }}</span>
            <h3 class = "card__title">{{ producto.nombre }}</h3>
            <p class = "card__price">{{ precioCLP }}</p>

            <button class="card__btn" @click="emit('ver-detalle', producto)">
                Ver detalle
            </button> 
        </div>
    </article>
</template>


<style scoped>
    .card{
        display: grid;
        grid-template-rows: 190px 1fr;
        overflow: hidden;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 5px 18px rgba(15,23,42,0.06);
        transition: trasform .2s ease, box-shadow .2s ease;
    }
    .card:hover{
        transform: translateY(-4px);
        box-shadow: 0 12px 28px rgba(15,23,42,0.12);
    }
    .card__img{width: 100%; height:100%; object-fit: cover;}
    .card__body{display: flex; flex-direction: column; padding: 16px;}
    .card__cat{
        align-self: flex-start;
        padding: 4px 9px;
        border-radius: 999px;
        background: #eff6ff;
        color: #1d4ed8;
        font-size: .78rem;
        font-weight: 700;
    }
    .card_btn:hover{background: #1e40af;}
</style>