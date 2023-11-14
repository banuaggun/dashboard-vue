<template>
    <div>
        <form style="margin:20px;" @submit.prevent>
            <label>Name</label>
            <input type="text" v-model="name" />
            <br/><br/>
            <label>Size</label>
            <input type="number" v-model="size" />
            <br/><br/>
            <label>Color</label>
            <input type="text" v-model="color" />
            <br/><br/>
            <label>Price</label>
            <input type="number" v-model="price" />
            <br/><br/>
            <button type="submit" @click="addData()">Add</button>
        </form>
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
                        <button style="margin-right:20px;" @click="getData(data.id)">Edit</button>
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
            name:'',
            size:'',
            color:'',
            price:0,
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
    },
    methods:{
        getData(id){
            var dataObj = this.productObj.filter(data => (data === data.id))
            this.name = dataObj[0].name
            this.size = dataObj[0].size
            this.color = dataObj[0].color
            this.price = dataObj[0].price
        },
        addData(){
            
            const id = this.productObj.length + 1;
            const data = {
                name:this.name,
                color:this.color,
                size:this.size,
                price:this.price
            }
            this.productObj.push(data);
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