<template>
  <div class="pager">
    <div class="pagerbox">
      <h3>Kontakt</h3>
      <div class="pages">
        <router-link to="/">Home /</router-link>
        <span>Kontakt</span>
      </div>
    </div>
  </div>
  <div class="container-box">
    <div class="ornament"></div>
    <div class="input-box">
      <h1>Kontaktieren Sie uns</h1>
      <p>
        Gerne können Sie uns jederzeit kontaktieren. Wir werden uns so schnell wie möglich bei Ihnen
        melden!
      </p>
      <form name="contact" method="POST" netlify>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-Mail-Adresse" />
        <input type="text" placeholder="Nachricht" />
        <a href="/">SEND</a>
      </form>
    </div>

    <div class="info-box">
      <h2>Info</h2>
      <div class="email">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
          />
        </svg>
        kaserfenster@office.com
      </div>
      <div class="tel">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14.156 14.156 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349c0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c0 0 0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.79 9.79 0 0 1 13 19.611"
          />
        </svg>
        +43 664 1315477
      </div>
      <div class="adress">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
            <path
              d="M22 22H2m19 0v-9m-9.996-8c.018-1.24.11-1.943.582-2.414C12.172 2 13.114 2 15 2h2c1.886 0 2.828 0 3.414.586C21 3.172 21 4.114 21 6v3"
            />
            <path
              d="M15 22v-6M3 22v-9m0-4c0-1.886 0-2.828.586-3.414C4.172 5 5.114 5 7 5h4c1.886 0 2.828 0 3.414.586C15 6.172 15 7.114 15 9v3M9 22v-3M6 8h6m-6 3h1m5 0H9.5M6 14h6"
            />
          </g>
        </svg>
        Wien
      </div>
      <div class="hours">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
            <path stroke-linejoin="round" d="M12 9v4l2.5 2.5m-11-11l4-2.5m13 2.5l-4-2.5" />
            <path d="M7.5 5.204A9 9 0 1 1 4.204 8.5" />
          </g>
        </svg>
        09:00 - 18:00
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
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
.container-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // flex-wrap: wrap;
  padding: 150px 0;
  //  max-width: 1260px;
  //  margin: 0 auto;
  gap: 80px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    padding: 70px 0;
    .ornament {
      display: none;
    }
  }
  .ornament {
    padding: 25px;
    background-color: rgb(237, 154, 12);
  }
}

.input-box {
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  gap: 70px;
  padding-bottom: 30px;
  // padding: 20px ;
  // max-width: 660px;
  width: 80%;

  h1 {
    font-family: Teko;
    font-size: 50px;
  }
  p {
    font-family: Poppins;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: rgb(85, 83, 83);
  }

  input {
    // width: 150px;

    font-family: Poppins;
    border: none;
    border-bottom: 2px solid rgb(198, 194, 194);
    border-radius: 2px;
    padding: 10px 0 10px 10px;
    font-size: 20px;
    font-weight: 600;
    &::placeholder {
      color: rgb(124, 122, 122);
    }
  }
  a {
    font-family: Poppins;
    text-align: center;
    font-size: 20px;
    letter-spacing: 5px;
    background-color: black;
    color: white;
    padding: 15px 0;
  }
}

.info-box {
  display: flex;
  // position: relative;
  // align-items: center;

  flex-direction: column;
  justify-content: space-between;
  // padding: 60px 650px 60px 40px;
  padding: 40px 20px;
  width: 80%;

  @media screen and (max-width: 1000px) {
    min-width: 203px;
  }

  background-color: rgb(36, 36, 36);
  color: white;
  gap: 75px;

  @media screen and (min-width: 1000px) {
    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 50px;
      height: 50px;

      transform: translate(-55px, -73px);
      border-top: 50px solid rgb(202, 174, 72);
    }
  }

  h2 {
    font-family: Teko;
    font-size: 40px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: Poppins;
    font-size: 20px;
  }
}
</style>
