<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<template>
  <button @click="open = true" class="add">
    <span>+</span>
  </button>

  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>

  <!-- 
    <button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
  -->
</template>

<style scoped>
.add{
  width:60px;
  height:60px;
  border-radius:50%;
  background-color:lightgreen;
  display:flex;
  align-items:center;
  justify-content:center;
}
.add span{
  font-size:3rem;
  font-weight:bold;
}

.modal{
  position:fixed;
  z-index:999;
background-color:white;
  width: 60%;
  height:calc(100% - 300px);
  margin: 75px auto;
  border:1px solid green;
}
</style>