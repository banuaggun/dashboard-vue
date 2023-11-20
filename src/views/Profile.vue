<template>
  <div class="profile-page">
    <div class="profile-page-wrapper">
      <div class="column column-1">1</div>
      <div class="column column-2">2</div>
      <div class="column column-3">3</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.profile-page-wrapper{
  display:grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content:space-between;
}
.column{
  border:1px solid fuchsia;
}
</style>