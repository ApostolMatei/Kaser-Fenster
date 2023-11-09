<template>
  <div class="testimonials-section" ref="testimonials">
    <div class="title">
      <span>Referenzen</span>
      <h2>Was unsere Kunden sagen ?</h2>
    </div>

    <div class="reviewbox-wrapper">
      <!-- <button type="button" @click="prevButton()"  class="prev">1</button>
      <button type="button" @click="nextButton()"  class="next">2</button> -->
      <div
        class="reviewsbox"
        @mouseover="setHovered(true)"
        @mouseleave="setHovered(false), refreshReviews()"
        ref="reviewbox"
      >
        <div class="review-inner" ref="review">
          <div class="review" v-for="(review, key) in reviews" :key="key">
            <span class="quote">
              <img src="/quote.svg" alt="Review Quote" />
            </span>

            <p>{{ review.quote }}</p>

            <div class="customer">
              <img :src="review.image" :alt="'Happy Customer' + review.name" />
              <div class="customer-info">
                <h3>{{ review.name }}</h3>
                <span>Kaser Customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.testimonials-section {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 60px;
  span {
    font-family: Teko;
    font-size: 17px;
    letter-spacing: 4px;
    color: #b19777;
  }
  h2 {
    font-family: Playfair Display;
    font-size: 40px;
  }
}
.reviewbox-wrapper {
  position: relative;
  width: 1250px;
  font-family: Poppins;
  @media screen and (max-width: 1280px) {
    width: 900px;
  }
  @media screen and (max-width: 1000px) {
    width: clamp(270px, 90%, 900px);
  }
}
.prev {
  position: absolute;
  border: none;
  top: 50%;
  left: 0;
  z-index: 3;
  padding: 10px 20px;
  transform: translateX(-20px);
  cursor: pointer;
}

.next {
  position: absolute;
  top: 50%;
  z-index: 3;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-image: url(path/to/your/arrow.svg);
  cursor: pointer;
  transform: translateX(20px);
  background-repeat: no-repeat;
  background-position: center right 10px;
  background-size: 10px;
  background-origin: content-box;
}
.reviewsbox {
  display: flex;
  overflow: hidden;
  padding: 150px 0;
  box-sizing: border-box;
  width: 100%;
}
.review-inner {
  display: flex;
  width: 100%;
  gap: 40px;
  padding: 0 10px;
  @media screen and (max-width: 1000px) {
  }
  transition: transform 1.5s ease;
}

.review {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  width: calc(100% - 25px);
  position: relative;
  border: 10px solid rgb(247, 247, 247);
  padding: 0 18px;
  z-index: 2;

  @media screen and (min-width: 1000px) {
    width: calc(50% - 25px);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -38px;
    left: 18%;
    z-index: 0;
    border-top: 35px solid rgb(247, 247, 247);
    border-right: 35px solid transparent;
  }

  p {
    color: #333333;
    font-weight: 600;
    padding: 50px 20px;
    font-size: 18px;
    line-height: 30px;

    @media screen and (max-width: 1000px) {
      padding: 50px 20px;
    }
  }
  .quote {
    position: absolute;
    top: -35px;
    right: 6%;
    width: 13%;
    z-index: 2;
    padding: 0 10px;
    background-color: white;
    text-align: center;
    @media screen and (max-width: 1000px) {
      width: 50px;
    }
    img {
      width: 100%;
      max-width: 50px;

      height: auto;
      @media screen and (max-width: 1000px) {
        max-width: 50px;
      }
    }
  }
  .customer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    text-align: start;
    font-size: Poppins;
    transform: translateY(115px);

    gap: 30px;
    h3 {
      font-family: Poppins;
    }
    span {
      letter-spacing: normal;
    }

    img {
      height: 65px;
      width: 65px;
      border-radius: 50%;
      object-fit: cover;
    }
    .customer-info {
      display: grid;
      gap: 7px;
    }
  }
}
</style>
//
<script>
export default {
  data() {
    return {
      isHovered: false,
      reviews: [
        {
          name: 'Sabine Schmidt',
          quote:
            '"Ich bin sehr zufrieden mit dem Service von dieser Firma. Die Reparatur meiner Fenster wurde schnell und professionell durchgeführt."',
          image: '/sabine.avif'
        },
        {
          name: 'Thomas Mayer',
          quote:
            '"Ich hatte Probleme mit meinen Türen und war beeindruckt von der schnellen und effizienten Reparatur durch das Team. Sehr empfehlenswert!""',
          image: '/thomas.avif'
        },
        {
          name: 'Sandra Weber',
          quote:
            '"Die Rollen meiner Schiebetür waren schon lange defekt, aber das Team von dieser Firma konnte das Problem schnell beheben. Vielen Dank!""',
          image: '/sandra.avif'
        },
        {
          name: 'Stefan Müller',
          quote:
            '"Ich war begeistert von der Qualität der Produkte, die für die Installation meiner neuen Fenster verwendet wurden. Sie sehen toll aus und sind auch energieeffizient.""',
          image: '/stefan.avif'
        },
        {
          name: 'Julia Bauer',
          quote:
            '"Der Kundenservice war ausgezeichnet und das Team war sehr freundlich und hilfsbereit bei allen Fragen, die ich hatte. Ich würde sie jedem empfehlen!""',
          image: '/julia.avif'
        },
        {
          name: 'Michaela Fischer',
          quote:
            '"Ich hatte eine Notfallsituation mit meinen Türen und das Team von dieser Firma kam sofort zur Hilfe. Sie waren professionell, zuverlässig und haben das Problem schnell gelöst.""',
          image: '/michaela.avif'
        }
      ]
    }
  },
  mounted() {
    // Get references to review-related elements and set up event listeners.
    this.reviews_inner = this.$refs.review
    this.reviewbox_width = this.$refs.reviewbox.getBoundingClientRect().width
    // Add an event listener to the window resize event
    window.addEventListener('resize', this.handleResize)

    //Start Moving
    this.moveReviews()
  },
  beforeUnmount() {
    // Remove the window resize event listener to prevent memory leaks.
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    // Handle window resize events and update the review box width and position.
    handleResize() {
      this.reviewbox_width = this.$refs.reviewbox.getBoundingClientRect().width
      this.reviews_inner.style.transform = 'translateX(0px)'
    },

    // Method to move reviews horizontally within the review container.
    moveReviews() {
      if (this.isHovered === true) return

      // Determine the translation based on review box width and screen size.
      if (this.reviewbox_width < 900) {
        this.reviews_inner.style.transform = `translateX(-${this.reviewbox_width + 10}px)`
      } else {
        this.reviews_inner.style.transform = `translateX(-${this.reviewbox_width + 30}px)`
      }
      // Set a timeout to control the automatic review movement and rotation.
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        if (this.isHovered === true) return

        // Remove the first review element, reset the container position, and continue the animation.
        var thing = this.$refs.review.querySelector('.review')
        thing.remove()
        this.reviews_inner.append(thing)
        this.reviews_inner.style.transform = 'translateX(0px)'
        this.reviews_inner.style.transition = 'none'
        this.reviews_inner.offsetHeight
        this.reviews_inner.style.transition = null
        this.moveReviews()
      }, 8000)
    },
    // Method to set the "isHovered" state when the mouse hovers over the reviews.
    setHovered(value) {
      this.isHovered = value
    },
    // Method to refresh the reviews and restart the animation.
    refreshReviews() {
      clearTimeout(this.timeout)
      this.moveReviews()
    }
  }
}
</script>
