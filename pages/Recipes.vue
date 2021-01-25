<template>
<div>
        <theheader></theheader>
        <client-only>
    <div class="recipes">

        <div class="recipes_categories">
            <div class="categories-title">
                <h3> Categories </h3>
            </div>

            <ul class="categories-list">
                <li v-for="category in categories" :key="category.cats" class="category"
                    v-on:click="filter(category.cats)">
                    {{ category.catsname }}
                </li>
            </ul>

        </div>
        <transition-group name="recipes-cards" class="recipes-cards" tag="section">
            <div class="recipe" v-for="recipe in filteredRecipes" :key="recipe.Id">
                <div class="recipe-image"><img :src="recipe.image"></div>
                <div class="recipe-title">
             <!--       <NuxtLink
          :to="{ name: 'Recipedetails/:id?', params: {  id: recipe.Id } }"
        >
          {{ recipe.title }}
        </NuxtLink>-->
                    <h3 @click="goTodetail(recipe.Id)">{{recipe.title}}</h3> 
                </div>
            </div>
        </transition-group>

    </div>
        </client-only>
     <thefooter></thefooter>
  </div>
</template>

<style scoped lang="scss">
    .trial {
        width: 100%;
        height:100%;
    }
    .recipes {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        margin: 0 24px;
        margin-bottom: 24px;

        @include breakpoint(mobile) {
            flex-direction: column;
        }

        .recipes_categories {


            .categories-title {
                background-color: $sand;
                padding: 16px 24px;

                h3 {
                    &::after {
                        display: block;
                        content: '';
                        width: 100%;
                        border: 1px solid $brown;
                        margin-top: 16px;
                    }
                }
            }

            .categories-list {
                padding: 16px 24px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                margin: 0;

                .category {
                    list-style: none;
                    padding: 16px 0;
                    cursor: pointer;
                    transition: all 0.35s;
                    border-bottom: 2px solid $brown;

                    /*  &::after {
                        display: block;
                        content: '';
                        width: 100%;
                        border: 1px solid $brown;
                        margin-top: 8px;
                    } */

                    &.active {
                        box-shadow: 0px 1px 3px 0px #00000026;
                    }

                    &:hover {
                        background: rgba($beige, .8);
                    }

                    span {
                        width: 100%;
                    }
                }
            }
        }

        .recipes-cards {
            padding-left: 16px;
            flex: 1;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 160px;
            /*grid-template-columns: repeat(auto-fill, minmax(200px 1fr));*/
            grid-gap: 16px;

            @include breakpoint(tablet) {
                grid-template-columns: repeat(3, 1fr);
            }

            @include breakpoint(mobile) {
                grid-template-columns: repeat(1, 1fr);
            }

            .recipe {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                position: relative;
                .recipe-image {
                    max-height: 100%;
                }

                .recipe-title {

                    position: absolute;
                    bottom: 0px;
                    background-color: rgba($pink, .8);

                    width: 100%;
                    text-align: center;
                    height: 40px;
                    display: flex;
                    justify-content: center;

                    h3 {
                        font-family: Montsreat;
                        font-size: 18px;
                        font-weight: 500;
                        color: white;
                        align-self: center;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 168px;
                        text-align: center;
                        margin: 0;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                }

                img {
                    max-width: 100%;
                    width: 100%;
                    height: 100%;
                    -o-object-fit: fill;
                    object-fit: cover;
                }
            }

        }
    }

    .recipes-cards-enter {
        transform: translateY(16px);
        opacity: 0;
        transition: all .8s ease-in;
    }

    .recipes-cards-leave-to {
        transform: translateY(16px);
        opacity: 0;
        transition: all .8s ease-out;
    }

    .recipes-cards-enter-active {
        transition: all .8s ease-in;
    }

    .recipes-cards-leave-active {
        transition: all .8s ease-out;
    }
</style>

<script>
    import data from '../static/data.json'

import Thefooter from '../layouts/Thefooter.vue'
import Theheader from '../layouts/Theheader.vue'
    export default {
        name: 'recipe',
        components: {

        Theheader,
        Thefooter,
    },
        data() {
            return {
                recipes: data.recipes,
                currentCat: 'all',
                categories: data.categories
            }
        },
        
        computed: {
            filteredRecipes: function () {
                var filter = this.currentCat;
                return this.recipes.filter(function (recipe) {
                    return recipe.cats.indexOf(filter) !== -1;
                });
            }
        },
        methods: {
            goTodetail(rId) {
                this.$router.push({
                   path: '/recipedetails/:Rid',
                    name: 'recipedetails',
                    params: {
                        Rid: rId
                    }
                })
            },
            
            filter: function (cat) {
                this.currentCat = cat;
            }
        },
    }
</script>