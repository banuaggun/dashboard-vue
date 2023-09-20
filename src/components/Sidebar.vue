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
      <RouterLink to="/">
        <span>
          <i class="ph-fill ph-house"></i>
        </span>
        <span class="menu__text">Overview</span>
      </RouterLink>
      <RouterLink to="/products">
        <span>
          <i class="ph-fill ph-cube"></i>
        </span>
        <span class="menu__text">Products</span>
      </RouterLink>
      <RouterLink to="/statistics">
        <span>
          <i class="ph-fill ph-trend-up"></i>
        </span>
        <span class="menu__text">Statistics</span>
      </RouterLink>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <RouterLink to="/signout">
        <span>
          <i class="ph-fill ph-sign-out"></i>
        </span>
        <span class="menu__text">Sign Out</span>
      </RouterLink>
    </div>
  </aside>
</template>

<script setuop>
import {ref} from 'vue'
import logoUrl from '../assets/logo.svg'
const is__expanded = ref(localStorage.getItem("is__expanded") === "true")

const ToggleMenu = () => {
	is__expanded.value = !is__expanded.value
	localStorage.setItem("is__expanded", is__expanded.value)
}
</script>

<style>
aside{
  width: calc(2rem + 32px);
  min-height:100vh;
  overflow:hidden;
  padding:1rem;
  display:flex;
  flex-direction:column;
  background-color:thistle;
  color:darkcyan;
  transition:0.2s ease-in-out;
}
aside.flex{
  flex:1 1 0%;
}
.logo{
  margin-bottom:1rem;
}
.logo img{
  width:2rem;
  height:2rem;
}
.menu__toggle__wrap{
  display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
}
.menu__toggle__wrap__arrow{
  			transition: 0.2s ease-in-out;

}
.menu__toggle__wrap__arrow i{
  font-size:2rem;
  transition:0.2s ease-out;
}
</style>