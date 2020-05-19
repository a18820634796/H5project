<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from './page/index'
export default {
    components: {
        index
    },
    name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
