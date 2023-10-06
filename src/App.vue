<template>
  <main class="container flex flex-col gap-4 mx-auto w-min p-8 rounded-lg shadow-main shadow-info">
    <InputComponent @formInput='getData' @random="respRandom" />
    <DisplayComponent :demoData='demoData' :data='data' :ingredients="ingredients" :isFetch="isFetch" />
  </main>
</template>
<script>
import DisplayComponent from './components/DisplayComponent.vue'
import InputComponent from './components/InputComponent.vue'

export default {
  components: {
    InputComponent,
    DisplayComponent
  },
  data() {
    return {
      data: [],
      ingredients: [],
      apiUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      randomCocktail: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      isFetch: false,
      demoData: [
        {
          Drink: 'Margarita',
          Category: 'Ordinary Drink',
          Instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
          thumdnailUrl: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
          Ingredient: ['Tequila', 'Triple sec', 'Lime juice', 'Salt']
        }
      ],
    }
  },
  methods: {
    getData(input) {
      fetch(this.apiUrl + input)
        .then((res) => res.json())
        .then((data) => {
          this.data = data.drinks[0]
          console.log(this.data)

          this.ingredients = []

          for (const key in data.drinks[0]) {
            if (key.startsWith('strIngredient')) {
              const value = data.drinks[0][key]
              if (typeof value === 'string' && value !== null) {
                this.ingredients.push(value)
              }
            }
          }
          console.log('This is ingredients', this.ingredients);
          this.isFetch = true
        })
        .catch((error) => {
          console.error('Error fetching data', error)
        })
    },

    respRandom() {
      fetch(this.randomCocktail)
        .then((res) => res.json())
        .then((randomData) => {
          const getRandomData = randomData.drinks[0]
          this.data = getRandomData
          console.log(this.data)

          this.ingredients = []

          for (const key in getRandomData) {
            if (key.startsWith('strIngredient')) {
              const value = getRandomData[key]
              if (typeof value === 'string' && value !== null) {
                this.ingredients.push(value)
              }
            }
          }
          this.isFetch = true
        })
        .catch((error) => {
          console.error('Error fetching data', error)
        }
        )
    }
  }
}
</script>