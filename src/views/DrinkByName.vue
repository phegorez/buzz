<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <input type="text" v-model="keyword" placeholder="Search for Drinks" class="input input-bordered w-full max-w-prose" 
            @change="searchCockTails"
        />

        <Drinks :drinks="drinks" />
    </div>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue'
import store from '../store'
import { useRoute } from 'vue-router';
import Drinks from '../components/Drinks.vue'

const route = useRoute()
const keyword = ref('')
const drinks = computed(() => store.state.searchedCockTails)

function searchCockTails() {
    if(keyword.value) {
        store.dispatch('searchedCockTails', keyword.value)
    } else {
        store.commit('setSearchedCockTails', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
        searchCockTails()
    }
})
</script>
