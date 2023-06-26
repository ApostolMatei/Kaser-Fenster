<template>
  <!-- <div class="brands" ref="slider" @click="muian">
    <div class="inner" ref="inner">
      <img
        
        class="brand"
        v-for="brand in brands"
        :key="brand"
        :src="brand.src"
        :alt="brand.alt"
      />
    </div>
  </div> -->
  <div class="aboutus-section" ref="about">
    <img src="/window.png" alt="Fenster - Beispielbild" width="500" />
    <div class="aboutus">
      <div>
        <span>Warum Wir</span>
        <h2>Über uns</h2>
      </div>
      <p>
        Seit über 15 Jahren sind wir im Bereich Fenster-, Tür-, Sonnenschutzsysteme sowie
        Einbruchschutz etabliert. Profitieren Sie somit von unserer langjährigen Erfahrung und dem
        direkten Kontakt zu allen gängigen Herstellern. Unser Slogan ist für uns Programm. Unser
        Wissen ist Ihr Vorteil. Wir planen für Sie und mit Ihnen. Somit ermöglichen wir Ihnen freies
        Gestalten und setzen Ihre Wünsche mit qualitativ hochwertigen Produkten für Ihr Zuhause um.
      </p>
      <a href="/">Mehr</a>
    </div>
  </div>
  <div class="service-section">
    <div class="ourservice">
      <div class="title">
        <span>Was Wir Tun</span>
        <h2>Unsere Leistungen</h2>
      </div>
      <p>
        Unsere Leistungen umfassen umfassende Einzelberatung, professionelle Planung, detaillierte
        Angebotsvergleiche, präzise Vermessungen, zuverlässigen Reparaturservice, fachgerechte
        Montagen, sorgfältige Endbearbeitungen, regelmäßige Wartungsarbeiten sowie saisonale
        Tätigkeiten. Vertrauen Sie uns für erstklassigen Service und höchste Qualität bei allen
        Ihren Fenstermontage-Bedürfnissen.
      </p>
      <a href="/">Mehr</a>
    </div>
    <div class="services">
      <div class="service" v-for="(service, index) in services" :key="index">
        {{ service.service }}
      </div>
    </div>
  </div>

  <div class="whyus-section">
    <div class="whyus">
      <div class="title">
        <span>Talente</span>
        <h2>Was sind unsere Stärken ?</h2>
      </div>
      <div class="talents">
        <div class="talent">
          <h2>01</h2>

          <h3>Professionell</h3>
          <p>
            Erfahrene Profis mit Fachwissen und höchster Präzision für herausragende Leistungen.
          </p>

          <h4>Mehr erfahren</h4>
        </div>
        <div class="talent">
          <h2>02</h2>

          <h3>Fachkompetenz</h3>
          <p>Umfassende Fachkompetenz für optimale Ergebnisse und maßgeschneiderte Lösungen.</p>

          <h4>Mehr erfahren</h4>
        </div>
        <div class="talent">
          <h2>03</h2>

          <h3>Qualitätsprodukte</h3>
          <p>Präzise gefertigt, beständig und stilvoll für herausragende Leistung und Ästhetik.</p>

          <h4>Mehr erfahren</h4>
        </div>
        <div class="talent">
          <h2>04</h2>

          <h3>Kundenzu</h3>
          <p>Wir kümmern uns um Ihre Bedürfnisse mit hervorragendem Service.</p>
          <h4>Mehr erfahren</h4>
        </div>
      </div>
    </div>
  </div>

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

