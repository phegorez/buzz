<template>
  <main class="container flex flex-col gap-4 mx-auto w-min p-8 rounded-lg shadow-main shadow-info">
    <InputComponent @formInput='getData' :notFound="notFound" @random="respRandom" />
    <DisplayComponent :defaultDisplay="defaultDisplay" :data='data' :ingredients="ingredients" :isFetch="isFetch" />
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
      notFound: false,
      defaultDisplay: []
    }
  },
  created() {
    fetch(this.randomCocktail)
      .then((res) => res.json())
      .then((data) => {
        const defaultData = data.drinks[0]
        this.defaultDisplay = defaultData

        this.ingredients = []

        for (const key in defaultData) {
          if (key.startsWith('strIngredient')) {
            const value = defaultData[key]
            if (typeof value === 'string' && value !== null) {
              this.ingredients.push(value)
            }
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      }
      )
  },
  methods: {
    getData(input) {
      fetch(this.apiUrl + input)
        .then((res) => res.json())
        .then((data) => {
          this.data = data.drinks[0]

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
          this.notFound = true;
        })
    },

    respRandom() {
      fetch(this.randomCocktail)
        .then((res) => res.json())
        .then((randomData) => {
          const getRandomData = randomData.drinks[0]
          this.data = getRandomData

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