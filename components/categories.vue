<template>
    <ul class="categories">
        <div class="categories-title">
            <h3> Categories </h3>
        </div>
        <li v-for="category in categories" :key="category" class="categories-list"> </li>
    </ul>
</template>
<style scoped lang="scss">
    
    ul.categories {
        padding: 16px;

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
        li.categories-list {
            padding: 16px 24px;
            list-style: none;
            &::after {
                display: block;
                content: '';
                width: 100%;
                border: 1px solid $brown;
                margin-top: 8px;
            }
        }
    }
</style>
<script>
    export default {
        name: 'categories',
        data() {
            return {
                
            }
        },
        
    }
</script>