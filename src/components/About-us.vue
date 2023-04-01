<template style="color:black;">
<main>
 <div class="intro">
  <span class="title">We build bridges between <span class="gray">  companies and customers</span></span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime magnam aperiam quaerat incidunt autem reprehenderit iste unde, vitae sed quis amet, deleniti id, vel ea neque. Tenetur, voluptas architecto.</p>
 </div>
 <img src="/office.jpg" class="officeimg" alt="office">
 <div class="whoweare">
 <div class="section">
  <h2>Together we are strong</h2>
  <div class="abouttext">
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatibus consequatur! Laboriosam sint itaque, quisquam quo nobis odit vel aut ipsum impedit modi dignissimos exercitationem officiis molestias, nam sequi velit?</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vitae porro consequatur repudiandae voluptatum sed! Nostrum architecto cupiditate ullam repudiandae dolorem ipsam modi dolor maiores ea aspernatur debitis, laudantium dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus magnam reprehenderit exercitationem porro harum possimus eius veniam qui? Nam culpa natus quos eligendi vel, reiciendis minus recusandae odio voluptas.</p>
  </div>
 </div>
 <div class="section">
  <div class="ceo">
    <img class="dumitru" src="/dani.jpg" alt="ceo">
    <div class="name">
      <span class="ceoname">Dumitru Ionita</span>
      <p>Founder & CEO</p>
    </div>
  </div>
  <div class="abouttext">
   <p class="goal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam sapiente obcaecati qui eligendi a rem aspernatur ipsum autem error? Necessitatibus a saepe iusto ipsam obcaecati enim qui voluptas ad!</p>
  </div>
  
 </div>
</div>
<div class="projects">
  <div class="box">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat laborum </p>
    <span>{{ theProjects }}+</span>
  </div>
  <div class="box">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat laborum </p>
    <span>{{theYears}}+</span>
  </div>
  <div class="box">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat laborum </p>
    <span>{{happyCustomers}}+</span>
  </div>
</div>
 </main>
</template>
<script>
export default {
  name: "About-us",
  data() {
        return {
       theProjects: 0 ,
       theYears:0 , 
       happyCustomers:0
      
        }
  },


  mounted() {
    this.projects()
    this.years()
    this.happy()
  
  },

methods: {
 
  projects() {
    if (this.theProjects >= 290 ) return;
    setTimeout( () => {
      this.theProjects++;
    this.projects()
     } , 10  )
    
  },
  years() {
    if (this.theYears >= 12 ) return;
    setTimeout( () => {
      this.theYears++;
    this.years()
     } , 250 )
    
  },
  happy() {
    if (this.happyCustomers >= 350 ) return;
    setTimeout( () => {
      this.happyCustomers++;
    this.happy()
     } , 8  )
    
  }

 


}



}

</script>
<style scoped lang="scss">

.intro , .whoweare , .projects {
  max-width: 1250px;
margin: 0 auto;
}
.intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  // justify-items: center;
  padding: 80px 30px;
  // align-self: center;
 
 
 
 span{
  font-size: 50px;
 }
 p {
  max-width: 500px;
  justify-self: center;
  align-self: flex-end;
 }
 
  .title {
   
    max-width: 550px;
  }
}
.officeimg {
  height: 500px;
  width: 100%;
  padding-bottom: 80px;
}
.gray {
  color: gray;
 }
 .whoweare {
  position: relative;
  &::before {
    content: '';
  position: absolute;
  left: 25px;
  right: 25px;
  top: 0;
  bottom: 0;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  }
 }
 
 .section {
  display: grid;
  grid-template-columns: 1fr 50%;
  padding: 50px 30px;
  // border-top: 2px solid gray;
  box-sizing: border-box;
  // position: relative;
  
 .ceo {
  display: flex;
  gap: 20px;
 }
 .ceoname {
  font-size: 18px;
 }
 .goal {
  font-size: 35px;
  line-height: 50px;
  max-width: 450px;
 }

  p , h3 {
    max-width: 500px;
    padding-bottom: 20px;
    line-height: 23px;
  }


 }
 .dumitru {
  height: 42px;
  width:42px;
  border-radius: 50%;
 }
 .projects {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  // justify-items: center;
  // padding: 80px 0;
  .box {
    padding: 80px 30px;
  }
  
  
  p{
    max-width: 300px;
    line-height: 22px;
    padding-bottom: 10px;
    
  }
  span {
    font-size: 50px;
  }
 }


</style>
