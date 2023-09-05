import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ProductstView from '@/views/ProductsView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Fenster, Rollen, Türen - Ihre vertrauenswürdigen Fensterlösungen in Wien | Kaser',
      metaTags: [
        {
          name: 'description',
          content:
            'Herzlich willkommen bei Firma! Wir sind Ihr vertrauenswürdiger Anbieter hochwertiger Fenster, Rollen und Türen in Wien. Entdecken Sie unsere breite Palette an Fensterlösungen für Wohn- und Gewerbeimmobilien.'
        }
      ]
    }
  },
  {
    path: '/ueber-uns',
    component: AboutView,
    meta: {
      title: 'Über uns - Kaser',
      metaTags: [
        {
          name: 'description',
          content:
            'Erfahren Sie mehr über unsere Firma, unsere Mission und unsere Werte. Wir sind stolz darauf, hochwertige Fenster, Türen und Rollen anzubieten und exzellenten Kundenservice zu bieten.'
        }
      ]
    }
  },
  {
    path: '/leistungen',
    component: ServicesView,
    meta: {
      title: 'Unsere Leistungen',
      metaTags: [
        {
          name: 'description',
          content: 'Entdecken Sie unsere umfangreichen Leistungen.'
        }
      ]
    }
  },
  {
    path: '/produkte',
    component: ProductstView,
    meta: {
      title: 'Produkte - Kaser',
      metaTags: [
        {
          name: 'description',
          content:
            'Entdecken Sie unsere Fenster aus Kunststoff, Kunststoff-Alu, Aluminium, Holz und Holz-Alu. Qualitativ hochwertige Fenster in verschiedenen Materialien und Ausführungen - für mehr Energieeffizienz und Stil.'
        }
      ]
    }
  },
  {
    path: '/kontakt',
    component: ContactView,
    meta: {
      title: 'Kontaktieren Sie uns - Kaser',
      metaTags: [
        {
          name: 'description',
          content:
            'Gerne können Sie uns jederzeit kontaktieren. Wir werden uns so schnell wie möglich bei Ihnen melden!'
        }
      ]
    }
  },

  {
    path: '/:catchAll(.*)*',
    redirect: '/'
  }
]

const navHeight = 72

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: +navHeight
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)

  // Update the page title
  document.title = to.meta.title
  // Update the meta tags
  const metaTags = to.meta.metaTags
  metaTags.forEach((tag) => {
    const tagElement = document.querySelector(`meta[name='${tag.name}']`)
    if (tagElement) {
      tagElement.setAttribute('content', tag.content)
    }
  })

  next()
})

export default router
