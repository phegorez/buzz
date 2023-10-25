<template>
    <div class="flex flex-col p-8 items-center justify-center">
        <div class="flex flex-wrap gap-3 mt-1 justify-center max-w-prose">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="(letter, index) in letters" :key="index"
            class="border border-neutral rounded-md w-7 h-7 text-center transition duration-150 ease-in-out hover:scale-150 hover:bg-neutral-focus"
            >
                {{letter}}
            </router-link>
        </div>
        <Drinks :drinks="drinks" v-if="drinks.length"/>
        <h1 v-else-if="route.params.letter" class="mt-10">Not foud any drinks on {{ route.params.letter }}</h1>
        <h1 v-else class="mt-10">Click some letters</h1>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import store from '../store'
import Drinks from '../components/Drinks.vue'
import { onMounted, computed, watch } from 'vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const route = useRoute()
const drinks = computed(() => store.state.cockTailsByLetter)

watch(route, () => {
    if(route.params.letter) {
        store.dispatch('searchedCockTailsByLetter', route.params.letter)
    }
})

onMounted(() => {
    if(route.params.letter) {
        store.dispatch('searchedCockTailsByLetter', route.params.letter)
    }
})

</script>
