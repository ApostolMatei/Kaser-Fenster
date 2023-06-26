<template style="color:black;">
<main>
  <div class="pager">
    <div class="pagerbox">
    <h3>UBER UNS</h3>
    <div class="pages">
    <router-link to="/">Home /</router-link>
    <span>Uber uns</span></div>

  </div>
</div>
 <div class="intro">
  <span class="title">Verlässlicher Partner für Ihr  <span class="gray"> Zuhause oder Unternehmen</span></span>
  <p>Unsere Mission ist es, eine Reparaturdienstleistung anzubieten, die nicht nur Fenster wiederherstellt, sondern auch langfristige Beziehungen zu unseren Kunden aufbaut und pflegt.</p>
 </div>
 <img src="/office.jpg" class="officeimg" alt="Bürogebäude">
 <div class="whoweare">
 <div class="section">
  <h2>Unser Wissen – Ihr Vorteil</h2>
  <div class="abouttext">
    <h3>Seit über 15 Jahren sind wir im Bereich Fenster-, Tür-, Sonnenschutzsysteme sowie
Einbruchschutz etabliert. Unser Wissen ist Ihr Vorteil.</h3>
    <p>Somit ermöglichen wir Ihnen freies Gestalten und setzen Ihre Wünsche mit qualitativ
hochwertigen Produkten für Ihr Zuhause um. Aufgrund unserer langjährigen Erfahrung
und dem Kontakt zu namhaften Herstellern können wir Ihnen garantieren, dass wir alle
Anforderungen für Ihr Zuhause schnell und unkompliziert umsetzen.Unser erfahrenes Team arbeitet eng mit Ihnen zusammen, um sicherzustellen, dass Ihre Anforderungen erfüllt werden und das Endprodukt genau Ihren Vorstellungen entspricht. Wir verwenden nur hochwertige Materialien und Produkte, um sicherzustellen, dass Ihre Investition in Ihr Zuhause oder Unternehmen langlebig und von höchster Qualität ist.Bei uns stehen Sie im Mittelpunkt. Wir möchten, dass Sie sich wohl und sicher fühlen, wenn Sie uns Ihre Anforderungen anvertrauen. Mit unserer Erfahrung, unserem Wissen und unserem Engagement für Qualität und Kundenservice sind wir stolz darauf, Ihr zuverlässiger Partner für Ihr Zuhause oder Unternehmen zu sein.</p>
  </div>
 </div>
 <div class="section">
  <div class="ceo">
    <img class="dumitru" src="/dani.jpg" alt="CEO Dumitru Ionita">
    <div class="name">
      <span class="ceoname">Dumitru Ionita</span>
      <p>Founder & CEO</p>
    </div>
  </div>
  <div class="abouttext">
   <p class="goal">"Unser Ziel ist es, Ihnen eine individuelle Palette an Produkten und Dienstleistungen anzubieten, um Ihre Bedürfnisse zu erfüllen. Wir glauben, dass jedes Zuhause einzigartig ist und legen daher großen Wert auf eine breite Auswahl an Optionen, um Ihre Vision zu verwirklichen."</p>
  </div>
  
 </div>
</div>
<div class="projects">
  <div class="box">
    <p>
      Eine Vielzahl erfolgreicher Projekte abgeschlossen. Kundenzufriedenheit steht im Mittelpunkt.</p>
    <span>{{ theProjects }}+</span>
  </div>
  <div class="box">
    <p>
      
Mehr als 12 Jahre Erfahrung für erfolgreiche Projekte und zufriedene Kunden.
</p>
    <span>{{theYears}}+</span>
  </div>
  <div class="box">
    <p>Unser Engagement für exzellenten Kundenservice hat zu über 350 zufriedenen Kunden geführt.</p>
    <span ref="numbers" >{{happyCustomers}}+</span>
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
     
  const options = {
    threshold: 0.5, // Adjust this value as needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start your animation here
     this.projects()
    this.years()
    this.happy()
        console.log('.projects is in the viewport');
        // Add your animation logic or class toggling code here
      }
    });
  }, options);

  const projectsElement = this.$refs.numbers;
  observer.observe(projectsElement);

    
  
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
.intro , .whoweare , .projects , .pagerbox {
  max-width: 1250px;
margin: 0 auto;
}

.pager {
 background-color: rgba(100, 100, 111, 0.2);
}
.pagerbox {
  display: flex;
  justify-content: space-between;
  
 padding: 34px;
  
  span {
    padding: 0 20px ;
  }
}


.intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  // justify-items: center;
  padding: 80px 0;
  @media screen and (max-width: 1000px) {
    grid-template-columns: none;
    justify-items: center;
    gap: 60px;
    span {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
  
 
 
 
 span{
  font-size: 55px;
  font-weight: 700;
  // text-align: center;
 }
 p {
  max-width: 500px;
  font-size: 20px;
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
  object-fit: cover;
}
.gray {
  color: gray;
 }
 .whoweare {
  position: relative;
  &::before {
    content: '';
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0;
  bottom: 0;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  }
 }
 
 .section {
  display: grid;
  grid-template-columns: 1fr 50%;
  
  padding: 50px 20px;
  // border-top: 2px solid gray;
  box-sizing: border-box;
  // position: relative;
  @media screen and (max-width: 1000px) {
    grid-template-columns: none;
    justify-items: center;
   text-align: center;
    
    gap: 50px;
  }
  
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
  // max-width: 450px;
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
  grid-template-columns: repeat(auto-fill , minmax(350px, 1fr));
  justify-items: center;
 font-weight: 600;
  p {
    color: rgb(83, 83, 83);
  }
  
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
