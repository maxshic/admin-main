import React ,{ useState } from 'react'
import { withRouter ,useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
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
  },
  remb: {
    color: '#ffffff'
  }
}

const View = ({ dispatch }) => {
  // console.log(props)

  const [ loading ,setLoading ] = useState(false)

  const history = useHistory()

  // const toIndex = () => {
  //   history.push('/dashboard')
  // }

  const onFinish = ({ username, password ,remember}) => {
    // console.log(values)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
    // dispatch({ 
    //   type: 'USER_LOGIN' ,
    //   payload: { username, password } 
    // })
    // setLoading(false)
    // console.log(loading)
    // history.push('/app')
  }
  return(
    <div style={ styles.layout }>
      <div style={ styles.con }>
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
            <Input prefix={ <UserOutlined /> } placeholder="username：admin" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!'
              }
            ]}
          >
            <Input prefix={ <LockOutlined /> } type="password" placeholder="password：admin" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={ styles.remb }>Remember</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn" block loading={ loading }>Log in</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default connect()(withRouter(View))