<template>
  <div class="products">
    <div class="products__search">
      <input type="search" name="query" v-model="searchQuery" />
    </div>
    <div class="products__table">
      <Table :data="tableData" :columns="tableColumns" :filter-key="searchQuery" />
    </div>
  </div>
</template>
<script setup>
import Table from '../components/Table.vue'
import {tableData, tableColumns} from '../assets/data/products.js'
import {ref} from 'vue'

const searchQuery = ref('')

</script>
<style>
.products{
  border:1px solid blueviolet;
  min-height:calc(100vh - 80px);
}

.products__search{
  width:100%;
  height:52px;
  border:1px solid mediumvioletred;
  margin:30px auto;
}

.products__search input{
  width:60%;
  margin:0 30px;
  height:36px;
  border-radius:12px;
  border:2px solid lightslategray;
  outline:none;
  padding:0 12px;
}
  
</style>