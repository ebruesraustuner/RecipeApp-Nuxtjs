<template>
  <div>
    <theheader></theheader>
    <div class="homepage">
      <client-only>
      <section class="home">
        <div class="headers">
          <h1>{{ myHeader }}</h1>
          <h2>{{ mySubHeader }}</h2>
          <p>{{ myDesc }}</p>
          <NuxtLink to="/recipes" tag="button" class="vbutton vbutton-default vbutton-start">Recipes</NuxtLink>
        </div>
        <div class="image">
          <div class="chef-hat"></div>
        </div>
      </section>
      <section class="weekly-recipes">
        <h3> Weekly Best Recipes </h3>
        <div class="recipe">
          <div class="recipe-image-static">
            <!-- 
            <div class="recipe-image-static-image" v-if="selectedImage">
              <img :src="selectedImage.image" alt="image desc">
            </div>
            <div class="recipe-desc">
              <h4>{{selectedImage.title}}a</h4>
              <p>{{selectedImage.desc}}</p>
              <button class="vbutton vbutton-opacity" @click="goTodetail(selectedImage.Id)">Go Recipe </button>
            </div>
            -->
            <div class="recipe-image-static">
              <div class="recipe-image-static-image">
                <img :src="randomRecipe.image" alt="image desc" />
              </div>
              <div class="recipe-desc">
                <h4>{{randomRecipe.title}}</h4>
                <p>{{randomRecipe.desc}}</p>
                <button class="vbutton vbutton-opacity" @click="goTodetail(randomRecipe.Id)">Go Recipe </button>
              </div>
            </div>
          </div>
          
            <div class="recipe-image-dynamic">
              <div class="recipe-image-dynamic-lines">
                <img src="../assets/line-1.png" width="80%" data-aos="fade-up" data-aos-duration="1600">
                <img src="../assets/line-2.png" width="80%" data-aos="fade-up" data-aos-duration="1600">
                <img src="../assets/line-3.png" width="80%" data-aos="fade-up" data-aos-duration="1600">
              </div>
              <div class="recipe-image-dynamic-girl">
                <img src="../assets/girl.png" width="80%" data-aos="fade-up" data-aos-duration="2000">
              </div>
            </div>
         
        </div>
      </section>
      
        <section class="break">
          <img src="../assets/break-image.svg" width="30%" data-aos="zoom-in" data-aos-duration="1200">
        </section>
      
      <section class="recommend">
        <h3>We recommend</h3>
        <!--      <div v-for="(recommend, i) in recommends" :key="i">
        <img :src="'../assets/example-image-1.jpg'">
      </div> -->
        <vueper-slides class="no-shadow" :arrows="false" :visible-slides="4" slide-multiple :gap="3"
          :slide-ratio="1 / 3" :dragging-distance="120"
          :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2, bulletsOutside:true, fixedHeight:true} }">
          <vueper-slide v-for="(recipe, i) in recipes" :key="i" :image="recipe.image">
            <template v-slot:content>
              <div class="vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom text-center">
                <span class="title" @click="goTodetail(recipe.Id)">{{ recipe.title }}</span>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </section>
      <section class="what-to-cook">
        
          <div class="what-to-cook-image">
            <img src="../assets/cook-searching.svg" width="100%" data-aos="fade-up-right" data-aos-duration="2600">
          </div>
        
        <div class="what-to-cook-desc">
          <h3> What To Cook </h3>
          <h5>If you think what to cook with the
            ingredients in your kitchen, you
            are at the right place</h5>
          <NuxtLink to="/recipes" tag="button" class="vbutton vbutton-opacity">Recipes</NuxtLink>
        </div>
      </section>
      <section class="tricks">
        <div class="tricks-header">
          Tricks For
          Beginner Chef's
        </div>
        
          <div class="tricks-desc" data-aos="fade-up">
            <p>Layers of sausage gravy, cheese and noodles work
              so magically together,
              you'll wonder why you never ate lasagna for
              breakfast before.</p>

            <NuxtLink to="/tricks" tag="button" class="vbutton vbutton-default">Tricks
            </NuxtLink>
          </div>
        
      </section>
      <section class="blogs">
        <vueper-slides class="no-shadow" :arrows="false" :visible-slides="3" slide-multiple :gap="2"
          :slide-ratio="1 / 3" :dragging-distance="120"
          :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2,  bulletsOutside:true, fixedHeight:true} }">
          <vueper-slide v-for="(recipe, i) in recipes" :key="i" :image="recipe.image">
            <template v-slot:content>
              <div class="vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom text-center">
                <span class="title">{{ recipe.title }}</span>
                <span class="content">{{ recipe.shortdesc }}</span>
                <span>
                  <button class="vbutton vbutton-default" @click="goTodetail(recipe.Id)">Read More </button>
                </span>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>

      </section>
      <section class="about">
        <div class="about-desc">
          <h3>Who Are We </h3>
          <h4>We Are You</h4>
          <p>Donec faucibus commodo odio,
            vel iaculis ex tristique id. Ut
            ultrices diam quis sapien
            hendrerit, quis eleifend ipsum
            pulvinar.</p>
        </div>
        
          <div class="about-image">
            <!--  data-aos="fade-up-left" -->
            <img src="../assets/whoarewe.svg" data-aos="fade-up-left">
          </div>
      
      </section>
      </client-only>
    </div>
    <Nuxt />
    <thefooter></thefooter>
  </div>
