<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-4xl font-bold mb-5 italic">{{ drink.strDrink }}</h1>
        <img :src="drink.strDrinkThumb" :alt="strDrink" class="my-4 w-full max-w-full rounded-md">
        <div class="grid grid-cols=1 md:grid-cols-3 md:gap-8 p-4 text-lg py-2 bg-base-content text-info-content rounded-md">
            <div>
                <strong class="font-bold">Category : </strong>
                <span class="text-sm">{{ drink.strCategory }}</span>
            </div>
            <div>
                <strong class="font-bold">Glass : </strong>
                <span class="text-sm">{{ drink.strGlass }}</span>
            </div>
            <div class="break-words">
                <strong class="font-bold">Tag : </strong>
                <span class="text-sm" v-if="drink.strTags">{{ drink.strTags }}</span>
                <span class="text-sm" v-else>-</span>
            </div>
        </div>

        <div class="my-4 bg-primary-content rounded-md text-white p-4">
            {{ drink.strInstructions }}
        </div>

        <div class="overflow-x-auto bg-base-300 text-neutral-focus rounded-md">
            <table class="table flex">
                <!-- head -->
                <thead class="text-neutral-content font-bold">
                    <tr>
                        <th>#</th>
                        <th>Ingredients</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody class="text-sm text-neutral-content">
                    <template v-for="(elm, index) in 20">
                        <tr v-if="drink[`strIngredient${index + 1}`]">
                            <td>{{ index + 1 }}</td>
                            <td
                                class="hover:text-success transition duration-300 ease-in-out">
                                <router-link
                                    :to="{ name: 'byIngredients', params: { ingredients: drink[`strIngredient${index + 1}`] } }">{{
                                        drink[`strIngredient${index + 1}`] }}
                                </router-link>
                            </td>
                            <td>{{ drink[`strMeasure${index + 1}`] }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient';

const route = useRoute()
const drink = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            drink.value = data.drinks[0] || {}
        })
})
</script>
