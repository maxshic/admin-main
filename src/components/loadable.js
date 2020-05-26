import React from 'react'
import Loadable from 'react-loadable'

// const loading = <div>loading...</div>

const loadable = (loader) =>{
  return Loadable({
    loader,
    // loading: () => <div>loading...</div>
    loading: () => <></>
  })
} 

export default loadable