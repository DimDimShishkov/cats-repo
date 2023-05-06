<template>
  <header>
    <router-link to="/"
      ><img alt="test" src="@/assets/header__logo.png" class="header__img"
    /></router-link>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/crew">Crew</router-link> |
      <router-link to="/reg">Registration</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid $black;
}

.header__img {
  width: 20px;
  height: 31px;
}

nav {
  /* padding: 30px; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
