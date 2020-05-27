import React from 'react'
import Loadable from 'react-loadable'

import { Spin } from 'antd'

const loading = () => <div style={{
  textAlign: 'center',
  padding: '50px'
}}><Spin size="large" /></div>

const loadable = (loader) =>{
  return Loadable({
    loader,
    loading
  })
} 

export default loadable