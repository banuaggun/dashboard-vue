<template>
  <div>
    <h1>Overview</h1>
    <div class="state">
      <span>Balanced 10% +</span>
      <Card :subTitle="card.subTitle" :name="card.name" class="card" />
      <Cards :totalValue="cards.totalValue" :dayGain="cards.dayGain" :totalDayGain="cards.totalDayGain" />
    </div>
  </div>
</template>
<script>
import Cards from './Cards.vue'
import Card from './Card.vue'
export default {
  components: {Card, Cards},
  data: () => ({
    card:{
      subTitle:'Wallet Instant Status',
      name:'Jane Madelaine'
    },
    cards:{
      totalValue:'$51.570,56',
      dayGain:'2.14(0.012%)',
      totalDayGain:'$8.248.22 (+6.24%)'
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