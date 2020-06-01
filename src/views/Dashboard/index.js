import React ,{ useEffect } from 'react'

import { Button } from 'antd'

import { connect } from 'react-redux'

import Apis from '@/services/apis'

const Dashboard = ({ title ,dispatch }) => {

  useEffect(() => {
    // console.log('aaaa' ,title)
  } ,[title])

  const setMenu = () => {
    dispatch({
      type: 'TAG_ADD',
      item: {
        path: '/app/aaaaa',
        name: '主页'
      }
    })
  }

  const api = () => {
    // Apis.login({
    //   username: 'admin',
    //   password: 'admin'
    // }).then(res => {

    // })
    dispatch({ type: 'USER_LOGIN' })
  }

  return(
    <div>
      <Button onClick={ () => setMenu() }>Dashboard</Button>
      <Button onClick={ () => api() }>Dashboard</Button>
    </div>
  )
}

export default connect((state) => {
  return {
    user: state.user
  }
})(Dashboard)