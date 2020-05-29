import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined ,MenuFoldOutlined } from '@ant-design/icons'

const styles = {
  header: {
    backgroundColor: '#ffffff',
		padding: '0 30px',
  },
  toggle: {
    display: 'inline-block',
		cursor: 'pointer',
		fontSize: '18px',
		transition: 'all .3s',
  }
}

const View = () => {

  const toggle = () => {
    
  }

  return(
    <Layout.Header style={ styles.header }>
      <div onClick={() => toggle()} style={ styles.toggle }>
        { collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      </div>
    </Layout.Header>
  )
}

export default View