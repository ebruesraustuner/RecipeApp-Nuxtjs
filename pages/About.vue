<template>
<div>
      <theheader></theheader>
  <div class="about-we">
    <div class="about-desc">
      <div class="about-desc-bg">
        <h2>{{aboutheader}}</h2>
      </div>
      <div class="about-desc-p">
        <p>{{abouttitle}}</p>
      </div>
    </div>
    <div class="about-images">
      <h5>{{aboutslogan}}</h5>
      <h3> Happy People </h3>
      <img src="../assets/aboutwe.svg" />
      <h4> Delicious Dishes </h4>
    </div>

  </div>
   <thefooter></thefooter>
</div>
</template>

<style lang="scss" scoped>
  .about-we {
    display: flex;
    margin: 0 24px;
    padding: 24px;
    flex-wrap: wrap;
    border: 1px solid $lightbrown;
    border-radius: 6px;
    margin-bottom: 24px;

    .about-desc {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 24px;
            @include breakpoint(mobile) {
                flex-direction: column;
            }

      .about-desc-bg {
        background-color: $pink;
        display: flex;
        justify-content: center;
        align-self: center;
        padding: 24px;
        margin: 0px;
        flex: 1;

        h2 {
          color: $brown;
        }
      }

      .about-desc-p {
        padding: 0 40px;
        flex: 2;
         @include breakpoint(mobile) {
           padding: 16px;
         }

        p {
          margin: 0;
        }
      }

    }

    .about-images {
      display: flex;
      justify-content: baseline;
      flex-wrap: wrap;
      margin: 24px 0;

      h5 {
        flex: 1 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        &::before {
          content: '';
          border-top: 2px solid $lightbrown;
          margin: 0 24px 0 0;
          flex: 1 0 24px;

        }
        &::after {
          content: '';
          border-top: 2px solid $lightbrown;
          margin: 0 0 0 24px;
          flex: 1 0 24px;

        }

      }

      h3 {
        flex: 2;
        text-align: right;
        margin: 0;
        align-self: center;
         @include breakpoint(mobile) {
           text-align: center;
         }
      }

      img {
        flex: 1 16%;
      }

      h4 {
        flex: 2;
        align-self: center;
      }
       @include breakpoint(mobile) {
         text-align: center;
       }
    }
  }
</style>

<script>

import Thefooter from '../layouts/Thefooter.vue'
import Theheader from '../layouts/Theheader.vue'
  export default {
    name: 'about',
    components: {

        Theheader,
        Thefooter,
    },
    data() {
      return {
        aboutheader: 'About Us',
        abouttitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor…',
        aboutslogan: 'You Will Happy to know us ',


      }
    }

  }
</script>