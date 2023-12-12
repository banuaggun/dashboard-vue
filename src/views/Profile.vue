<template>
  <div class="profile-page">
    <div class="profile-page-wrapper">
      <div class="column column-1">
        <OverviewProfileVue/>
      </div>
      <div class="column column-2">2</div>
      <div class="column column-3">3</div>
    </div>
  </div>
</template>

<script setup>
import OverviewProfileVue from '../components/OverviewProfile.vue'

</script>

<style>
.profile-page-wrapper{
  display:grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content:space-evenly;
}
.column{
  border:1px solid fuchsia;
  height:100vh;
  padding:20px 0;
}

</style>