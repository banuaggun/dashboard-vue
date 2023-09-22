<template>
  <aside :class="`${is__expanded ? 'is__expanded' : ''}`">
    <div class="logo">
      <img :src="logoUrl" alt="vue"/>
    </div>
    <div class="menu__toggle__wrap">
      <button class="menu__toggle__wrap__arrow" @click="ToggleMenu">
        <span>
          <i class="ph-fill ph-caret-circle-double-right"></i>
        </span>
      </button>
    </div>
    <div class="menu">
      <RouterLink to="/" class="menu__button">
        <span>
          <i class="ph-fill ph-house"></i>
        </span>
        <span class="menu__text">Overview</span>
      </RouterLink>
      <RouterLink to="/products" class="menu__button">
        <span>
          <i class="ph-fill ph-cube"></i>
        </span>
        <span class="menu__text">Products</span>
      </RouterLink>
      <RouterLink to="/statistics" class="menu__button">
        <span>
          <i class="ph-fill ph-trend-up"></i>
        </span>
        <span class="menu__text">Statistics</span>
      </RouterLink>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <RouterLink to="/signout" class="menu__button">
        <span>
          <i class="ph-fill ph-sign-out"></i>
        </span>
        <span class="menu__text">Sign Out</span>
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
import {ref} from 'vue'
import logoUrl from '../assets/color.jpg'
const is__expanded = ref(localStorage.getItem("is__expanded") === "true")

const ToggleMenu = () => {
	is__expanded.value = !is__expanded.value
	localStorage.setItem("is__expanded", is__expanded.value)
}
</script>

<style>
aside{
  display:flex;
  flex-direction: column;
  width:calc(2rem + 32px);
  overflow:hidden;
  min-height:100vh;
  padding:1rem;

  transition:0.2s ease-in-out;

  border:1px solid black;
}

.flex{
  display:flex;
  flex:1 1 0%;
}

.logo{
  margin-bottom: 1rem;
}

img{
  width:2rem;
  height:2rem;
}

.menu__toggle__wrap{
  display:flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top:0;
  transition: 0.2s ease-in-out;
  border:1px solid red;
}

.menu__toggle__wrap__arrow{
  transition: 0.2s ease-out;
}

.menu__toggle__wrap__arrow i{
  font-size:2rem;
  color:green;
  transition: 0.2s ease-out;
}

.menu__toggle__wrap__arrow:hover i{
  color:blue;
  transform:translateX(0.5rem);
}

.menu__button > .menu__text{
  opacity:0;
  transition: opacity 0.3s ease-in;
}

.menu{
  margin:0 -1rem;
}

.menu__button{
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
	padding: 0.5rem 1rem;
}

.menu__button i{
  font-size:2rem;
  color:purple;
  transition: 0.2s ease-in-out;
}

.menu__text{
  color:purple;
  transition: 0.2s ease-in-out;
}


.menu__button:hover{
  background-color: azure;
}

.menu__button:hover, .menu__text, .menu__button i{
  color:aqua;
}

.is__expanded{
  width:300px;
}
.is__expanded .menu__button, .menu__text{
  opacity: 1;
}
</style>