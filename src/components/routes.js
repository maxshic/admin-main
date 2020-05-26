// import React from 'react'
import loadable from './loadable'

const routes = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: loadable(() => import('@/views/Dashboard'))
  },
  {
    path: 'chart',
    name: 'chart',
    component: loadable(() => import('@/views/Chart'))
  }
]

export default routes