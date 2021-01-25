<template>
  <div>
    <theheader></theheader>
    <div class="blogs-section">
      <div class="blogs-section-header">
        <h1>Articles From Chef's</h1>
      </div>
      <div class="blogs-section-blogs">
        <div class="allblogs">
          <div class="blog" v-for="(blog,i) in blogs" :key="i">
            <div class="blogs-header">
              <h6>{{blog.title}}</h6>
            </div>
            <div class="blogs-desc">
              <p>{{blog.desc}}</p>
            </div>
            <div class="blogs-more"><button class="vbutton vbutton-opacity" @click="goToblog(blog.Id)">Read
                More</button></div>
          </div>
        </div>
        <div class="lastblogs">
          <h4>Son Yazılar</h4>
          <!--   <ul >
                   <li v-for="(blog, index) in sort(blogs)" :key="index" style="list-style: none">
                        {{blog.date}}
                    </li>
                </ul> 
                <ul>
                    <li v-for="(blog, index) in sortedBlogs" :key="index">
                        {{ index }} - {{ blog.title }}
                    </li>
                </ul>-->
          <div v-for="blog in orderedBlogs" :key="blog" class="lastblog" @click="goToblog(blog.Id)">
            <p><b>{{ blog.title }}</b></p><span>{{blog.date}}</span>
          </div>

          <div class="randomrecipe">
            <button class="vbutton vbutton-default" @click="picker">Suprise Me </button>
            <div @click="goTodetail(randomRecipe.Id)">
              <span>
                <h6> {{randomRecipe.title}}</h6>
              </span>
              <div> <img :src="randomRecipe.image" style="max-width:100%"></div>
            </div>
          </div>
        </div>
      </div>
     
    </div> 
    <thefooter></thefooter>
  </div>
</template>
<style scoped lang="scss">
  .blogs-section {
    padding: 0 24px;

    .blogs-section-header {
      background-image: url(../assets/groups.png);
      background-color: $sand;
      background-position: top left;
      background-repeat: repeat;
      background-size: auto;
      height: 240px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;

      h1 {
        background-color: $sand;
        padding: 24px;
        margin: 8px;

      }
    }

    .blogs-section-blogs {
      display: flex;
      flex-wrap: wrap-reverse;
      flex-direction: row;
      padding: 16px 0;

      @include breakpoint(mobile) {
        flex-direction: column-reverse;
      }

      .allblogs {
        flex: 3;
        padding: 8px 0;
        margin: 8px 0;

        .blog {
          padding: 8px 0;

          .blogs-header h6 {
            margin: 24px 0;
          }

          .blogs-desc p {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .blogs-more {
            display: flex;
            justify-content: flex-end;

          }
        }

      }

      .lastblogs {
        padding: 8px;
        margin: 8px;
        flex: 1;
        border-left: 2px solid $beige;

        h4 {
          margin: 24px 0;
        }

        .lastblog {
          border-bottom: 1px solid $pink;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          flex-direction: column;

          p {
            font-family: merriweather;
            font-size: 16px;
            font-weight: 500;
            color: $brown;
          }

          span {
            font-weight: 400;
            color: $lightbrown;
          }
        }
      }
    }

    .asc:after {
      content: "\25B2"
    }

    .desc:after {
      content: "\25BC"
    }
  }

</style>
<script>
  import data from '../static/data.json'
  import orderBy from 'lodash/orderBy';

  import Thefooter from '../layouts/Thefooter.vue'
  import Theheader from '../layouts/Theheader.vue'
  export default {
    name: 'blog',
    components: {

      Theheader,
      Thefooter,
    },
    data() {
      return {
        blogs: data.blogs,
        recipes: data.recipes,
        randomRecipe: '',
      }
    },
    methods: {

      goToblog(rId) {
        this.$router.push({
          name: 'blogdetails',
          params: {
            Rid: rId
          }
        })
      },
      goTodetail(rId) {
        this.$router.push({
          name: 'recipedetails',
          params: {
            Rid: rId
          }
        })
      },
      picker: function () {
        var randomRecipe = Math.floor(Math.random() *
          this.recipes.length);
        this.randomRecipe = this.recipes[randomRecipe];
      }
      // sort: function() {
      //     return arr.slice().sort(function(a,b) {
      //        return a.date - b.date;
      //    });
      // }
    },
    computed: {
      // sortedBlogs: function () {
      //    this.blogs.slice().sort( function(a,b){
      //        return a.date - b.date;
      //    });
      //    return this.blogs;
      //}
      orderedBlogs: function () {
        return orderBy(this.blogs, 'date')
      }
    }
  }

</script>
