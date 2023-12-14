<template>
    <div class="card">
        <div class="card-content">
          <div class="card-content-sub-title">
            <span>{{subTitle}}</span>
          </div>
            <div class="card-content-name">
                <span>{{ name }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
      img:{
        type:String,
        default:'',
        required:true
      },
      subTitle:{
        type:String,
        default:'',
        required:true
      },
        name: {
            type: String,
            default: "",
            required: true,
        },
    },
};
</script>
<style>
.card{
  margin:20px;
  max-width:400px;
  height:auto;
  padding:20px 30px;
  border:1px solid #dcdcdc;
  border-radius: 12px;
}
</style>
