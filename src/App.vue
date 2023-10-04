<template>
	<div class="app" id="app">
		<Topnav />

		<Sidebar />
				<div class="app__content">
		<!-- Content -->
		<router-view />
		</div>
	</div>
</template>

<script setup>
import Topnav from './components/Topnav.vue'
import Sidebar from './components/Sidebar.vue'

</script>

<style>
.app {
	display: flex;
	flex-direction: column;
}

.app__content{
	margin-left:calc(2rem + 32px);
}

.is__expanded + .app__content{
	margin-left:var(--sidebar__width);
}

@media (max-width: 1024px) {
	main{
    padding-left: 6rem;
  }
}
	

</style>