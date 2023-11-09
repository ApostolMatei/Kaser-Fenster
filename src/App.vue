<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Nav-Header.vue'
import Footer from './components/Footer-component.vue'
</script>

<template>
  <Header @menu-active="menuActive = $event"></Header>
  <router-view></router-view>
  <!-- <Slider></Slider>
  <Whyus></Whyus> -->
  <Footer></Footer>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@200&family=Teko:wght@500&display=swap');
#app,
body {
  margin: 0 auto;
  max-width: 1920px;
  box-sizing: border-box;
  font-family: sans-serif;

  &.menuactive {
    overflow: hidden;
  }
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
<script>
export default {
  data() {
    return {
      menuActive: false
    }
  },
  watch: {
    menuActive(newValue) {
      if (newValue) {
        document.body.classList.add('menuactive')
      } else {
        document.body.classList.remove('menuactive')
      }
    }
  }
}
</script>
