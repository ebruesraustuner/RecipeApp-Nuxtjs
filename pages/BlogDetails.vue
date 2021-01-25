<template>
    <div>
            <theheader></theheader>
        <div class="blogs" v-for="(blogs, i) in blogs" :key="i">
            <div v-if="rId == blogs.Id" class="blog">
                <h3>{{blogs.title}}</h3><br>
                <img :src="blogs.image">
                <div class="blog-desc">{{blogs.desc}}</div>
            </div>
        </div>
         <thefooter></thefooter>
    </div>
</template>

<style lang="scss" scoped>
.blogs {
    margin: 24px ;
    .blog {
        border: 2px solid $brown;
        padding: 0 16px 16px 16px;
        border-radius: 6px;
    }
}
</style>
<script>
import data from '../static/data.json'
import Thefooter from '../layouts/Thefooter.vue'
import Theheader from '../layouts/Theheader.vue'
    export default {
        name: 'BlogDetails',
        components: {

        Theheader,
        Thefooter,
    },
        data() {
            return {
                rId: this.$route.params.Rid,
                blogs: data.blogs
            }
        }
    }
</script>