<script>
export default {
  name: 'Whyus-about',

  data() {
    return {
      // Sliders data
      reviewsGap: '40px',
      brandsGap: '20px',
      brandsSpeed: '5s',
      isHovered: false,

      // Scroll-Animation data
      aboutAnimated: false,

      services: [
        { service: 'Einzelberatung' },
        { service: 'Planung' },
        { service: 'Angebotsvergleich' },
        { service: 'Vermessung' },

        { service: 'Reparaturservice' },
        { service: 'Montageservice' },
        { service: 'Endbearbeitungen' },
        { service: 'Wartungsarbeiten' },
        { service: 'Saisontätigkeiten' }
      ],
      // brands: [
      //   { src: '/schuco.png', alt: 'Schuco Logo' },
      //   { src: '/saint.png', alt: 'Saint Logo' },
      //   { src: '/trocal.png', alt: 'Trocal Logo'},
      //   { src: '/abus.png', alt: 'Abus Logo' },
      //   { src: '/roto.png' ,alt: 'Roto Logo' },
      //   { src: '/siegenia.png',alt: 'Siegenia Logo' },
      //   { src: '/veka.png', alt: 'Veka Logo' },
      //   { src: '/velux.png', alt: 'Velux Logo' },
      //   { src: '/wink.png' , alt: 'Wink Logo'},
      //   { src: '/schuco.png',  alt: 'Schuco Logo'},
      //   { src: '/saint.png', alt: 'Saint Logo' },
      //   { src: '/trocal.png' , alt: 'Trocal Logo' },
      //   { src: '/abus.png', alt: 'Abus Logo'},
      //   { src: '/roto.png' ,  alt: 'Roto Logo'},
      //   { src: '/siegenia.png', alt: 'Siegenia Logo'},
      //   { src: '/veka.png' , alt: 'Veka Logo' },
      //   { src: '/velux.png',  alt: 'Velux Logo'},
      //   { src: '/wink.png' ,  alt: 'Wink Logo'},

      // ],
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
    //Vars
    // this.slider_inner = this.$refs.inner
    // this.slides = this.$refs.inner.querySelectorAll('.brand')

    //Slider
    // this.slide_width = this.slides[0].getBoundingClientRect().width
    // this.slide_distance = this.slide_width + parseInt(this.brandsGap)

    //Start Moving

    // Reviews //
    //Vars
    this.reviews_inner = this.$refs.review

    this.reviewbox_width = this.$refs.reviewbox.getBoundingClientRect().width
    // Add an event listener to the window resize event

    window.addEventListener('resize', this.handleResize)

    console.log(this.reviewbox_width)

    //Start Moving
    this.moveReviews()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.reviewbox_width = this.$refs.reviewbox.getBoundingClientRect().width
      this.reviews_inner.style.transform = 'translateX(0px)'
    },

    moveReviews() {
      if (this.isHovered === true) return
      if (this.reviewbox_width < 900) {
        this.reviews_inner.style.transform = `translateX(-${this.reviewbox_width + 10}px)`
      } else {
        this.reviews_inner.style.transform = `translateX(-${this.reviewbox_width + 30}px)`
      }
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        if (this.isHovered === true) return

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

    setHovered(value) {
      this.isHovered = value
    },
    refreshReviews() {
      clearTimeout(this.timeout)
      this.moveReviews()
    }
  }
}
</script>

<style lang="scss" scoped>
@function clampReversed($max, $val, $min) {
  @return calc((clamp($min, $val, $max) * -1) + ($min + $max));
}
.service-section {
  display: flex;
  // grid-template-columns: 50% 50%;
  background-color: rgb(226, 226, 221);
  align-items: center;
  justify-content: space-evenly;
  padding: 170px 25px;
  gap: 70px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    max-width: 500px;
    @media screen and (max-width: 1000px) {
      // max-width: 800px;
    }
  }

  .services {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    max-width: 590px;
    width: 100%;

    flex-wrap: wrap;

    @media screen and (max-width: 550px) {
      flex-direction: column;
      //  width: 100%;
    }
    .service {
      display: flex;
      border: 2px solid black;
      box-shadow: 5px 5px 0px 0px rgba(51, 51, 51, 1);
      padding: 10px;
      //  width: 100%;
      max-height: 20px;
      @media screen and (max-width: 1000px) {
        width: 90%;
        justify-content: center;
      }
    }
  }
}

.ourservice {
  display: flex;
  flex-direction: column;
  font-size: 24px;
  // justify-content: center;
  // padding: 170px 0;

  gap: 30px;

  span {
    color: rgb(160, 155, 155);
  }
  h2 {
    font-weight: 800;
  }
  a {
    text-align: center;
    text-decoration: none;
    color: black;
    padding: 8px 0;
    max-width: 90px;
    border: 2px solid black;
  }
  // p {
  //   max-width: 350px;

  // }
}

