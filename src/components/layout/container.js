import React from 'react'
import { Layout ,Menu } from 'antd'

import { MenuFoldOutlined ,MenuUnfoldOutlined ,UserOutlined ,VideoCameraOutlined ,UploadOutlined } from '@ant-design/icons'

const { Header ,Sider ,Content } = Layout

const View = () => {
  return(
    <Layout>
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
          <Menu.Item key="1" icon={ <UserOutlined /> }>nav 1</Menu.Item>
          <Menu.Item key="2" icon={ <UserOutlined /> }>nav 1</Menu.Item>
          <Menu.Item key="3" icon={ <UserOutlined /> }>nav 1</Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  )
}

export default View