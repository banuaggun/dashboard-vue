<template>
  <div id="app">
    <Sidebar />
    <div class="wrapper">
      <div class="sidebar__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar.vue'
export default {
 name:"app",
  components:{Sidebar},
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

#app{
  display:flex;
}

main{
  flex:1 1 0;
  padding:2rem;
}

@media (max-width:1024px){
  main{
    padding-left:6rem;
  }
}

.sidebar__content {
  margin-left: 80px;
}

</style>
