<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h1 class="mb-4">Find some drinks?</h1>
        <Autocomplete :source="drinksArray" @selected="handleSelected" @searchCockTails="searchCockTails"/>
        <Drinks :drinks="drinks" />
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router';
import Drinks from '../components/Drinks.vue'
import Autocomplete from '../components/Autocomplete.vue';
import drinksArray from '../drinksArray'

const route = useRoute()
const keyword = ref('')
const drinks = computed(() => store.state.searchedCockTails)

function searchCockTails() {
    if (keyword.value) {
        store.dispatch('searchedCockTails', keyword.value)
    } else {
        store.commit('setSearchedCockTails', [])
    }
}

function handleSelected(item) {
    keyword.value = item
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchCockTails()
    }
})
</script>
