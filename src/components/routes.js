import React from 'react'
import loadable from './loadable'

const routes = [
  {
    path: 'dashboard',
    name: '首页',
    component: loadable(() => import('@/views/Dashboard'))
  },
  {
    path: 'chart',
    name: '图表',
    component: loadable(() => import('@/views/Chart'))
  },
  {
    path: 'form',
    name: '表单',
    component: () => <></>,
    children: [
      {
        path: 'form/button',
        name: '按钮',
        component: loadable(() => import('@/views/Form/Button'))
      },
      {
        path: 'form/input',
        name: '输入框',
        component: loadable(() => import('@/views/Form/Input'))
      }
    ]
  },
  {
    path: 'table',
    name: '表格',
    component: loadable(() => import('@/views/Table'))
  }
]

export default routes