<template>
  <header :class="{ 'sticky-nav': isSticky }">
    <nav>
      <div class="logo">
        <img src="/logo3.png" alt="Main logo | Kaser" />
      </div>
      <svg
        @click.prevent="mainMenuActive()"
        class="hamburger"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <ul :class="{ active: menuActive }">
        <li class="line"><router-link @click="menuRefresh()" to="/">Startseite</router-link></li>
        <li class="line">
          <router-link @click="menuRefresh()" to="/ueber-uns">Über uns</router-link>
        </li>
        <li class="line">
          <router-link @click="menuRefresh()" to="/leistungen">Leistungen</router-link>
        </li>
        <li class="line">
          <router-link @click="menuRefresh()" to="/produkte">Produkte</router-link>
        </li>
        <li><router-link @click="menuRefresh()" to="/kontakt">Kontakt</router-link></li>
      </ul>
      <div class="contact" :class="{ active: menuActive }">
        <span><a href="/">+43 664 1315477</a></span>
        <a class="contact-email" href="/">office@kaser-fenster.at</a>
      </div>
    </nav>
  </header>
</template>

<script scoped>
export default {
  name: 'Nav-Header',
  emits: ['menu-active'],
  data() {
    return {
      menuActive: false,
      isSticky: false
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > 100) {
        // Make the navbar sticky after 2 scrolls (twice the height of the viewport)
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    },

    menuRefresh() {
      window.scrollTo(0, 0)
      if (window.innerWidth >= 1000) return
      this.menuActive = !this.menuActive
      this.$emit('menu-active', this.menuActive)
    },
    mainMenuActive() {
      this.menuActive = !this.menuActive
      this.$emit('menu-active', this.menuActive)
    }
  }
}
</script>

<style scoped lang="scss">
header {
  // height: 100vh;
  background-color: white;
}

nav {
  display: grid;
  box-sizing: border-box;
  padding: 10px 0px 0 20px;

  grid-template-columns: 15% 1fr 40%;
  align-items: center;

  max-width: 1260px;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    padding: 10px 20px 0 20px;
  }
  .logo {
    img {
      height: 58px;

      // width: 152px;
      // background-color: #222222;
      // justify-self: center
    }
  }
  .hamburger {
    display: none;
  }
}
.sticky-nav {
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  // letter-spacing: 1px;

  animation: opacity 1.5s;
  // padding: 5px 20px;
  z-index: 300;

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
li {
  all: unset;
  a {
    /* list-style: none; */
    text-decoration: none;
    cursor: pointer;
    font-family: Poppins;

    font-size: 17px;
    font-weight: 1000;
    /* padding: 0 15px; */
    color: black;
    justify-content: center;
    width: 100%;
    &:hover {
      color: rgb(215, 165, 28);
    }
  }
}
ul {
  display: flex;
  gap: 15px;
  padding: 0;
  margin: 0;
  z-index: 3;
}

span {
  font-size: 17px;
  // font-family: Poppins;
  // font-weight: 600;
  padding: 0 20px 0 0;
  &:hover > a {
    color: rgb(215, 165, 28);
  }
}

.contact {
  justify-self: end;
  a {
    text-decoration: none;
    color: black;
    // letter-spacing:
    font-size: 17px;
    // font-family: Poppins;
    // font-weight: 600;
    /* padding: 0 20px 0 0; */
  }
  .contact-email {
    border-left: 1px solid grey;
    padding: 7px 20px;
  }
}

.main-navigation {
  display: flex;
}

/* Ensuring that if the hamburger menu is active but
  the screen becomes larger, the display will
  change to display items in a row instead of a column*/

@media screen and (max-width: 1000px) {
  nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: sticky;

    .hamburger {
      display: block;
    }
  }

  ul {
    display: none;
    background-color: white;
    width: 100%;
    position: absolute; /* Add this */
    top: 100%; /* Adjust as needed */
    left: 0; /* Adjust as needed */
    flex-direction: column;
    padding: 5px 0px;
    border-bottom-left-radius: 1%;
    border-bottom-right-radius: 1%;
    z-index: 3;
    &.active {
      display: flex;
    }
    li {
      list-style-type: none;
      /* margin: 15px auto; */
      /* text-align: center; */
      width: 100%;
      // border-bottom: 2px solid gray;
    }
    .line {
      border-bottom: 2px solid gray;
    }
    a {
      padding: 5px 7px;
      color: #222222;
      margin: 0px 2px 0px 2px;
      text-decoration: none;
      display: inline-block;
    }
  }

  .contact {
    display: none;
  }
  .contact-email {
    border: none;
    padding: 0;
  }
}
</style>
