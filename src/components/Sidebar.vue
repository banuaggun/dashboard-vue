<template>
	<aside :class="`${is__expanded ? 'is__expanded' : ''}`">

		<div class="menu__toggle__wrap">
			<button class="menu__toggle__arrow" @click="ToggleMenu">
				<span class="icon">
          <i class="ph-fill ph-caret-circle-double-right"></i>
        </span>
			</button>
		</div>

		<div class="menu__area">
		
<div class="menu" v-for="(item, index) in sidebarData" :key="item.id">
		
					<router-link :to="item.to" class="menu__button">
						<span class="icon">
							 <img v-if="index === 0" :src="logoURL" alt="logo" />
							<i v-else :class="item.icon"></i>
						</span>
						<span class="menu__text">{{item.text}}</span>
					</router-link>
		</div>
		</div>
				

	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/color.jpg'
import sidebarData from '../assets/data/sidebarData.js'

const is__expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is__expanded.value = !is__expanded.value
	localStorage.setItem("is__expanded", is__expanded.value)
}
</script>

<style scoped>
.icon img{
	width:2rem;
	height:2rem;
	border-radius:50%;
}
aside {
  display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);
	position:absolute;
	top:0;
	width: calc(2rem + 32px);
	overflow: hidden;
	margin-top:80px;
	min-height: calc(100vh - 80px);
	padding: 1rem;

	transition: 0.2s ease-in-out;
}
	
.menu__toggle__wrap {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1rem;
		
  position: relative;
	top: 1rem;
	transition: 0.2s ease-in-out;
}
	
.menu__toggle__arrow {
	transition: 0.2s ease-in-out;
}

.menu__area{
	margin-top:1rem;
}


.menu__toggle__arrow	.icon,
.menu__button	.icon,
.menu__area__logo__image{
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

.menu__area__logo{
	display:flex;
	align-items:center;
}

.menu__text,
.menu__area__logo__name span {
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

.menu__button	.icon, .menu__text,
.menu__area__logo__name span {
	color: var(--primary);
}
	
.is__expanded {
	width: var(--sidebar__width);
}

.is__expanded	.menu__toggle__wrap {
	top: 1rem;
}

.is__expanded .menu__toggle__arrow {
	transform: rotate(-180deg);
}
		
.menu__button .menu__text,
.menu__area__logo__name {
	opacity: 1;
}

.menu__button .icon,
.menu__area__logo__image {
	margin-right: 1rem;
}

</style>