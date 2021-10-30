<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
	import Vue from 'vue';
	import {
		formatMoney,
	} from '../packages/index.js';
	
export default {
  name: 'App',
  mounted() {
  	console.log(formatMoney(12312312312))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
