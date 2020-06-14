import React from 'react'
import { connect } from 'react-redux'
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

const View = ({ collapsed ,dispatch }) => {

  const toggle = () => {
    dispatch({ type: 'FOLD_TOGGLE' })
  }

  return(
    <Layout.Header style={ styles.header }>
      <div onClick={() => toggle()} style={ styles.toggle }>
        { collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      </div>
    </Layout.Header>
  )
}

export default connect(state => {
  return{
    collapsed: state.collapse
  }
})(View)