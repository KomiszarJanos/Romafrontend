import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mustsee',
      name: 'mustsee',
      component: () => import('../views/MustSee.vue')
    },
    {
      path: '/firstday',
      name: 'firstday',
      component: () => import('../views/FirstDayView.vue')
    },
    {
      path: '/secondday',
      name: 'secondday',
      component: () => import('../views/SecondDayView.vue')
    },
    {
      path: '/thirdday',
      name: 'thirdday',
      component: () => import('../views/ThirdDayView.vue')
    },
    {
      path: '/FourtDay',
      name: 'FourtDay',
      component: () => import('../views/FourtDay.vue')
    },
    
    {
      path: '/placeDetails/:id',
      name: 'placeDetails',
      component: () => import('../views/PlaceDetailsView.vue'),
      props:true


    }
  ]
})

export default router
