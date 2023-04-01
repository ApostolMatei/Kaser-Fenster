<template>
  <div class="aboutus-section">
    <div class="about-image"></div>
    <div class="aboutus">
      <div>
        <span>Why We/Us</span>
        <h2>ABOUT US</h2>
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
            <h3>Reliability</h3>
            <p>Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
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
            <h3>Reliability</h3>
            <p>Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
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
            <h3>Reliability</h3>
            <p>Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <div class="brands" ref="slider" @click="muian">
      <div class="inner"   ref="inner">
        
          <img class="brand"   v-for="brand in brands" :key="brand" :src="brand.src" />
        
      </div>
    </div>
  
  <div class="testimonials-section" ref="testimonials">
    
      <div class="title">
        <span>Testimonials</span>
        <h2>What our clients say about us</h2>
      </div>
      <div class="reviewsbox"   ref="reviews">
        <div class="reviews" ref="review" :style="{transform: 'translateX('+ -reviewDistance +'px'}"  v-for="(reviewObj, index) in reviews" :key="index" >
         
            <div class="review" v-for="(review, key) in reviewObj" :key="key" >
            <p>{{ review.name }}</p></div>
          </div>
        
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Whyus-about',

  data() {
    return {

        reviewDistance: 0,
      reviewMoving: false , 
     reviewsWidth: 200 + "px",
      reviewsGap: 20 +"px",
      brandsWidth: 200 + "px",
      brandsGap: "20px",
      brandsSpeed: "5s" ,
      innerWidth: 0 ,

      

      services: [
        { service: 'Persönliche Beratung' },
        { service: 'Planung' },
        { service: 'Angebotsvergleich' },
        { service: 'Vermessung' },

        { service: 'Reparaturservice' },
        { service: 'Montageservice' },
        { service: 'Endbearbeitungen' },
        { service: 'Wartungsarbeiten' },
        { service: 'Saisonabhängige Arbeiten' }
      ],
      brands: [
        { src: '/shuco.svg' },
        { src: '/saint.svg' },
        { src: '/trocal.svg' },
        { src: '/siegenia.svg' },
        { src: '/veka.svg' },
        { src: '/roto.svg' },
        { src: '/velux.svg' },
        { src: '/wink.svg' },
        { src: '/abus.svg' },
        
      ],
      reviews: [
        { review1:
           {
             name: '1', quote: "Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utdat dolore magna aliqua.Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed"
        },

        review2: {name: '2', quote: "Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utdat dolore magna aliqua.Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed"}
      },
        { review1:
           { 
            name: '3', quote: "Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utdat dolore magna aliqua.Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed"
        },
        review2: {name: '4 ', quote: "Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utdat dolore magna aliqua.Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed"}
      
      },
        { review1: 
          {
             name: '5', quote: "Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utdat dolore magna aliqua.Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed"
        },
        review2: {name: '6', quote: "Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utdat dolore magna aliqua.Lorem ipsum dolo sit amet, consectetur adipisicing elit, sed"}
      },
        
      ]
    }
  },

  mounted() {
    this.$nextTick(() => {
    //Vars
    this.slider = this.$refs.slider;
    this.slider_inner = this.$refs.inner;
    this.slides = this.$refs.inner.querySelectorAll(".brand");

    //Slider
    this.slide_count = this.slides.length;
    this.slide_width = this.slides[0].getBoundingClientRect().width;
    this.slide_distance = this.slide_width + parseInt(this.brandsGap);

    //Start Moving Bitch
    this.moveSlider();
    this.moveReviews();
  });
  },

  methods: {
    muian() {
      // let reviews = this.$refs.reviews.querySelectorAll(".review");
      // let reviewSize = reviews[1].getBoundingClientRect().width;
     let slider = this.$refs.reviews.style.setProperty('--transform', '0');
    //   var gap = parseInt(getComputedStyle(slider).getPropertyValue("--transform"));
     console.log(slider)
    
   
      
},
    

    moveReviews() {
      let reviews = this.$refs.reviews.querySelectorAll(".reviews");
        let reviewSize = reviews[1].getBoundingClientRect().width;
      let distance = reviewSize * 2 + 38 * 2 ;
      // this.reviewMoving = !this.reviewMoving
     this.reviewDistance = distance;
    // this.$refs.reviews.style.transform = `translateX(-${this.distance})`;
    
      
      setTimeout(() => {
        // this.$refs.reviews.classList.remove("reviewmoving")
        // this.$refs.reviews.style.transform = 'translateX(0)';
        reviews.forEach((reviews) => {
    reviews.style.transform = 'translateX(0)';
  });
        let item = this.reviews.shift()
        this.reviewDistance = 0
     this.reviews.push(item)
        this.$refs.reviews.offsetHeight
       
     
    this.moveReviews()
    
    
  },  5000);


         
    
  
    },
    

    moveSlider() { 
      
      console.log(parseInt(this.speed));

      this.slider_inner.style.transform =
        "translateX(-" + this.slide_distance + "px)";
      setTimeout(() => {
        var item = this.$refs.inner.querySelector(".brand");
        item.remove();
        this.slider_inner.style.transform = "translateX(0px)";
        this.slider_inner.append(item);
        this.slider_inner.style.transition = "none";
        this.slider_inner.offsetHeight;
        this.slider_inner.style.transition = null;
        this.moveSlider();
      },   5000);
        
        
    
    
    
  
      
      
   
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
  justify-content: space-around;
  padding: 75px 50px;
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

    width: 490px;
    flex-wrap: wrap;

    @media screen and (max-width: 550px) {
      flex-direction: column;
      //  width: 100%;
    }
    .service {
      border: 2px solid black;
      box-shadow: 5px 5px 0px 0px rgba(51, 51, 51, 1);
      padding: 10px;
      max-height: 20px;
      @media screen and (max-width: 550px) {
        // width: 100%;
      }
    }
  }
}

