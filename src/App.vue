<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    

    <div class="wrapper">
     

      <nav>
        <RouterLink to="/">Overview</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/statistics">Statistics</RouterLink>
        <RouterLink to="/signout">Sign Out</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
