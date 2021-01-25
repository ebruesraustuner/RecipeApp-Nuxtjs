<template>
<div>
        <theheader></theheader>
    <div class="categories">
        <div class="categories-headers">
            <h3>What Should I Cook</h3>
            <p>Dishes you can make with the ingredients in your kitchen</p>
        </div>
        
        <div class="categories-search">
            
            <div class="categories-search-foradd">
                <h4>Ingridients</h4>
                <p>Add Ingridient(s)</p>
                <input type="text" class="input" v-model="newIng" @keyup.enter="addIng" placeholder="New Ing">
                <span class="input-group-button">
                    <button @click="addIng" class="vbutton vbutton-default">
                        <i class="fa fa-plus"></i> Add
                    </button>
                </span>

            </div>
            
            <div class="categories-search-list">
               <p>Some Simple Ingridients</p><br>
                <div v-for="(ing, i) in ings" :key="i">
                    <input type="checkbox" :value="ing.ings" v-model="selectedings" :id="'ing-' + ing.ings"
                        class="hidden">
                    <label :for="'ing-' + ing.ings">{{ ing.ings }}</label>
                </div>
            </div>
        </div>
        <div class="categories-added" v-show="selectedings.length != 0">
            <p>Added Ingridients </p><label v-for="ing in selectedings" :key="ing" class="added">{{ ing }}</label>
        </div>
        <div class="recipes">
            <ul class="recipes-cards">
                <li v-for="recipe in activerecipes" :key="recipe" class="recipe">
                    <div class="recipe-image"><img :src="recipe.image"></div>
                    <div class="recipe-title">
                        <h3 @click="goTodetail(recipe.Id)">{{recipe.title}}</h3>
                    </div>
                </li>
            </ul>
        </div>

    </div>
     <thefooter></thefooter>
  </div>
</template>
<style scoped lang="scss">
    * {
        transition: all .3s ease-out;
    }

    .vbutton {
        margin-right: 4px;
    }

    input {
        padding: .75em;
        border-radius: 6px;
        margin: 4px 0;
    }

    h3 {
        margin: 16px 0;
    }

    .categories {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 0 24px;
        margin-bottom: 24px;

        .categories-search {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: row;
            @include breakpoint(mobile) {
                flex-direction: column;
            }
            h4, p {
                width: 100%;
            }
            
            .categories-search-foradd {
                padding: 4px 0;
                margin: 4px 0;
                flex: 1;
            }

            .categories-search-list {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                flex: 1;
                p {
                    width: 100%;
                }
            }
        }

        .categories-added {
            margin: 8px 0;
            padding: 8px 0;
            flex: 2;

            .added {
                background-color: $sand;
                color: $brown;
                border: 1px solid $sand;
                margin-right: 8px;
            }
        }

        .recipes {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: row;

            @include breakpoint(mobile) {
                flex-direction: column;
            }

            .recipes-cards {
                flex: 1;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                ;
                grid-template-rows:  auto;
                /*grid-template-columns: repeat(auto-fill, minmax(200px 1fr));*/
                grid-gap: 16px;
                padding: 16px 0;


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
    }

    .hidden {
        opacity: 0;
        padding: 0;
        margin: 0;
    }

    input {
        margin: 8px;
    }

    label {
        padding: 8px;
        border: 1px solid $brown;
        border-radius: 4px;
        background-color: $brown;
        color: $sand;
    }

    input:checked+label {
        background-color: $sand;
        border: 1px solid $sand;

        color: #fff;
    }

    input:checked:hover+label {
        background-color: $pink;
        border: 1px solid $pink;
        color: #fff;
    }
</style>
<script>
    import data from '../static/data.json'
        
import Thefooter from '../layouts/Thefooter.vue'
import Theheader from '../layouts/Theheader.vue'

    export default {
        components: {

        Theheader,
        Thefooter,
    },
        data() {
            return {
                ings: data.ings,
                recipes: data.recipes,
                selectedings: [],
                list: '',
            }
        },
        methods: {
            goTodetail(rId) {
                this.$router.push({
                    name: 'recipedetails',
                    params: {
                        Rid: rId
                    }
                })
            },
            addIng() {
                if (this.newIng) {
                    this.ings.push({
                        ings: this.newIng,
                    });
                    this.newIng = '';
                }
            }
        },
        computed: {
            activerecipes: function () {
                if (this.selectedings.length == 0) return this.recipes;

                var activerecipes = [];
                var filters = this.selectedings;

                this.recipes.forEach(function (recipe) {

                    function recipeContainsFilter(filter) {
                        return recipe.ings.indexOf(filter) != -1;
                    }

                    if (filters.every(recipeContainsFilter)) {
                        activerecipes.push(recipe);
                    }
                });

                return activerecipes;
            }
        },
    }
</script>