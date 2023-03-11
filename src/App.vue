<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Nav-Header.vue'
// import Slider from './components/Header-slider.vue'
// import Whyus from './components/Whyus-about.vue'
import Footer from './components/Footer-component.vue'
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <!-- <Slider></Slider>
  <Whyus></Whyus> -->
  <Footer></Footer>
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
  text-decoration: none;
}
</style>
