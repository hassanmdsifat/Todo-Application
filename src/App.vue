<template>
  <div id="app">
    <WelcomeHeader/>
    <router-view/>
  </div>
</template>

<script>
import WelcomeHeader from './components/Header'
export default {
  name: 'App',
  components: {
    WelcomeHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
