import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import OurTeam from '@/components/team'
import OurSponsor from '@/components/sponsor'
import privpolicy from '@/components/privacy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/ourteam',
      name: 'OurTeam',
      component: OurTeam
    },
    {
      path: '/oursponsors',
      name: 'OurSponsors',
      component: OurSponsor
    },
    {
      path: '/privpolicy',
      name: 'PrivPolicy',
      component: privpolicy
    },
  ]
})
