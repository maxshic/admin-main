import React from 'react'
import { connect } from 'react-redux'
import { Layout ,Menu } from 'antd'
import { Link ,withRouter } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'

const styles = {
  logo: {
    margin: '10px',
    backgroundColor: '#f2f2f2' ,
    padding: '9px 0' ,
    textAlign: 'center',
    borderRadius: '3px'
  }
}

const drawMenu = (arr) => {
  if(arr.length === 0){
    return <></>
  }else{
    return arr.map(item => {
      if(item.children){
        return(
          <Menu.SubMenu key={ `/app/${item.path}` } icon={ <UserOutlined /> } title={ item.name }>
            { drawMenu(item.children) }
          </Menu.SubMenu>
        )
      }else{
        return(
          <Menu.Item key={ `/app/${item.path}` } icon={ <UserOutlined /> }>
            <Link to={ `/app/${item.path}` }>
              <span>{ item.name }</span>
            </Link>
          </Menu.Item>
        )
      }
    })
  }
}

const View = ({location ,routes ,collapsed}) => {
  return(
    <Layout.Sider trigger={ null } collapsible collapsed={ collapsed }>
      <div style={ styles.logo }>Logo</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={ [location.pathname] }>
        { drawMenu(routes) }
      </Menu>
    </Layout.Sider>
  )
}

export default connect(state => {
  return{
    collapsed: state.collapse
  }
})(withRouter(View))