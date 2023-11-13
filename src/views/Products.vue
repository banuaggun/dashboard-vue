<template>
  <div class="products">
    <div class="products__top">
      <div class="products__top__search">
        <input type="search" name="query" v-model="searchQuery" />
      </div>
      <div class="products__top__add">
          <button @click="$router.push('/add-product')" class="add">
    <span>Add</span>
  </button>
      </div>
    </div>
    
    <div class="products__table">
      <ProductsTable />
     
      <Table :data="tableData" :columns="tableColumns" :filter-key="searchQuery" :addProduct="addProduct" />
    </div>
  </div>
</template>
<script setup>
import ProductsTable from '../components/ProductsTable.vue'
import Table from '../components/Table.vue'
import AddProduct from '../components/AddProduct.vue'
import products from '../assets/data/products.json'
import {tableData, tableColumns} from '../assets/data/products.js'
import {ref} from 'vue'


const searchQuery = ref('')

const addProduct = ref('')




</script>
<style>
.products{
  border:1px solid blueviolet;
  min-height:calc(100vh - 80px);
}

.products__top{
  margin:0 40px;
  width:calc(100% - 80px);
  border:1px solid green;
  height:80px;
  display:flex;
  align-items:center;
  justify-content: space-between;
}


.products__top__search{
  width:50%;
}

.products__top__search input{
  width:100%;
  height:36px;
  border-radius:12px;
  border:2px solid lightslategray;
  outline:none;
  padding:0 12px;
}

.products__top__add{
  width:50%;
  display:flex;
  justify-content:flex-end;
}
  
</style>