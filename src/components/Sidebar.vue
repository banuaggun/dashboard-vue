<template>
	<aside :class="`${is__expanded ? 'is__expanded' : ''}`">
		
    <div class="logo">
			<img :src="logoURL" alt="Vue" /> 
		</div>

		<div class="menu__toggle__wrap">
			<button class="menu__toggle__arrow" @click="ToggleMenu">
				<span class="icon">
          <i class="ph-fill ph-caret-circle-double-right"></i>
        </span>
			</button>
		</div>

		
		<div class="menu" v-for="item in sidebarData" :key="item.id">
		
					<router-link :to="item.to" class="menu__button">
						<span class="icon">
							<i :class="item.icon"></i>
						</span>
						<span class="menu__text">{{item.text}}</span>
					</router-link>
		</div>		

	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/color.jpg'
import sidebarData from '../assets/data/sidebarData.json'

const is__expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is__expanded.value = !is__expanded.value
	localStorage.setItem("is__expanded", is__expanded.value)
}
</script>

<style scoped>
aside {
  display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;
}
	
aside .flex {
	flex: 1 1 0%;
}

aside .logo {
	margin-bottom: 1rem;
}

aside	img {
	width: 2rem;
	height:1.5rem;
}
	
.menu__toggle__wrap {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1rem;
		
  position: relative;
	top: 0;
	transition: 0.2s ease-in-out;
}
	
.menu__toggle__arrow {
	transition: 0.2s ease-in-out;
}

.menu__toggle__arrow	.icon,
.menu__button	.icon{
	font-size: 2rem;
	color: var(--light);
	transition: 0.2s ease-out;
}
			
.menu__toggle__arrow:hover .icon{
  color: var(--primary);
	transform: translateX(0.5rem);
}

.menu__button .menu__text {
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
}

.menu {
	margin: 0 -1rem;
}

.menu:last-child{
	position:absolute;
	bottom:0;
}

.menu__button {
	display: flex;
	align-items: center;
	text-decoration: none;

	transition: 0.2s ease-in-out;
	padding: 0.5rem 1rem;
}

.menu__text {
	color: var(--light);
	transition: 0.2s ease-in-out;
}

.menu__button:hover {
	color:var(--dark);
	background-color: var(--dark__alt);
}

.menu__button.active,
.menu__button.active .menu__text,
.menu__button.active .icon{
	color:#000;
	background-color:lightgreen;
}

.menu__button	.icon, .menu__text {
	color: var(--primary);
}

.menu__button	.icon, .menu__text {
	color: var(--primary);
}
	
.is__expanded {
	width: var(--sidebar__width);
}

.is__expanded	.menu__toggle__wrap {
	top: -3rem;
}

.is__expanded .menu__toggle__arrow {
	transform: rotate(-180deg);
}
		
.menu__button .menu__text {
	opacity: 1;
}

.menu__button .icon {
	margin-right: 1rem;
}

</style>