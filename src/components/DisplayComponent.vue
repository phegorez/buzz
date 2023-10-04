<template lang="">
    <section class = "flex flex-col gap-4">
        <img :src="data.strDrinkThumb" alt="" class="rounded-md">
        <div class = "flex flex-col gap-1">
            <h1>Name : {{data.strDrink}}</h1>
            <p>Category : {{data.strCategory}}</p>
            <p>Instructions : {{data.strInstructions}}</p>
            <h1>Ingredients :</h1>
            <p v-for="(ingredient, index) in ingredients" :key="index">{{ingredient}}</p>
        </div>  
    </section>
</template>
<script>

export default {
    props: [
        'demoData', 'data', 'ingredients'
    ]
}
</script>