<template>
  <div>
    <theheader></theheader>
    <div class="recipes" v-for="(recipes, i) in recipes" :key="i">
      <div v-if="rId == recipes.Id" class="recipe">
        <h3>{{recipes.title}}</h3><br>
        <div class="recipe-image">
          <img :src="recipes.image">
        </div>
        <ul>
          <li class="recipe-ing" v-for="ings in recipes.ings" :key="ings">{{ings}}</li>
        </ul>
        <div class="recipe-desc">{{recipes.desc}}</div>

      </div>
    </div>
    <thefooter></thefooter>
  </div>
</template>


<style scoped lang="scss">
  .recipe {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: calc(100% - 40px);
    border: 2px solid $brown;
    border-radius: 6px;
    padding: 8px;
    margin: 16px;
    justify-content: center;

    h3 {
      flex: 1 100%;
      margin: 16px 0;
      text-align: center;
    }

    .recipe-image {
      display: flex;
      align-items: flex-start;
      height: 40vh;
      flex: 2;

      img {
        max-height: 100%;
        min-width: 100%;
        object-fit: cover;
        vertical-align: bottom;

      }
    }

    ul {
      flex: 2;
    }

    .recipe-desc {
      padding: 8px;
      flex: 1 100%;
    }
  }

</style>

<script>
  import data from '../static/data.json'

  import Thefooter from '../layouts/Thefooter.vue'
  import Theheader from '../layouts/Theheader.vue'
  export default {
    name: 'recipedetails',
    components: {

      Theheader,
      Thefooter,
    },
    data() {
      return {
        rId: this.$route.params.Rid,
        recipes: data.recipes
      }
    }
  }

</script>