.aboutus-section {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 170px 25px;
  // box-sizing: border-box;
  gap: 70px;
  img {
    height: auto;
    max-width: 100%;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  p {
    max-width: 500px;
    @media screen and (max-width: 1000px) {
      // max-width: 800px;
    }
  }

  .aboutus {
    display: flex;
    flex-direction: column;

    gap: 30px;
    font-size: 24px;

    span {
      color: rgb(160, 155, 155);
    }
    h2 {
      font-weight: 800;
    }
    a {
      text-align: center;
      text-decoration: none;
      color: black;
      padding: 8px 0;
      max-width: 90px;
      border: 2px solid black;
    }
    p {
      // font-weight: 400;
    }
  }
}
.whyus-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f4f3;
  // text-align: center;
  // padding: 80px 25px;
  padding: 170px 25px;
  .title {
    text-align: center;
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

  .whyus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    // padding: 20px;

    h2 {
      font-weight: 00;
      // text-align: center;
    }

    h3 {
    }

    // .svg {
    //   display: flex;
    //   padding: 20px;

    //   // background-color: rgb(248, 188, 76);
    //   border-radius: 50%;
    // }
    // svg {
    //   width: 60px;
    //   height: 60px;
    //   min-width: 26px;
    //   color: #fed991;
    // }
    .talents {
      display: flex;
      // flex-wrap: wrap;

      background-color: #ffff;
      max-width: 1140px;
      // padding: 0 50px;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
    }
    .talent {
      // background-color: rgb(217, 213, 207);
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 35px 40px;
      // height: 250px;
      border: 1px solid #eee;
      // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      // width: 100%;
      // gap: 45px;
      //   align-items: center;
      h2 {
        font-family: Teko, sans-serif;
        font-size: 60px;
        font-weight: 400;
        color: transparent;
        -webkit-text-stroke: 1px #b19777;
      }
      p {
        line-height: 2;
        font-size: 15px;
        font-weight: 400;
        color: #888;
      }
      &:hover {
        background-color: rgb(26, 24, 24);
        h3 {
          color: #ffff;
        }
        p {
          color: #eee;
        }
        h4 {
          color: #b19777;
        }
      }
    }

    // .border {
    //   border-right: 1.5px solid rgb(214, 210, 210);
    //   @media screen and (max-width: 1000px) {
    //     border-right: 0;
    //     border-bottom: 1.5px solid rgb(214, 210, 210);
    //   }
    // }

    .text {
      display: flex;
      flex-direction: column;
      // align-items: center;

      gap: 10px;
      // padding: 20px 50px;
    }
  }
}

// .brands {

//   background-color: rgb(0, 0, 0);
//   overflow: hidden;

//   padding: 25px 0;

//   // justify-content: space-evenly;
//   img {
//     // flex-shrink: 0;
//     color: white;
//     margin-right: 20px;

//     display: inline-flex;
//     justify-content: center;
//     align-items: center;
//     object-fit: contain;
//     height: 50px;
//     width: 120px;

//     aspect-ratio: 4/3;
//     // background-color: #5d5dcd;
//     font-size: 30px;
//     font-weight: bold;
//   }

//   .inner {
//     display: flex;

//     transition: transform 5s linear;
//   }
//   // .brand {

//   // }
// }

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
  // width: 100%;
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
  // position: relative;
  overflow: hidden;
  padding: 150px 0;

  box-sizing: border-box;

  width: 100%;
}
.review-inner {
  display: flex;
  // grid-template-columns: repeat(6 , 1fr);
  width: 100%;
  // overflow:50idden;
  gap: 40px;
  padding: 0 10px;
  @media screen and (max-width: 1000px) {
    // padding: 60px 10px 120px 10px;
  }
  // transform: translateX(-200px);

  transition: transform 1.5s ease;
}

.review {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;

  box-sizing: border-box;
  width: calc(100% - 25px);
  //  align-items: center;

  position: relative;
  border: 10px solid rgb(247, 247, 247);
  // height: 250px;
  // width: 490px;
  padding: 0 18px;
  z-index: 2;

  @media screen and (min-width: 1000px) {
    width: calc(50% - 25px);
  }

  &::before {
    // display: block;
    content: '';
    position: absolute;
    bottom: -38px;
    left: 18%;
    z-index: 0;
    // border-radius: 500px;
    // width: 50px;
    // height: 50px;
    border-top: 35px solid rgb(247, 247, 247);
    border-right: 35px solid transparent;
    // background-color: #e8eaed;
    // transform: skew(50deg);
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
    //  @media screen and (max-width: 1000px) {

    // //  width:  clamp(450px ,90% ,900px);

    // }
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
    // padding-left:6px ;
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
