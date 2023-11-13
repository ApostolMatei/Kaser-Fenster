<template>
  <div class="background">
    <div class="brands" ref="slider" @click="muian">
      <div class="inner" ref="inner">
        <div class="logos" v-for="index in 3" :key="index">
          <img
            width="120"
            height="90"
            class="brand"
            v-for="brand in brands"
            :key="brand"
            :src="brand.src"
            :alt="brand.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brands-kaser',
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
        { src: '/wink.png', alt: 'Wink Logo' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.logos {
  padding-right: var(--gap);
  display: flex;
  align-items: center;
  gap: var(--gap);
  animation: slideLeft 35s linear infinite forwards;
}

@keyframes slideLeft {
  0% {
    transform: translateZ(0);
  }

  to {
    transform: translate3d(-100%, 0, 0);
  }
}
.background {
  background-color: rgb(0, 0, 0);
}
.brands {
  --gap: 40px;
  padding: 25px 0;

  overflow: hidden;
  margin: 0 auto;
  max-width: 1600px;

  img {
    width: 120px;
    height: 90px;
    display: inline-block;
    object-fit: contain;
    aspect-ratio: 120 / 90;
    font-size: 30px;
  }

  .inner {
    padding-left: var(--gap);
    display: flex;
  }
}
</style>
