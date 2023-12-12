<template>
  <div>
    <h1>Overview</h1>
    <div class="state">
      <span>Balanced 10% +</span>
      <Card :name="card.name" />
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  components: {Card},
  data: () => ({
    card:{
      name:'Jane Madelaine'
    }
  })
}
</script>
<style>
  
</style>