import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import DrinkByName from '../views/DrinkByName.vue'
import DrinkByLetter from '../views/DrinkByLetter.vue'
import DrinkByIngredients from '../views/DrinkByIngredients.vue'
import Ingredients from '../views/Ingredients.vue'
import DrinkDetails from '../views/DrinkDetails.vue'
import GuestLayout from '../components/GuestLayout.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: 'by-name/:name?',
                name: 'byName',
                component: DrinkByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: DrinkByLetter
            },
            {
                path: '/by-ingredients/:ingredients',
                name: 'byIngredients',
                component: DrinkByIngredients
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                comments: Ingredients
            },
            {
                path: '/drink/:id',
                name: 'drinkDetails',
                component: DrinkDetails
            }
        ]
    },

    {
        path:'/guest',
        component: GuestLayout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router