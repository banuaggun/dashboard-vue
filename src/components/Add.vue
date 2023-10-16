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
  <div class="modal__area" v-if="open">
  <div class="modal__area__content">
    <div class="modal__area__content__close">
      <button @click="open = false">
        <i class="ph-thin ph-x-circle"></i>
      </button>
    </div>
    <div class="modal__area__content__form">
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" value="" />
        <label for="phone">Phone</label>
        <input type="text" id="phone" value="" />
        <label for="orders">Orders</label>
        <input type="text" id="orders" value="" />
        <label for="spends">Spends</label>
        <input type="text" id="spends" value="" />
      </form>
    </div>
  </div>
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

.modal__area{
  position:absolute;
  top:0;
  left:0;
  background-color: rgba(0, 0, 0, 25%);
  z-index:999;
  width:100%;
  height:100%;
}

.modal__area__content{
background-color:white;
  width: 60%;
  height:calc(100% - 200px);
  position:relative;
  margin: 75px auto;
  border:1px solid green;
}

.modal__area__content__close{
  position:absolute;
  right:20px;
  top:20px;
}

.modal__area__content__close i{
  font-size:2.5rem;
}

.modal__area__content__form form{
  margin:60px 40px 30px 40px;
  display:flex;
  flex-direction:column;
  border:1px solid green;
}

.modal__area__content__form form label{
  font-size:1.2rem;
  padding:8px 0;
  font-weight:700;
}

.modal__area__content__form input{
  width:80%;
  height:32px;
  outline:none;
  padding-left:10px;
  margin:0 0 20px 0;
}
</style>