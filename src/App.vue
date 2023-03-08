<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Nav-Header.vue'
import Slider from './components/Header-slider.vue'
import Whyus from './components/Whyus-about.vue'
</script>

<template>
  <Header></Header>
  <Slider></Slider>
  <Whyus></Whyus>
</template>

<style>
body,
#app {
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
h1,
h2,
h3,
p,
a {
  margin: 0;
}
</style>
