import Vue from 'vue'
import Router from 'vue-router'
import Graphs from '@/pages/main/Graphs'
import GraphPage from '@/pages/main/GraphPage'
import Statistics from '@/pages/main/Statistics'
import Edit from '@/pages/main/Edit'

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
      props: true,
      children: [
        {
          path: 'statistics',
          name: 'GraphPageStats',
          component: Statistics
        },
        {
          path: 'edit',
          name: 'GraphPageEdit',
          component: Edit
        }
      ]
    }
  ]
})
