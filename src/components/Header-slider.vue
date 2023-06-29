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
        <a>View Produkt</a>
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
          src: '/window1.jpg',
          alt: 'Fensterinstallation durch Fachmann',
          title: 'Fenster',
          description:
            'Unsere Fenster sind von höchster Qualität und werden von unseren erfahrenen Handwerkern fachgerecht eingebaut.'
        },
        {
          src: '/window2.jpg',
          alt: 'Mädchen mit Helm zeigt auf ein Fenster',
          title: 'Turen',
          description:
            'Mit unseren hochwertigen Türen und professioneller Installation schützen Sie Ihr Zuhause und steigern den Wert Ihrer Immobilie.'
        },
        {
          src: '/window3.jpg',
          alt: 'Mann misst den Rahmen eines Fensters',
          title: 'Rollen',
          description:
            'Our rollers meet the highest standards and ensure a smooth and quiet movement of your doors and windows.'
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
    }, 5600)
  }
}
</script>
<style lang="scss">
.slider {
  position: relative;
  z-index: -1;
  height: 80vh;
  @media screen and (max-width: 1000px) {
    height: 80vh;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%) repeat 0 0;
    z-index: 1;
  }
}

.slider .slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  // background-color: black;
}

.slider .slide.active {
  opacity: 1;
}

.slider .slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// .image-wrapper {
//   position: relative;

//   &::after {

// content: "";
// position: absolute;
// display: block;
// left: 0;
// top: 0;
// width: 100%;
// height: 100%;
// background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%) repeat 0 0;
// z-index: 1;
// }
//   }

.slide.active {
  .info {
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: transform 1s;

    h2 {
      opacity: 1;
      transition: 2s;
    }
    p,
    a {
      opacity: 1;
      transition: 2s;
      transition-delay: 0.3s;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  top: 50%;
  left: 45%;
  max-width: 1260px;
  font-family: sans-serif;
  transform: translate(-50%, 100%);
  opacity: 0;
  padding: 20px;
  z-index: 2;
  color: #fbf6f6;
  @media screen and (max-width: 1000px) {
    left: 50%;
  }
  h2 {
    opacity: 0;
    font-size: 70px;
  }
  p {
    line-height: 30px;
    opacity: 0;
    font-size: 30px;
  }
  a {
    opacity: 0;
    background: #fed991;
    color: black;
    max-width: 184px;
    text-align: center;

    padding: 10px 0;
    font-weight: 600;
    font-size: 18px;
  }
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
