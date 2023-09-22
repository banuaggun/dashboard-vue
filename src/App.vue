<template>
  <div id="app">
    <div class="wrapper">
      <Sidebar />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: "app",
  components: { Sidebar },
}
</script>

<style scoped>
#app{
  display:flex;
}

main{
  display:flex;
  flex:1 1 0;
  border:1px solid green;
}

</style>
