<template>
  <div class="slider">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="slide"
      :class="{
        active: currentIndex === index,
        prev: prevIndex === index,
        next: nextIndex === index
      }"
    >
      <img :src="slide.src" :alt="slide.alt" />
      <div class="info">
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
      </div>
    </div>

    <div class="navigation-visibility">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide-icon"
        :class="{ active: currentIndex === index }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: '../public/window1.jpg',
          alt: '',
          title: 'Fenster',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          src: '../public/window2.jpg',
          alt: '',
          title: 'Turen',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          src: '../public/window3.jpg',
          alt: '',
          title: 'rollen',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ],
      currentIndex: 0,
      prevIndex: null,
      nextIndex: 1
    }
  },
  methods: {
    goToPrevSlide() {
      this.prevIndex = this.currentIndex
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.slides.length - 1
      }
      this.nextIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1
    },
    goToNextSlide() {
      this.prevIndex = this.currentIndex
      this.currentIndex++
      if (this.currentIndex > this.slides.length - 1) {
        this.currentIndex = 0
      }
      this.nextIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1
    }
  },
  mounted() {
    setInterval(() => {
      this.goToNextSlide()
    }, 4000)
  }
}
</script>
<style>
.slider {
  position: relative;
  /* background: #000116; */

  height: 85vh;
  margin: 0 20px;
  /* padding: 20px; */
  overflow: hidden;
  /* border-radius: 10px; */
}

.slider .slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background-color: black;
}

.slider .slide.active {
  opacity: 1;
}

.slider .slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider .slide .info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

.slider .slide .info h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.slider .slide .info p {
  font-size: 1.2rem;
}

.slider .navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
}

.slider .navigation-visibility {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.slider .navigation-visibility .slide-icon {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 10px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.slider .navigation-visibility .slide-icon.active {
  background: #fff;
}
</style>
