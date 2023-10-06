<template>
  <div class="topnav">

    <div class="topnav__left">
      <router-link to="/" class="topnav__left__logo">
      <span>Dashboard Vue</span>
    </router-link>
    </div>

    <div class="topnav__center">
      Github
    </div>

    <div class="topnav__right">
      <i class="ph-thin ph-bell"></i>
      <i class="ph-thin ph-chat-circle-text"></i>
    </div>
    
  </div>
</template>
<script>
</script>
<style>
  .topnav{
    width:100%;
    top:0;
    position:sticky;
    height:80px;
    background-color:lemonchiffon;
    display:flex;
    overflow:hidden;
    flex:1 1 1;
  }

  .topnav__left{
    width:30%;
    border:1px solid black;
  }
  .topnav__left__logo{
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration: none;
    font-weight:900;
    font-size:2rem;
  }

  .topnav__center{
    width:35%;
    border:1px solid pink;
  }

  .topnav__right{
    width:35%;
    font-size:2rem;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding-right:40px;
    border:1px solid blue;
  }

  .topnav__right i{
    margin-left:20px;
    border:1px solid blue;
  }
</style>