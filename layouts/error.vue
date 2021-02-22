<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }

</script>
<style scoped lang="scss">
  .error {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;

    &::before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background-image: url(../assets/error-colored.svg);
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: center;
      opacity: .4;
    }

    h1 {
      z-index: 1;
    }

    a {
      z-index: 1;
      text-decoration: none;
      font-size: 18px;
      color: $lightbrown;

      &:visited {
        background-color: $pink;
      }

      &:hover {
        color: $pink;
      }
    }

  }

</style>