</template>
<style scoped lang="scss">
  .homepage {
    margin: 0 40px 40px;

    @include breakpoint(tablet) {
      margin: 0 24px 24px 24px;
    }

    .home {
      background-color: $sand;
      width: auto;
      padding: 40px;
      display: flex;
      justify-content: space-evenly;
      height: 100%;
      flex-wrap: wrap;

      @include breakpoint(tablet) {
        padding: 24px;
      }

      .headers {
        flex: 1;
        padding: 24px;
        display: flex;
        justify-content: space-around;
        align-content: center;
        flex-wrap: wrap;
        flex-direction: column;
      }

      .images {
        flex: 1;
        position: relative;


      }

      .chef-hat {
        width: 480px;
        height: 520px;
        background-color: transparent;
        background-image: url(../assets/animation-chef-1.png);
        background-repeat: no-repeat;
        background-position: bottom center;
        animation: toptobottom .9s steps(8) 1;

        /*  animation-timing-function: cubic-bezier(0, 0, 0.58, 0.1);*/
        @include breakpoint(tablet) {
          animation: none;
          max-width: 100%;
          width: 280px;
          background-image: url(/img/chef-hat-small.png);
          height: 280px;
        }
      }
    }

    .weekly-recipes {
      padding: 16px 0;
      display: flex;
      flex-wrap: wrap;
      -ms-flex-direction: column;
      flex-direction: column;


      .recipe {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;

        @include breakpoint(mobile) {
          -ms-flex-direction: column;
          flex-direction: column;
        }

        .recipe-image-static {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          flex: 2;
          flex-direction: row;

          @include breakpoint(mobile) {
            -ms-flex-direction: column;
            flex-direction: column;
          }

          .recipe-image-static-image {
            flex: 1 10%;

            img {
              max-width: 100%;
              border: 2px solid $brown;
              border-radius: 6px;
            }
          }

          .recipe-desc {
            flex: 1;
            margin: 0 24px;
          }
        }

        .recipe-image-dynamic {
          padding: 16px;
          flex: 1;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          flex-direction: row;

          .recipe-image-dynamic-lines {
            flex: 2;
            margin-bottom: 8px;

            img {
              margin-bottom: 16px;
            }
          }

          .recipe-image-dynamic-girl {
            flex: 1
          }
        }
      }
    }

    .break {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 16px;

      img {
        max-width: 100%;

        @include breakpoint(mobile) {
          width: 50%;
        }
      }
    }

    .what-to-cook {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;

      @include breakpoint(mobile) {
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .what-to-cook-image {
        flex: 1;
        padding: .4em;
      }

      .what-to-cook-desc {
        flex: 2;
        padding: 16px 40px;
        margin: 16px 40px;

        @include breakpoint(tablet) {
          padding: 12px;
          margin: 12px;
        }
      }
    }

    .tricks {
      display: flex;
      justify-content: space-between;
      align-content: center;
      flex-wrap: wrap;

      .tricks-header {
        flex: 1;
        background-color: $beige;
        font-size: 56px;
        font-family: Merriweather;
        padding: .5em;
        border-radius: 6px;
        color: $brown;

        @include breakpoint(tablet) {
          padding: .4em;
        }

      }

      .tricks-desc {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        padding: 40px;
      }
    }

    .blogs {
      padding: 24px 0;
    }

    .about {
      display: flex;
      flex-direction: space-between;
      flex-wrap: wrap;
      padding: 16px 0;

      @include breakpoint(tablet) {
        flex-direction: column;
      }

      .about-desc {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-right: 16px;
      }

      .about-image {
        flex: 1;
        padding: 64px;
        align-self: flex-end;
        display: flex;
        justify-content: flex-end;

        @include breakpoint(tablet) {
          flex-direction: flex-start;
        }

        img {
          max-width: 100%;
          width: 400px;
          height: auto;
        }
      }
    }

    @keyframes toptobottom {
      0% {
        background-position: top center;
      }

      100% {
        background-position: bottom center;
      }
    }
  }

</style>
<script>
  import {
    VueperSlides,
    VueperSlide
  } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'
  import data from '../static/data.json'
  import AOS from 'aos';
import Theheader from '../layouts/Theheader.vue';
import Thefooter from '../layouts/Thefooter.vue';
  if (process.client) {
    require('aos')
  }
  export default {
    name: 'Home',
    layout: 'Theheader, Thefooter',
    components: {
      VueperSlides,
      VueperSlide,
        Theheader,
        Thefooter
    },
    data() {
      return {
        myHeader: 'BEST RECİPES',
        mySubHeader: 'Just For U',
        myDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus vitae urna ut dignissim',
        recommends: data.recommends,
        recipes: data.recipes,
         randomRecipe: '',
        selectedImage: null
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
      randomItem(items) {
        return items[Math.floor(Math.random() * items.length)]
      },
    },

    created() {
    //  AOS.init(),
    //    this.selectedImage = this.randomItem(this.recipes)
    var randRecipe = [Math.floor(Math.random() *this.recipes.length)];

    this.randomRecipe = this.recipes[randRecipe]
    }
  }

</script>
