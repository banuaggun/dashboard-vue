<template>
  <div>
    <h1>Overview</h1>
    <div class="state">
      <span>Balanced 10% +</span>
      <Card :subTitle="card.subTitle" :name="card.name" class="card" />
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  components: {Card},
  data: () => ({
    card:{
      subTitle:'Wallet Instant Status',
      name:'Jane Madelaine'
    }
  })
}
</script>
<style>
img.card{
  width:100px;
  height:100px;
}
  
</style>