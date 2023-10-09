<template lang="">
    <section class = "flex flex-col gap-4" v-if="isFetch">
        <img :src="data.strDrinkThumb" alt="interactiveImg" class="rounded-md" loading='lazy'>
        <div class = "flex flex-col gap-1">
            <!-- <h1>Name : {{data.strDrink}}</h1> -->
            <div class= "flex gap-2">
                <h1>Name : </h1>
                <p>{{data.strDrink}}</p>
            </div>
            <p>Category : {{data.strCategory}}</p>
            <p>Instructions : {{data.strInstructions}}</p>
            <h1>Ingredients :</h1>
            <p v-for="(ingredient, index) in ingredients" :key="index" class='cursor-pointer'>{{index + 1}}. {{ingredient}}</p>
        </div>  
    </section>
    <section class = "flex flex-col gap-4" v-else='isFetch'>
        <img :src="defaultDisplay.strDrinkThumb" alt="randomImage" class="rounded-md" loading='lazy'>
        <div class = "flex flex-col gap-1">
            <h1>Name : {{defaultDisplay.strDrink}}</h1>
            <p>Category : {{defaultDisplay.strCategory}}</p>
            <p>Instructions : {{defaultDisplay.strInstructions}}</p>
            <h1>Ingredients :</h1>
            <p v-for="(ingredient, index) in ingredients" :key="index" class='cursor-pointer'>{{index + 1}}. {{ingredient}}</p>
        </div>  
    </section>
</template>
<script>

export default {
    props: [
        'defaultDisplay', 'data', 'ingredients', 'isFetch'
    ]
}
</script>