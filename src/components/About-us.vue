<template>
  <router-link to="/">back.</router-link>
  <div class="about">
    <div class="motto"><span>About us. </span><span>Our team.</span><span>Who we are.</span></div>
    <div class="text">
      <h1>About Us.</h1>
      <p>
        Seit über 15 Jahren sind wir im Bereich Fenster-, Tür-, Sonnenschutzsysteme sowie
        Einbruchschutz etabliert. Profitieren Sie somit von unserer langjährigen Erfahrung und dem
        direkten Kontakt zu allen gängigen Herstellern. Unser Slogan ist für uns Programm. Unser
        Wissen ist Ihr Vorteil. Wir planen für Sie und mit Ihnen.
      </p>
      <p>
        Somit ermöglichen wir Ihnen freies Gestalten und setzen Ihre Wünsche mit qualitativ
        hochwertigen Produkten für Ihr Zuhause um. Aufgrund unserer langjährigen Erfahrung und dem
        Kontakt zu namhaften Herstellern können wir Ihnen garantieren, dass wir alle Anforderungen
        für Ihr Zuhause schnell und unkompliziert umsetzen.
      </p>
    </div>
  </div>

  <div class="quotebox">
    <img src="/office.jpg" alt="office" />
    <div class="quote">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
        />
      </svg>
      <div class="quote-text">
        <p>Our work does make sense only if it is a faithful witness of his time.</p>
        <span>Dumitru Ionita , Director</span>
      </div>
      <svg
        class="rightquote"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"
        />
      </svg>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
a {
  position: absolute;
  top: 11%;
  left: 6%;
}
.quotebox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // gap: 50px;

  img {
    padding: 0 20px;
    // height: 250px;
    width: 100%;
  }
  .quote {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    // gap: 15px;
    .quote-text {
      padding: 25px 50px;
      p {
        font-size: 20px;
        letter-spacing: 1px;
        max-width: 280px;
      }
    }
  }
  .rightquote {
    align-self: end;
  }
}

.about {
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 100px 200px;

  align-items: center;
  .motto {
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    // justify-self: center;
  }
  .text {
    display: flex;

    flex-direction: column;
    gap: 20px;
  }
}
</style>
