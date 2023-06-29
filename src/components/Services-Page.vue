<template>
  <div class="pager">
    <div class="pagerbox">
      <h3>Leistungen</h3>
      <div class="pages">
        <router-link to="/">Home /</router-link>
        <span>Services</span>
      </div>
    </div>
  </div>
  <div class="services-container">
    <div class="services">
      <div class="service" v-for="service in services" :key="service">
        <img :src="service.img" :alt="service.name + ' Image'" />
        <h2>{{ service.name }}</h2>
        <span></span>
        <p>{{ service.text }}</p>
      </div>
      <div class="contact-now">
        <h3>Brauchen Sie Hilfe?</h3>
        <p>
          Unsere Firma ist spezialisiert auf die Reparatur und Wartung von Fenstern aller Arten. Mit
          unserem Know-how und unseren qualitativ hochwertigen Materialien stellen wir sicher, dass
          Ihre Fenster schnell und zuverlässig repariert werden, damit Sie sich wieder sicher und
          komfortabel in Ihrem Zuhause oder Büro fühlen können.
        </p>
        <routerLink to="/">CONTACT NOW</routerLink>
      </div>
    </div>
    <div class="contact-testimonials-container">
      <div class="contact-now">
        <h3>Brauchen Sie Hilfe?</h3>
        <p>
          Unsere Firma ist spezialisiert auf die Reparatur und Wartung von Fenstern aller Arten. Mit
          unserem Know-how und unseren qualitativ hochwertigen Materialien stellen wir sicher, dass
          Ihre Fenster schnell und zuverlässig repariert werden, damit Sie sich wieder sicher und
          komfortabel in Ihrem Zuhause oder Büro fühlen können.
        </p>
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
          img: '/plan.png',
          name: 'Persönliche Beratung ',
          text: 'Unsere persönliche Beratung bietet maßgeschneiderte Lösungen, die auf Ihre individuellen Anforderungen zugeschnitten sind, um Ihnen die bestmögliche Unterstützung zu bieten.'
        },
        {
          img: '/tech2.png',
          name: 'Planung ',
          text: 'Unsere Planung umfasst eine gründliche Analyse Ihrer Anforderungen und sorgfältige Berücksichtigung aller Aspekte Ihres Projekts, um Ihre Vision vollständig umzusetzen.'
        },
        {
          img: '/balance3.png',
          name: 'Angebotsvergleich ',
          text: 'Wir helfen Ihnen dabei, das beste Angebot für Ihre Bedürfnisse zu finden, indem wir eine gründliche Analyse der verfügbaren Optionen durchführen.'
        },
        {
          img: '/measure5.png',
          name: 'Vermessung',
          text: 'Unsere Vermessungsleistungen umfassen eine genaue Aufnahme aller Gegebenheiten vor Ort für eine optimale Planung und Ausführung Ihres Projekts.'
        },
        {
          img: '/repair.png',
          name: 'Reparaturservice',
          text: 'In unseren Reparaturservices bieten wir schnelle und zuverlässige Lösungen für Probleme rund um Ihr Zuhause, um eine optimale Funktionalität zu gewährleisten.'
        },
        {
          img: '/montage.png',
          name: 'Montageservice',
          text: 'Unser Montageservice umfasst eine schnelle und professionelle Installation aller Produkte, um sicherzustellen, dass Ihr Projekt pünktlich und ordnungsgemäß abgeschlossen wird.'
        },
        {
          img: '/finishes.png',
          name: 'Endbearbeitungen',
          text: 'Unsere Endbearbeitungen umfassen professionelle Reinigung, Lackierarbeiten und Dekorationen, um sicherzustellen, dass Ihr Projekt perfekt abgeschlossen wird.'
        },
        {
          img: '/maintanance2.png',
          name: 'Wartungsarbeiten',
          text: 'Wir bieten umfassende Wartungsdienstleistungen, um sicherzustellen, dass Ihre Installationen stets einwandfrei funktionieren und eine lange Lebensdauer haben.'
        },
        {
          img: '/season1.png',
          name: 'Saisonabhängige Arbeiten',
          text: 'Saisonabhängige Arbeiten" können von uns professionell und zuverlässig durchgeführt werden, um sicherzustellen, dass Ihr Zuhause jederzeit in optimaler Form ist.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.pagerbox,
.services-container {
  max-width: 1260px;
  margin: 0 auto;
}
.pager {
  background-color: rgba(100, 100, 111, 0.2);
}
.pager {
  background-color: rgba(100, 100, 111, 0.2);
}

.pagerbox {
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
  margin: 0 auto;
  padding: 34px;
  h3 {
    font-family: Teko;
    font-size: 23px;
  }
  a {
    text-decoration: none;
    color: rgb(67, 66, 66);
    font-family: Poppins;
    font-weight: 600;
  }
  span {
    padding: 0 20px;
    color: rgb(67, 66, 66);
    font-family: Poppins;
    font-weight: 600;
  }
}

.services-container {
  display: flex;
  justify-content: center;
  padding: 60px 34px;
  gap: 70px;
}
.services {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  width: 100%;
  justify-items: center;

  @media screen and (min-width: 1000px) {
    & .contact-now {
      display: none;
    }
  }
  .service {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 15px;
    h2 {
      font-weight: 800;
    }

    img {
      object-position: top;
      object-fit: cover;
      height: auto;
      aspect-ratio: 16/9;
      max-width: 100%;
      width: 400px;
    }
    span {
      height: 3.2px;
      width: 20px;
      border-radius: 10px;
      background-color: #fee524;
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
  width: clamp(200px, 90%, 460px);
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
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  // ali
  padding: 30px 20px;
  gap: 50px;
  background-color: #fee524;
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
