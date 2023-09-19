<template>
  <div id="app">
    <div class="wrapper">
      <aside>
        <div class="sidebar">
          <nav>
            <RouterLink to="/">Overview</RouterLink>
            <RouterLink to="/products">Products</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
            <RouterLink to="/signout">Sign Out</RouterLink>
          </nav>
        </div>
      </aside>
      <div class="sidebar__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.sidebar {
  /* Sidebar ile ilgili stiller burada yer alır */
  position: absolute;
  left: 0;
  border: 1px solid green;
}

.sidebar__content {
  margin-left: 80px;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
