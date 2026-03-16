<template>
  <div class="pager">
    <div class="pagerbox">
      <h3>Produkte</h3>
      <div class="pages">
        <router-link to="/">Startseite /</router-link>
        <span>Produkte</span>
      </div>
    </div>
  </div>
  <div class="grid-section">
    <div class="image-box">
      <img
        height="500"
        width="500"
        src="/fenster.png"
        alt="Fenster aus Kunststoff, Kunststoff-Alu, Aluminium, Holz und Holz-Alu"
      />
    </div>
    <div class="text-section">
      <div class="text-box">
        <h3>Fenster</h3>
        <p>
          Entdecken Sie unsere Fenster aus Kunststoff, Kunststoff-Alu, Aluminium, Holz und Holz-Alu
        </p>
        <span
          >Qualitativ hochwertige Fenster in verschiedenen Materialien und Ausführungen - für mehr
          Energieeffizienz und Stil</span
        >
      </div>
    </div>
    <div id="turen" class="text-section">
      <div class="text-box">
        <h3>Türen</h3>
        <p>
          Entdecken Sie unsere Türen aus Kunststoff, Kunststoff-Alu, Aluminium, Holz und Holz-Alu.
        </p>
        <span
          >Unsere maßgefertigten Türen bieten höchste Sicherheit, Energieeffizienz und Stilvielfalt
          - perfekt für Ihr Zuhause oder Büro
        </span>
      </div>
    </div>
    <div class="image-box">
      <img
        height="500"
        width="500"
        src="/door.png"
        alt="Türen aus Kunststoff, Kunststoff-Alu, Aluminium, Holz und Holz-Alu"
      />
    </div>
    <div class="image-box">
      <img
        height="500"
        width="500"
        src="/blinds.png"
        alt="Sonnenschutzprodukte für Innen- und Außenbereich"
      />
    </div>
    <div id="schutz" class="text-section">
      <div class="text-box">
        <h3>Sonnenschutz</h3>
        <p>Entdecken Sie unsere Innen - und Außen - Sonnenschutzprodukte aus allen Materialien</p>
        <span
          >Schützen Sie Ihr Zuhause vor Sonnenstrahlen mit unseren maßgefertigten Innen- und
          Außen-Sonnenschutzlösungen in verschiedenen Materialien und Designs
        </span>
      </div>
    </div>
    <div class="text-section">
      <div class="text-box">
        <h3>Einbruchsschutz</h3>
        <p>Mehr Einbruchschutz mit wenig Aufwand - entdecken Sie jetzt!</p>
        <span
          >Unser maßgeschneidertes Einbruchschutzsystem bietet maximale Sicherheit für Ihr Zuhause
          oder Büro - mit wenig Aufwand installiert.
        </span>
      </div>
    </div>
    <div class="image-box">
      <img
        height="500"
        width="500"
        src="/security.png"
        alt="Einbruchsschutz für Ihr Zuhause oder Büro"
      />
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.pager {
  background-color: rgba(100, 100, 111, 0.2);
}

.pagerbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.grid-section {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    .image-box:nth-child(1) {
      grid-row: 2;
      grid-column: 1;
    }

    .text-section:nth-child(2) {
      grid-row: 1;
      grid-column: 1;
    }

    .text-section:nth-child(3) {
      grid-row: 3;
      grid-column: 1;
    }

    .image-box:nth-child(4) {
      grid-row: 4;
      grid-column: 1;
    }

    .image-box:nth-child(5) {
      grid-row: 6;
      grid-column: 1;
    }

    .text-section:nth-child(6) {
      grid-row: 5;
      grid-column: 1;
    }

    .text-section:nth-child(7) {
      grid-row: 7;
      grid-column: 1;
    }

    .image-box:nth-child(8) {
      grid-row: 8;
      grid-column: 1;
    }
  }
}

.image-box {
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 200px 0;
  @media screen and (max-width: 1000px) {
    padding: 100px 0;
  }
  img {
    height: auto;
    max-width: 90%;
  }
}
.text-section {
  display: grid;
  place-items: center;
  //  padding: 150px 0;
  background-color: black;
  // text-align: center;
  color: white;
  //   width: 100%;
  font-size: 10px;
  @media (max-width: 1000px) {
    padding: 70px 0;
  }
  .text-box {
    display: grid;
    flex-direction: column;
    box-sizing: border-box;
    gap: 20px;
    padding: 15px;
  }

  // padding: 250px 0;
  h3 {
    font-family: Teko;
    color: rgb(236, 198, 7);
    font-size: 5em;
  }
  p {
    font-family: Poppins;
    font-size: 2em;
    max-width: 550px;
  }
  span {
    // justify-self: center;
    color: gray;
    display: block;
    max-width: 550px;
    line-height: 25px;
    font-size: 23px;
  }
}
</style>
