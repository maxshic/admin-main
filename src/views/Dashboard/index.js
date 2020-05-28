import React ,{ useEffect } from 'react'

import { Button } from 'antd'

import { connect } from 'react-redux'

const Dashboard = ({ title ,dispatch }) => {

  useEffect(() => {
    console.log('aaaa' ,title)
  } ,[title])

  const setMenu = () => {
    dispatch({
      type: 'ADD_TAG',
      item: {
        path: '/app/aaaaa',
        name: '主页'
      }
    })
  }

  return(
    <div>
      <Button onClick={ () => setMenu() }>Dashboard</Button>
    </div>
  )
}

export default connect((state) => {
  return {
    menus: state
  }
})(Dashboard)