import React from 'react'
import { Layout ,Menu } from 'antd'
import { MenuFoldOutlined ,MenuUnfoldOutlined ,UserOutlined ,VideoCameraOutlined ,UploadOutlined } from '@ant-design/icons'
import { Link, useRouteMatch ,Route ,Redirect } from 'react-router-dom'

import Dashboard from '@/views/Dashboard'

import routes from '@/components/routes'




const { Header ,Sider ,Content } = Layout

const styles = {
  con: {
    width: '100%',
    height: '100%'
  },
  header: {
    backgroundColor: '#ffffff'
  }
}



const View = () => {

  const math = useRouteMatch()
  const mainUrl = math.path
  console.log('math' ,math)

  return(
    <Layout style={ styles.con }>
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
          <Menu.Item key="1" icon={ <UserOutlined /> }>
            <Link to='/app/dashboard'>
              <span>dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={ <UserOutlined /> }>
            <Link to='/app/chart'>
              <span>chart</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={ <UserOutlined /> }>nav 1</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={ styles.header }></Header>
        <Content style={ styles.con }>
          <Route path={ `${mainUrl}` } exact>
            <Redirect to={ `${mainUrl}/dashboard` }></Redirect>
          </Route>
          {
            routes.map((item ,index) => {
              const Wrap = item.component
              return(
                // <div key={ index }>123</div>
                <Route path={ `${mainUrl}/${item.path}` } key={ index } render={ () => <Wrap /> }></Route>
                // <Route path={ `${mainUrl}/${item.path}` } key={ index } component={ item.component }></Route>
              )
            })
          }
          {/* <Route path={ `${mainUrl}/dashboard` }>
            <Dashboard />
          </Route> */}
        </Content>
      </Layout>
    </Layout>
  )
}

export default View