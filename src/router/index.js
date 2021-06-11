import Vue from 'vue'
import Router from 'vue-router'
import Graphs from '@/pages/main/Graphs'
import GraphPage from '@/pages/main/GraphPage'
import Statistics from '@/pages/main/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Graphs',
      component: Graphs,
      alias: '/graphs'
    },
    {
      path: '/graphs/:id',
      name: 'GraphPage',
      component: GraphPage,
      children: [
        {
          path: 'statistics',
          component: Statistics
        }
      ]
    }
  ]
})
