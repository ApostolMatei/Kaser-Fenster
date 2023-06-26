<template>
  <div class="brands" ref="slider" @click="muian">
    <div class="inner" ref="inner">
      <img class="brand" v-for="brand in brands" :key="brand" :src="brand.src" :alt="brand.alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Whyus-about',

  data() {
    return {
      brands: [
        { src: '/schuco.png', alt: 'Schuco Logo' },
        { src: '/saint.png', alt: 'Saint Logo' },
        { src: '/trocal.png', alt: 'Trocal Logo' },
        { src: '/abus.png', alt: 'Abus Logo' },
        { src: '/roto.png', alt: 'Roto Logo' },
        { src: '/siegenia.png', alt: 'Siegenia Logo' },
        { src: '/veka.png', alt: 'Veka Logo' },
        { src: '/velux.png', alt: 'Velux Logo' },
        { src: '/wink.png', alt: 'Wink Logo' },
        { src: '/schuco.png', alt: 'Schuco Logo' },
        { src: '/saint.png', alt: 'Saint Logo' },
        { src: '/trocal.png', alt: 'Trocal Logo' },
        { src: '/abus.png', alt: 'Abus Logo' },
        { src: '/roto.png', alt: 'Roto Logo' },
        { src: '/siegenia.png', alt: 'Siegenia Logo' },
        { src: '/veka.png', alt: 'Veka Logo' },
        { src: '/velux.png', alt: 'Velux Logo' },
        { src: '/wink.png', alt: 'Wink Logo' }
      ]
    }
  },

  mounted() {
    this.slider_inner = this.$refs.inner
    this.slides = this.$refs.inner.querySelectorAll('.brand')
    this.moveSlider()
  },

  methods: {
    moveSlider() {
      this.slider_inner.style.transform = 'translateX(-140px)'
      setTimeout(() => {
        var item = this.$refs.inner.querySelector('.brand')
        item.remove()
        this.slider_inner.style.transform = 'translateX(0px)'
        this.slider_inner.append(item)
        this.slider_inner.style.transition = 'none'
        this.slider_inner.offsetHeight
        this.slider_inner.style.transition = null
        this.moveSlider()
      }, 5000)
    }
  }
}
</script>

<style scoped lang="scss">
.brands {
  background-color: rgb(0, 0, 0);
  overflow: hidden;

  padding: 25px 0;

  justify-content: space-evenly;
  img {
    flex-shrink: 0;
    color: white;
    margin-right: 20px;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    height: 90px;
    width: 120px;

    aspect-ratio: 4/3;
    // background-color: #5d5dcd;
    font-size: 30px;
    font-weight: bold;
  }

  .inner {
    display: flex;

    transition: transform 5s linear;
  }
  .brand {
  }
}
</style>