.ourservice {
  display: flex;
  flex-direction: column;
  // justify-content: center;

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
  //   align-items: center;
  justify-content: space-around;
  padding: 75px 50px;
  gap: 70px;
  @media screen and (max-width: 770px) {
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
  }
  .about-image {
    background-image: url(/window1.jpg);
    height: 400px;
    width: 450px;
    background-size: cover;
    background-position: center;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  //   .quote {
  //     // width: clampReversed(550px, 10%, 350px);
  //     width: 350px;
  //     @media screen and (max-width: 770px) {
  //       width: 100%;
  //       max-width: 400px;
  //     }
  //   }
  //   .headerbox {
  //     display: flex;
  //     align-items: center;
  //     // justify-content: center;
  //     color: rgb(7, 6, 6);
  //     gap: 10px;
  //     background-color: rgb(229, 190, 118);
  //     padding: 12px;
  //   }
  //   .inputbox {
  //     display: flex;
  //     flex-direction: column;
  //     background-color: rgb(248, 248, 248);
  //     padding: 20px 20px;
  //     // width: 300px;
  //     gap: 20px;
  //     // justify-content: space-around;
  //     // justify-content: center;
  //     // align-items: center;
  //     // transform: translateY(-66%);
  //     button {
  //       border: none;
  //       background-color: black;
  //       width: 200px;
  //       padding: 15px 0;
  //       color: white;
  //       align-self: center;
  //       justify-self: center;
  //     }
  //     .inputs {
  //       border-bottom: 1px solid gray;
  //       padding-bottom: 5px;
  //       input {
  //         border: 0;
  //         background-color: rgb(248, 248, 248);
  //       }
  //     }
  //     textarea {
  //       border: 1px solid gray;
  //       resize: none;
  //       box-sizing: border-box;
  //       padding: 5px;
  //       outline: none;
  //       background-color: rgb(248, 248, 248);
  //     }
  //   }
}
.whyus-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 35px;

  .whyus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    padding: 20px;

    h2 {
      font-weight: 800;
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
  

  background-color: rgb(44, 41, 41);
    overflow: hidden;
    
    padding: 40px 0;

    // width: 800px;
  
  
  // justify-content: space-evenly;
  img{
    // flex-shrink: 0;
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
    width: 200px;
  }
}

.testimonials-section {
  display: flex;
  // justify-content: spac;
  align-items: center;
  
  background-color: aliceblue;
  flex-direction: column;
    // justify-content: center;
    gap: 30px;
    padding: 60px;
 
  
}
.reviewsbox {


  display: flex;
  overflow: hidden;
 padding: 20px ;
 gap: 40px;
 width: 1080px;
 
//  height: 100%;



  .reviews {
    display: flex;
    justify-content: center;
    // flex-wrap: wrap;
    gap: 40px;

transition: transform 1s ease;
    background-color: rgb(249, 251, 251);
  
    // width: 1100px;
   

  }
  // .inner-reviews{
  //   display: flex;
  // // transform: translate(-850px);
  //   justify-content: space-around;
  //   gap: 70px;
  //   // transform: translateX(-20%);
  //   // padding: 0 20px;
  
  // }
  .review {
    display: flex;
      // max-width: 390px;
     
      // background-color: rgb(215, 35, 35);
      // display: flex;
      gap: 50px;
      border: 20px solid rgb(168, 167, 167);
      // flex-direction: column;
      // align-items: center;
      // justify-content: center;
      padding: 105px 230px ;
     
      
     p {
      font-family: roboto;
     
      font-size: 25px;
      max-width: 383px;
      line-height: 30px;
      
     }
      

      // gap: 20px;
      //   align-items: center;
    }
}
</style>
