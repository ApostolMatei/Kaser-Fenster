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
    // Get references to the slider container and individual slides.
    this.slider_inner = this.$refs.inner
    this.slides = this.$refs.inner.querySelectorAll('.brand')
    // Start the slider
    this.moveSlider()
  },

  methods: {
    // Method responsible for sliding the content within the slider.
    moveSlider() {
      this.slider_inner.style.transform = 'translateX(-140px)'

      // After a delay of 5 seconds, perform the following actions to simulate the sliding effect.
      setTimeout(() => {
        // Get a reference to the first slide and remove it.
        var item = this.$refs.inner.querySelector('.brand')
        item.remove()

        // Reset the slider's position and append the removed slide to the end.
        this.slider_inner.style.transform = 'translateX(0px)'
        this.slider_inner.append(item)

        // Temporarily disable transitions for a smooth reset.
        this.slider_inner.style.transition = 'none'
        this.slider_inner.offsetHeight // Force a reflow to apply the transition reset.
        this.slider_inner.style.transition = null // Re-enable transitions.

        // Recursively call the moveSlider method to continue the sliding effect.
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
