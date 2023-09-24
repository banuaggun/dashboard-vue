<template>
	<div class="app" id="app">
		<Sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'

</script>

<style>
.app {
	display: flex;
}

main {
	flex: 1 1 0;
	padding: 2rem;
}

@media (max-width: 1024px) {
	main{
    padding-left: 6rem;
  }
}
	

</style>