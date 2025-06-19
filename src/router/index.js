import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '@/views/EstudianteView.vue'
import PreguntaView from '@/views/PreguntaView.vue'
import HolaMundoView from '@/views/HolaMundoView.vue'
import PokemonView from '@/views/PokemonView.vue'
import ResponsivoView from '@/views/ResponsivoView.vue'

const routes = [
  // Carga inicial / eager
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estudiante/:cedula', // nombre de la ruta para navegar mediante la URL
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/pregunta', // nombre de la ruta para navegar mediante la URL
    name: 'preguntaView',
    component: PreguntaView
  },
  {
    path: '/holaMundo', // nombre de la ruta para navegar mediante la URL
    name: 'holaMundoView',
    component: HolaMundoView
  },
  {
    path: '/pokemon', // nombre de la ruta para navegar mediante la URL
    name: 'pokemonView',
    component: PokemonView
  },
  {
    path: '/responsivo', // nombre de la ruta para navegar mediante la URL
    name: 'responsivo',
    component: ResponsivoView
  },
  // Carga BAJO DEMANDA lazy loaded/ -> No carga de inicio las páginas,
  // se carga cuendo se necesite.
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contador/numeros',
    name: 'contadorView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContadorView.vue')
  },
  {
    path: '/producto',
    name: 'producto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductoView.vue')
  },
  {
    path: '/chuck',
    name: 'chuckNorrisView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChuckNorrisView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
