<template>
  <main class="container">
    <section class="section">
      <div class="input-area">
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="input"/>
        <button type="button" class="btn btn-outline btn-success" @click="getData">search</button>
      </div>
      <article class="card card-compact w-96 bg-base-100 shadow-xl">
          <h1> {{ data.strDrink }}</h1>
          <img :src="data.strDrinkThumb">
          <p> {{ data.strCategory }} </p>
          <p> {{data.strAlcoholic}} </p>
          <h1>Ingredient</h1>
          <ul>
            <li>
              <p>
                {{data.strIngredient1}}
              </p>
            </li>
            <li>
              <p>
                {{data.strIngredient2}}
              </p>
            </li>
            <li>
              <p>
                {{data.strIngredient3}}
              </p>
            </li>
            <li>
              <p>
                {{data.strIngredient4}}
              </p>
            </li>
          </ul>
        </article>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      input: '',
      apiUrl : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    }
  },
  methods: {
    getData() {
      fetch(this.apiUrl + this.input)
        .then((res) => res.json())
        .then((data) => {
          this.data = data.drinks[0]
        })
    }
  }
}
</script>
<style scoped="">
  .section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .input-area {
    display: flex;
    align-items: center;
    gap: 80px;
    margin-bottom: 20px;
  }
</style>