<template>
  <div class="card">
    <div class="card-image">
      <img style="width:100%; height:100px; border:1px solid green;" />
    </div>
    <div class="card-content">
      <div class="card-content-name">
        <span>{{name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name:{
      type:String,
      default:'',
      required:true
    }
  }
}
</script>
<style>
  
</style>