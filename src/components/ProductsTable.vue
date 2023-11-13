<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in productObj" :key="data.id">
                    <td>{{data.name}}</td>
                    <td>{{data.size}}</td>
                    <td>{{data.color}}</td>
                    <td>{{data.price}}</td>
                    <td>
                        <button style="margin-right:20px;">Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            productObj:[
                {
                    id:1,
                    name:'Marc Jacobs Dress',
                    color:'black',
                    size:'36, 38, 40',
                    price:'2000$'
                },
                {
                    id:2,
                    name:'Marc Jacobs Dress',
                    color:'silver',
                    size:'36, 38, 40',
                    price:'2000$'
                }
            ]
        }
    }
}
</script>
<style>
    
</style>

<!--
<template>
    <div>
        <h1 v-for="product in products" :key="product.id">
            {{ products.productName }} {{ productName }}
        </h1>
        <p v-for="product in products" :key="product.id">{{ products.content }} {{ content }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const products = ref(null);
fetch('../assets/data/products.json')
    .then(response => response.json())
    .then(data => products.value = data);

 
</script>
<style></style>
-->