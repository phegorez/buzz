<template>
  <main class="container flex flex-col gap-4 mx-auto w-min p-8 rounded-lg shadow-main shadow-info">
    <InputComponent @formInput='getData' />
    <DisplayComponent :demoData='demoData' :data='data' :ingredients="ingredients" />
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
      ingredients : [],
      input: '',
      apiUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
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
            if(key.startsWith('strIngredient')) {
              const value = data.drinks[0][key]
              if(typeof value === 'string' && value !== null) {
                this.ingredients.push(value)
              }
            }
          }
          console.log('This is ingredients', this.ingredients);
        })
    }
  }
}
</script>