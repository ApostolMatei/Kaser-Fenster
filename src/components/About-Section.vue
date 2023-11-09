<template>
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
      <router-link to="/ueber-uns">Mehr</router-link>
    </div>
  </div>
</template>

<style lang="scss">
//
.aboutus-section {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 170px 25px;
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
  }
}
</style>
