import Routing from './Routing.vue'
import Home from './home/Home.vue'
import About from './about/About.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export { Routing }
