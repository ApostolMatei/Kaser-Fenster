<template>
  <footer>
    <div class="footer-contact">
      <h2>LASST UNS ZUSAMMENARBEITEN</h2>
      <p>
        Wir freuen uns auf eine erfolgreiche Zusammenarbeit, um Ihre Projekte umzusetzen. Mit
        unserem Engagement, Fachwissen und exzellentem Service stehen wir Ihnen zur Seite, um Ihre
        Anforderungen zu erfüllen.
      </p>
      <a href="/">KONTAKTIEREN SIE UNS</a>
    </div>
    <div class="footer-nav">
      <img src="/logo3.png" alt="Main logo | Kaser" />
      <span>@ 2023, copyright reserved</span>

      <div class="contact">
        <div class="tel">Tel: <a href="/">+54124124</a></div>
        <a class="contact-email" href="/">kaserfenster@office.ro</a>
      </div>
    </div>
  </footer>
</template>
<script></script>

<style scoped lang="scss">
.footer-contact {
  display: flex;
  // color: white;
  font-family: Poppins;
  background-image: url(/contactus.jpg);
  background-position: center;
  background-size: cover;
  justify-content: center;
  text-align: center;
  gap: 40px;
  color: rgb(218, 212, 212);

  align-items: center;
  flex-direction: column;
  padding: 140px 0 100px 0;
  background-color: rgb(241, 241, 241);
  p {
    font-size: 24px;
    max-width: 600px;
    // text-align: center;
    color: white;
    font-family: Poppins;
  }
  a {
    padding: 10px 25px;
    border-radius: 2px;
    text-decoration: none;
    color: white;
    font-size: 20px;

    border: 1.5px solid rgb(247, 242, 242);
  }
  h2 {
    font-size: 40px;
    font-family: Teko;
  }
}
.footer-nav {
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  background-color: rgb(255, 255, 255);
  align-items: center;
  font-family: Poppins;
  // color: white;
  padding: 25px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
  }
  img {
    justify-self: center;
    // color: white;

    // background-color: white;
    height: 50%;
  }

  span {
    justify-self: center;
    font-size: 20px;
    font-weight: 600;
  }
}
.tel {
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 1000;
  letter-spacing: 1.5px;
  padding: 0 20px 0 0;
  &:hover > a {
    color: rgb(215, 165, 28);
  }
}
.contact {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  //   justify-self: center;
  font-family: Poppins;
  font-weight: 600;
  a {
    text-decoration: none;
    color: rgb(2, 2, 2);
    font-family: Poppins;
    font-size: 20px;

    /* padding: 0 20px 0 0; */
  }
  .contact-email {
    border-left: 1px solid grey;
    padding: 7px 20px;
  }
}
</style>
