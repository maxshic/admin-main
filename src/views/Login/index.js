import React from 'react'
import { withRouter ,useHistory } from 'react-router-dom'

import { Button ,Form ,Input ,Checkbox } from 'antd'
import { UserOutlined ,LockOutlined } from '@ant-design/icons'

const styles = {
  layout: {
    position: 'relative',
    // width: '100vw',
    height: '100vh',
    minHeight: '500px',
    background: 'linear-gradient(-45deg, rgb(238, 119, 82), rgb(231, 60, 126), rgb(35, 166, 213), rgb(35, 213, 171))',
    backgroundSize: '400% 400%',
    animation: 'Gradient 15s ease infinite',
  },
  con: {
    width: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% ,-50%)',
  }
}

const View = (props) => {
  // console.log(props)

  const history = useHistory()

  // const toIndex = () => {
  //   history.push('/dashboard')
  // }

  const onFinish = (values) => {
    console.log(values)
    history.push('/dashboard')
  }
  return(
    <div style={ styles.layout }>
      <div style={ styles.con }>
        {/* <Button type="primary" onClick={ toIndex }>Primary</Button> */}
        <Form 
          name="loginForm"
          className="loginForm"
          initialValues={{
            remember: true
          }}
          onFinish={ onFinish }
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号!'
              }
            ]}
          >
            <Input prefix={ <UserOutlined /> } placeholder="username" />
          </Form.Item>
          <Form.Item
            name="loginpassword"
            rules={[
              {
                required: true,
                message: '请输入密码!'
              }
            ]}
          >
            <Input prefix={ <LockOutlined /> } type="password" placeholder="password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn" block>Log in</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(View)