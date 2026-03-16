<template>
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
      <router-link to="/leistungen">Mehr</router-link>
    </div>
    <div class="services">
      <div class="service" v-for="(service, index) in services" :key="index">
        {{ service.service }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      ]
    }
  }
}
</script>

<style scoped lang="scss">
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
    }
  }
  .ourservice {
    display: flex;
    flex-direction: column;
    font-size: 24px;
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
    }
    .service {
      display: flex;
      border: 2px solid black;
      box-shadow: 5px 5px 0px 0px rgba(51, 51, 51, 1);
      padding: 10px;

      max-height: 20px;
      @media screen and (max-width: 1000px) {
        width: 90%;
        justify-content: center;
      }
    }
  }
}
</style>
