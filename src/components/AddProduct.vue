<script>
import BaseInput from './BaseInput.vue'
export default {
  components:{BaseInput},
  data() {
    return {
      open: false,
      ProductName:'',
      Price:'',
      tableData:[]
    }
  },
  methods:{
    addProduct(){
      this.tableData.push({
        ProductName:this.ProductName,
        Price:this.Price
      });
      this.ProductName="";
      this.Price="";
    }
  }
}
</script>

<template>

  <div class="modal__area" @click="open=true">
  <div class="modal__area__content">
    <div class="modal__area__content__close">
      <button @click="$router.push('/products')">
        <i class="ph-thin ph-x-circle"></i>
      </button>
    </div>
     
    <div class="modal__area__content__form">
      
       
      <form @submit.prevent="addProduct">
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model="ProductName" />
        <label for="orders">Orders</label>
        <input type="text" id="orders" v-model="Price" />
        <label for="spends">Spends</label>
        <input type="text" id="spends" value="" />
        <fieldset>
        <button type="submit" @click="$router.push('/products')">Add</button>
        <button @click="$router.push('/products')">Cancel</button>
        </fieldset>
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