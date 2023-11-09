<template>
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
</template>

<style scoped lang="scss">
.whyus-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f4f3;
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

    h2 {
      font-weight: 00;
    }

    .talents {
      display: flex;
      background-color: #ffff;
      max-width: 1140px;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
    }
    .talent {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 35px 40px;
      border: 1px solid #eee;
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

    .text {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
//
<script></script>
