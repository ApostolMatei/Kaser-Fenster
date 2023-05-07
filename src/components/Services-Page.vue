<template>
    
  <div class="pager">
    <div class="pagerbox">
    <h3>Services</h3>
    <div class="pages">
    <router-link to="/">Home /</router-link>
    <span>Services</span></div>
  </div>
</div>
  <div class="services-container">
    <div class="services">
        <div class="service" v-for="service in services" :key="service" >
            <img :src="service.img" >
            <h2>{{ service.name }}</h2>
            <span></span>
            <p>{{ service.text }}</p>
        </div>
        <div class="contact-now">
            <h3>Brauchen Sie Hilfe?</h3>
            <p>Unsere Firma ist spezialisiert auf die Reparatur und Wartung von Fenstern aller Arten. Mit unserem Know-how und unseren qualitativ hochwertigen Materialien stellen wir sicher, dass Ihre Fenster schnell und zuverlässig repariert werden, damit Sie sich wieder sicher und komfortabel in Ihrem Zuhause oder Büro fühlen können.</p>
            <routerLink to="/">CONTACT NOW</routerLink>
        </div>
        

    </div>
    <div class="contact-testimonials-container">
        <div class="contact-now">
            <h3>Brauchen Sie Hilfe?</h3>
            <p>Unsere Firma ist spezialisiert auf die Reparatur und Wartung von Fenstern aller Arten. Mit unserem Know-how und unseren qualitativ hochwertigen Materialien stellen wir sicher, dass Ihre Fenster schnell und zuverlässig repariert werden, damit Sie sich wieder sicher und komfortabel in Ihrem Zuhause oder Büro fühlen können.</p>
            <routerLink to="/">CONTACT NOW</routerLink>
        </div>
        <div class="services-testimonial"></div>

    </div>
  </div>


    
</template>


<script>
export default {
    data() {
    return {
        services: [
       { 
        img: "/dani.jpg" ,
        name: 'Persönliche Beratung ' ,
        text: 'Unsere persönliche Beratung bietet maßgeschneiderte Lösungen, die auf Ihre individuellen Anforderungen zugeschnitten sind, um Ihnen die bestmögliche Unterstützung zu bieten.'

       },
       { 
        img: "/dani.jpg" ,
        name: 'Planung ' ,
        text: 'Unsere Planung umfasst eine gründliche Analyse Ihrer Anforderungen und sorgfältige Berücksichtigung aller Aspekte Ihres Projekts, um Ihre Vision vollständig umzusetzen.'
       },
       { 
        img: "/dani.jpg" ,
        name: 'Angebotsvergleich ' ,
        text: 'Wir helfen Ihnen dabei, das beste Angebot für Ihre Bedürfnisse zu finden, indem wir eine gründliche Analyse der verfügbaren Optionen durchführen.'
       },
       { 
        img: "/dani.jpg" ,
        name: 'Vermessung' ,
        text: 'Unsere Vermessungsleistungen umfassen eine genaue Aufnahme aller Gegebenheiten vor Ort für eine optimale Planung und Ausführung Ihres Projekts.'
       },
       { 
        img: "/dani.jpg" ,
        name: 'Reparaturservice' ,
        text: 'In unseren Reparaturservices bieten wir schnelle und zuverlässige Lösungen für Probleme rund um Ihr Zuhause, um eine optimale Funktionalität zu gewährleisten.'
       },
       { 
        img: "/dani.jpg" ,
        name: 'Montageservice' ,
        text: 'Unser Montageservice umfasst eine schnelle und professionelle Installation aller Produkte, um sicherzustellen, dass Ihr Projekt pünktlich und ordnungsgemäß abgeschlossen wird.'
       },
       { 
        img: "/dani.jpg" ,
        name: 'Endbearbeitungen' ,
        text: 'Unsere Endbearbeitungen umfassen professionelle Reinigung, Lackierarbeiten und Dekorationen, um sicherzustellen, dass Ihr Projekt perfekt abgeschlossen wird.'
       },
       { 
        img: "/dani.jpg" ,
        name: 'Wartungsarbeiten' ,
        text: 'Wir bieten umfassende Wartungsdienstleistungen, um sicherzustellen, dass Ihre Installationen stets einwandfrei funktionieren und eine lange Lebensdauer haben.'
       },
       { 
        img: "/dani.jpg" ,
        name: 'Saisonabhängige Arbeiten' ,
        text: 'Saisonabhängige Arbeiten" können von uns professionell und zuverlässig durchgeführt werden, um sicherzustellen, dass Ihr Zuhause jederzeit in optimaler Form ist.'
       },
       
            
        ]

    }
}
}

</script>


<style scoped lang="scss">
.pagerbox , .services-container {
  max-width: 1260px;
  margin: 0 auto;
}
.pager {
  // display: flex;
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
img {
 object-position: top;
  object-fit: cover;
  height: auto;
  aspect-ratio: 16/9;
  max-width: 100%;
  width: 400px;
  
}

.services-container {
  display: flex;
  // grid-template-columns: 1fr 1fr;
  // flex-direction: column;
 
  justify-content: center; /* add this */
  // align-items: center; /* add this */
  // margin: 0 auto;
  padding: 60px 34px;
  gap: 70px;
  // @media screen and (max-width: 1000px) {
  //   display: flex;
    
  // }
  
  
}

.services {
  display:grid;
  // flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill , minmax(300px , 1fr));
  gap:50px;
  width: 100%;
  
  justify-items: center;
  // justify-content: center;
  // align-items: center;
  // @media screen and (max-width: 1000px) {
  //   display: flex;
  //   flex-wrap: wrap;
  // }
  @media screen and (min-width: 1000px) {
    & .contact-now {
    display: none;
  }
  }
  .service {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    
    h2 {
      font-weight: 800;
    }
    
    img {
      padding-bottom: 15px;
    }
    span {
     height: 3.2px;
     width: 20px;
     border-radius: 10px;
     background-color: rgb(255, 171, 3);
      
    }
    p {
      font-weight: 550;
      max-width: 360px;
      line-height: 30px;
    }
    
  }
}
.contact-grid {
  display: none;
}
.contact-testimonials-container {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  width: clamp(200px ,90% , 460px);
  // width: minmax(260px , 330px);
  font-size: 21px;
  color: rgb(14, 13, 13);
  @media screen and (max-width: 1000px) {
    display: none;
    
  }
 
  
}
.contact-now {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content:center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  // ali
  padding: 30px 20px;
  gap: 50px;
  background-color: rgb(255, 235, 14);
h3 {
  font-weight: 800;
}
  p {
    font-weight: 600;
  }

  
  a {
   color: white;
    display: inline-block;
    box-sizing: border-box;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    padding: 15px 25px;
    width: 162px;
    background-color: black;
    
  }

   
  
 
}
</style>