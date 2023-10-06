<template lang="">
    <section class = "flex flex-col gap-4" v-if="isFetch">
        <img :src="data.strDrinkThumb" alt="" class="rounded-md">
        <div class = "flex flex-col gap-1">
            <h1>Name : {{data.strDrink}}</h1>
            <p>Category : {{data.strCategory}}</p>
            <p>Instructions : {{data.strInstructions}}</p>
            <h1>Ingredients :</h1>
            <p v-for="(ingredient, index) in ingredients" :key="index">{{index + 1}}. {{ingredient}}</p>
        </div>  
    </section>
    <section class = "flex flex-col gap-4" v-else='isFetch'>
        <img :src="demoData[0].thumdnailUrl" alt="" class="rounded-md">
        <div class = "flex flex-col gap-1">
            <h1>Name : {{demoData[0].Drink}}</h1>
            <p>Category : {{demoData[0].Category}}</p>
            <p>Instructions : {{demoData[0].Instructions}}</p>
            <h1>Ingredients :</h1>
            <p v-for="(ingredient, index) in demoData[0].Ingredient" :key="index">{{index + 1}}. {{ingredient}}</p>
        </div>  
    </section>
</template>
<script>

export default {
    props: [
        'demoData', 'data', 'ingredients', 'isFetch'
    ]
}
</script>