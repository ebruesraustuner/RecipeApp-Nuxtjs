
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
        <h1> {{ hdr }} 1 </h1>
    <h2> {{ hdr }} 2 </h2>
    <h3>{{ hdr }}  3</h3>
    <h4>{{ hdr }}  4</h4>
    <h5> {{ hdr }} 5 </h5>
    <h6> {{ hdr }}  6</h6>
    <p> {{ prg }} </p>

  </div>
</template>
<style scoped lang="scss">
.home {
  text-align: center;
}
</style>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data () {
    return {
          hdr: 'Header',
          prg: 'Paragraph'
      }
  }
}
</script>
