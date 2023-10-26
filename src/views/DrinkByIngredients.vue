<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h2 class="text-2xl italic">Sort by {{ route.params.ingredients }}</h2>
        <Drinks :drinks="drinks"/>
    </div>
</template>
<script setup>
import store from '../store'
import Drinks from '../components/Drinks.vue'
import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue'


const drinks = computed(() => store.state.cockTailsByIngredient)
const route = useRoute()

watch(() => {
    store.dispatch('searchedCockTailsByIngredient', route.params.ingredients)
})

onMounted(() => {
    store.dispatch('searchedCockTailsByIngredient', route.params.ingredients)
})

</script>
