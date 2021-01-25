<template>
  <div>
    <div class="myNavbar">
      <NuxtLink to="/" class="logo">
        <p class="logo-text"> BestiesRecipes </p>
      </NuxtLink>
      <div class="navbutton">
        <label for="navcheck">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="navcheck">
      <label class="navlinks">
        <NuxtLink to="/Recipes">Recipes</NuxtLink>
        <NuxtLink to="/Recommendcook">What Should I Cook</NuxtLink>
        <NuxtLink to="/Tricks">Tricks</NuxtLink>
        <NuxtLink to="/Blog">Blog</NuxtLink>
        <NuxtLink to="/About">About</NuxtLink>
        <NuxtLink to="/Contact">Contact</NuxtLink>

      </label>
    </div>
    <Nuxt />
  </div>
</template>
<script>
export default {
    name: 'Theheader'
}
</script>
