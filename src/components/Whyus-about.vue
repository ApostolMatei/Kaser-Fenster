<template>
  <div class="aboutus-section" ref="about">
    <img src="/window1.jpg" alt="windows " width="500">
    <div class="aboutus">
      <div>
        <span>Why We/Us</span>
        <h2>ABOUT US</h2>
      </div>
      <p>
        Seit über 15 Jahren sind wir im Bereich Fenster-, Tür-, Sonnenschutzsysteme sowie
Einbruchschutz etabliert. Profitieren Sie somit von unserer langjährigen Erfahrung und
dem direkten Kontakt zu allen gängigen Herstellern. Unser Slogan ist für uns Programm.
Unser Wissen ist Ihr Vorteil. Wir planen für Sie und mit Ihnen.
Somit ermöglichen wir Ihnen freies Gestalten und setzen Ihre Wünsche mit qualitativ
hochwertigen Produkten für Ihr Zuhause um.
      </p>
      <a href="/">More</a>
    </div>

    <!-- <div class="quote">
      <div class="headerbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
          <path fill="currentColor" d="m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z" />
        </svg>
        <span>REQUEST A QUOTE</span>
      </div>
      <div class="inputbox">
        <div class="inputs"><input type="text" placeholder="Your Name" /></div>
        <div class="inputs"><input type="text" placeholder="Email" /></div>
        <div class="inputs"><input type="text" placeholder="Phone number" /></div>
        <textarea
          name="The job"
          id="thejobtextarea"
          cols="20"
          rows="4"
          placeholder="The job"
        ></textarea>
        <button>SUBMIT ENQUIRY</button>
      </div>
    </div> -->
  </div>
  <div class="service-section">
    <div class="ourservice">
      <div class="title">
        <span>What We Do</span>
        <h2>Our Services</h2>
      </div>
      <p>
        Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolo sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </p>
      <a href="/">More</a>
    </div>
    <div class="services">
      <div class="service" v-for="(service, index) in services" :key="index">
        {{ service.service }}
      </div>
    </div>
  </div>

  <div class="whyus-section">
    <div class="whyus">
      <h2>WHY CHOOSE US</h2>
      <div class="talents">
        <div class="talent">
          <div class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M15.98 8.17l-.97 5.95C14.84 15.5 13.13 16 12 16H5.69c-.2 0-.38-.05-.53-.14L3.72 15H2c-1.06 0-2-.94-2-2V9c0-1.06.94-2.02 2-2h2c.91 0 1.39-.45 2.39-1.55c.91-1 .88-1.8.63-3.27c-.08-.5.06-1 .42-1.42C7.83.29 8.42 0 9 0c1.83 0 3 3.71 3 5.01l-.02.98h2.04c1.16 0 1.95.8 1.98 1.97c0 .11-.02.21-.02.21zm-1.97-1.19h-1.99c-.7 0-1.03-.28-1.03-.97l.03-1.03c0-1.27-1.17-4-2-4c-.5 0-1.08.5-1 1c.25 1.58.34 2.78-.89 4.14C6.11 7.25 5.36 8 4 8v6l1.67 1H12c.73 0 1.95-.31 2-1l.02-.02l1-6c-.03-.64-.38-1-1-1h-.01z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="text">
            <h3>Erfahren und Professionell</h3>
            <p>Unser Team von Experten verfügt über jahrelange Erfahrung in der Reparatur und Installation von Fenstern, Türen und Rollen. Wir legen Wert auf Professionalität und eine akkurate Arbeitsweise.</p>
          </div>
        </div>
        <div class="talent">
          <div class="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
              width="32px"
              height="32px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div class="text">
            <h3>Qualitätsprodukte</h3>
            <p>Wir verwenden ausschließlich hochwertige Materialien und Produkte für unsere Reparaturen und Installationen. Sie können sicher sein, dass Ihr Zuhause oder Ihr Unternehmen mit erstklassigen Produkten ausgestattet wird, die jahrelang halten werden.</p>
          </div>
        </div>
        <div class="talent">
          <div class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M6.535 3.25a1.75 1.75 0 0 0-1.456.78L1.49 9.412c-.219.33-.245.752-.068 1.106A32.952 32.952 0 0 0 9.45 20.8l1.75 1.501a1.23 1.23 0 0 0 1.601 0l1.75-1.5a32.951 32.951 0 0 0 8.029-10.283c.177-.354.15-.776-.069-1.106L18.92 4.03a1.75 1.75 0 0 0-1.455-.779H6.535Zm-.208 1.611a.25.25 0 0 1 .208-.111h2.34L6.96 9.346a1.75 1.75 0 0 0-.1.326a69.284 69.284 0 0 1-2.11-.19l-1.405-.147L6.327 4.86ZM3.28 10.836a31.45 31.45 0 0 0 6.994 8.695l-3.125-8.334a70.78 70.78 0 0 1-2.554-.222l-1.315-.139Zm5.506.454L12 19.864l3.215-8.574a70.793 70.793 0 0 1-6.43 0Zm8.067-.093l-3.125 8.334a31.45 31.45 0 0 0 6.994-8.695l-1.315.139c-.85.089-1.701.163-2.554.222Zm3.803-1.862l-1.406.148a69.27 69.27 0 0 1-2.11.19a1.747 1.747 0 0 0-.099-.327L15.125 4.75h2.34a.25.25 0 0 1 .208.111l2.982 4.474Zm-5.063.435c-2.393.124-4.79.124-7.184 0L10.5 4.75h3l2.092 5.02Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="text">
            <h3>Kundenzufriedenheit</h3>
            <p>Wir sind bestrebt, sicherzustellen, dass unsere Kunden zu 100% mit unseren Dienstleistungen zufrieden sind. Vom Anfang bis zum Ende bemühen wir uns, Erwartungen zu übertreffen und sicherzustellen, dass jeder Auftrag perfekt abgeschlossen wird.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <div class="brands" ref="slider" @click="muian">
      <div class="inner"   ref="inner">
        
          <img width="200" height="150" class="brand"   v-for="brand in brands" :key="brand" :src="brand.src" />
        
      </div>
    </div>
  
  <div class="testimonials-section" ref="testimonials">
    
      <div class="title">
        <span>Testimonials</span>
        <h2>What our clients say about us</h2>
      </div>
      <div class="reviewsbox"  ref="reviewbox" >
        <button type="button" class="prev">1</button>
       <button type="button" class="next">2</button>
        <div class="review-inner" ref="review" >
       
        
             
            <div class="review"  v-for="(review, key) in reviews"    :key="key" >
              <span class="quote">
              <img src="/quote.svg" alt="quote">
             </span>
             
            <p>{{ review.quote }}</p>
         
            <div class="customer">
              <img :src="review.image" alt="customer-image">
              <div class="customer-info">
                <h3>{{ review.name }}</h3>
                <span>Kaser Customer</span>
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
      reviewsGap: "40px",
      brandsGap: "20px" ,
      brandsSpeed: "5s" ,
     

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
      brands: [
        // { src: '/shuco.svg' },
        { src: '/saint.svg' },
        // { src: '/trocal.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        { src: '/siegenia.svg' },
        // { src: '/veka.svg' },
        // { src: '/roto.svg' },
        { src: '/velux.svg' },
        // { src: '/wink.svg' },
        { src: '/abus.svg' },
        
      ],
      reviews: [
           {
             name: 'Sabine Schmidt', 
             quote: "Ich bin sehr zufrieden mit dem Service von dieser Firma. Die Reparatur meiner Fenster wurde schnell und professionell durchgeführt."
             ,image: '/dani.jpg' , 
        },

       {name: 'Thomas Mayer',
         quote: "Ich hatte Probleme mit meinen Türen und war beeindruckt von der schnellen und effizienten Reparatur durch das Team. Sehr empfehlenswert!"
        ,image: '/dani.jpg' , }
  
  ,
           { 
            name: 'Sandra Weber',
             quote: "Die Rollen meiner Schiebetür waren schon lange defekt, aber das Team von dieser Firma konnte das Problem schnell beheben. Vielen Dank!"
             ,image: '/dani.jpg' , 
        },
       {name: 'Stefan Müller',
         quote: "Ich war begeistert von der Qualität der Produkte, die für die Installation meiner neuen Fenster verwendet wurden. Sie sehen toll aus und sind auch energieeffizient."
      , image: '/dani.jpg'},
  
    
          {
             name: 'Julia Bauer',
              quote: "Der Kundenservice war ausgezeichnet und das Team war sehr freundlich und hilfsbereit bei allen Fragen, die ich hatte. Ich würde sie jedem empfehlen!"
              , image: '/dani.jpg'
        },
       {name: 'Michaela Fischer',
         quote: "Ich hatte eine Notfallsituation mit meinen Türen und das Team von dieser Firma kam sofort zur Hilfe. Sie waren professionell, zuverlässig und haben das Problem schnell gelöst."
        ,image: '/dani.jpg'  },

        
        
      ]
    }
  },

  mounted() {

    //Vars
    this.slider_inner = this.$refs.inner;
    this.slides = this.$refs.inner.querySelectorAll(".brand");

    //Slider
    this.slide_width = this.slides[0].getBoundingClientRect().width;
    this.slide_distance = this.slide_width + parseInt(this.brandsGap)
    
    
    //Start Moving 
    this.moveSlider();

                   // Reviews //
    //Vars
    this.reviews_inner = this.$refs.review;
     
    this.reviewbox_width = this.$refs.reviewbox.getBoundingClientRect().width;
    // Add an event listener to the window resize event

  window.addEventListener('resize', this.handleResize);


   console.log(  this.reviewbox_width);
    
    //Start Moving 
    this.moveReviews();
  
  },
  beforeUnmount() {
  window.removeEventListener('resize', this.handleResize);
},
 

  methods: {
    handleResize() {
      this.reviewbox_width = this.$refs.reviewbox.getBoundingClientRect().width;
      this.reviews_inner.style.transform = "translateX(0px)";
    },
   
     moveSlider() { 
     
      this.slider_inner.style.transform =
        "translateX(-150px)";
      setTimeout(() => {
        var item = this.$refs.inner.querySelector(".brand");
        item.remove();
        this.slider_inner.style.transform = "translateX(0px)";
        this.slider_inner.append(item);
        this.slider_inner.style.transition = "none";
        this.slider_inner.offsetHeight;
        this.slider_inner.style.transition = null;
        this.moveSlider()
      },   5000);
    
        
    },
     moveReviews() { 
    if (this.reviewbox_width < 900) {
         this.reviews_inner.style.transform = `translateX(-${this.reviewbox_width + 10}px)`;

        } else {
          this.reviews_inner.style.transform = `translateX(-${this.reviewbox_width + 30}px)`;
        }
 
      setTimeout(() => {
        
        var thing = this.$refs.review.querySelector(".review");
        thing.remove();
         this.reviews_inner.append(thing);
       

  this.reviews_inner.style.transform = "translateX(0px)";

       
        this.reviews_inner.style.transition = "none";
        this.reviews_inner.offsetHeight;
        this.reviews_inner.style.transition = null;
        this.moveReviews()
      },   5000);
    
        
    },
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
    p{
      // font-weight: 400;
      
    }
  }
  
}
.whyus-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 25px;
  

  .whyus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    // padding: 20px;

    h2 {
      font-weight: 00;
      text-align: center;
    }
    h3 {
      color: #fed991;
    }
    p {
      // max-height: 56px;

      text-align: center;
    }
    .svg {
      display: flex;
      padding: 20px;

      // background-color: rgb(248, 188, 76);
      border-radius: 50%;
    }
    svg {
      width: 60px;
      height: 60px;
      min-width: 26px;
      color: #fed991;
    }
    .talents {
      display: flex;
      gap: 20px;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
    }
    .talent {
      // background-color: rgb(217, 213, 207);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      // height: 250px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      // width: 100%;
      gap: 45px;
      //   align-items: center;
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
      align-items: center;

      gap: 10px;
      // padding: 20px 50px;
    }
  }
}


  .brands {
    $gap: 20px;
  $speed: 5s;
  

  background-color: rgb(240, 232, 8);
    overflow: hidden;
    
    padding: 40px 0;

    // width: 800px;
  
  
  // justify-content: space-evenly;
  img{
    // flex-shrink: 0;
    color: white;
  margin-right: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // width: 200px;
  height: 100%;
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
    width: 130px;
  }
}

