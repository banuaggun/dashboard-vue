<template>
  <div class="cards">
    <div class="cards-content">
      <span>{{totalValue}}</span>
      <div class="cards-content-row1">
        <span class="title">Day Gain</span>
        <span>{{dayGain}}</span>
      </div>
      <div class="cards-content-row2">
        <span class="title">Total Day Gain</span>
        <span>{{totalDayGain}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    totalValue:{
      type:String,
      default:'',
      required:true
    },
    dayGain:{
      type:String,
      default:'',
      required:true
    },
    totalDayGain:{
      type:String,
      default:'',
      required:true
    },
  }
};
</script>
<style>
  .cards{
    margin:10px;
  }
  .cards-content{
    padding:20px;
    border:1px solid #bcdade;
    border-radius:12px;
  }
  .cards-content span:nth-last-child(3){
    font-size:2.2rem;
    font-weight:bold;
  }
  .cards-content-row1{
    margin:20px 0 5px 0;
  }
  .cards-content-row1 span.title,
  .cards-content-row2 span.title{
    font-weight:600;
    font-size:1.2rem;
    margin-right:10px;
  }
  .cards-content-row1 span,
  .cards-content-row2 span{
    font-size:1rem;
  }
</style>