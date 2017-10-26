<template>
    <div id="app">
        <ShopHead/>
        <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ShopHead from './components/Header'

export default {
    name: 'app',
    components: {
        HelloWorld,ShopHead
    }
}
</script>

<style>
body{
  margin: 0;
  background: #f7f8f8;
}
#app {
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    min-width: 1170px;
}
</style>