.testimonials-section {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
    gap: 30px;
    padding: 60px;
}
.reviewsbox {
 
  display: flex;
  // flex-wrap: wrap;
  overflow: hidden;
  box-sizing: border-box;
  // padding: 50px;
  width: 1150px;
  
  .prev {
    border: none;
    position: absolute;
    top: 54%;
    left: 5%;
    z-index: 3;
    padding: 10px 20px;
    transform: translateX(-20px);
    cursor: pointer;


  }
  .next {
    position: absolute;
    top: 54%;
    z-index: 3;
    right: 3%;
    border: none;
    padding: 10px 20px;
    background-image: url(path/to/your/arrow.svg);
    cursor: pointer;
  background-repeat: no-repeat;
  background-position: center right 10px;
  background-size: 10px;
  background-origin: content-box;


  }

  @media screen and (max-width: 1170px) {
    width: 900px;
  }
  @media screen and (max-width: 1000px) {
    width: clamp(270px ,90% ,900px);
  }
 

  .review-inner {
    display: flex;
    // grid-template-columns: repeat(6 , 1fr);
    width: 100%;
    // overflow: hidden;
    gap: 40px;
    padding: 150px 10px;
    @media screen and (max-width: 1000px) {
      padding: 60px 10px 120px 10px;
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
      border: 10px solid #e8eaed;
      // height: 250px;
      // width: 490px;
      padding: 0 18px;
      z-index: 2;

      @media  screen and (min-width:1000px) {
        width: calc(50% - 25px );
      }
      

      &::before {
       
    // display: block;
    content: "";
    position: absolute;
    bottom: -38px;
    left: 18%;
    z-index: 0;
    // border-radius: 500px;
    // width: 50px;
    // height: 50px;
    border-top: 35px solid #e8eaed;
      border-right: 35px solid transparent;
    // background-color: #e8eaed;
    // transform: skew(50deg);
        
      }
      
      
     p {
      color: black;
      font-family: roboto;
      padding: 50px 20px;
      font-size: 22px;
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
      padding: 0 10px ;
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
      
      transform: translateY(115px);
      // padding-left:6px ;
      gap: 30px;
      img {
        height: 65px;
        width: 65px;
        border-radius: 50%;
      }
      .customer-info {
        display: grid;
        gap: 7px;
      }
     }

    }
}
</style>
