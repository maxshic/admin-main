import React from 'react'
import { Layout ,Menu } from 'antd'
import { MenuFoldOutlined ,MenuUnfoldOutlined ,UserOutlined } from '@ant-design/icons'
import { Switch, Link, useRouteMatch ,Route ,Redirect } from 'react-router-dom'
import { CSSTransition ,TransitionGroup } from 'react-transition-group'
import { useBoolean } from '@umijs/hooks'

import { NProgress } from '@tanem/react-nprogress'
import Container from '@/components/BarContainer'
import Bar from  '@/components/Bar'

import routes from '@/components/routes'

const { Header ,Sider ,Content } = Layout

const styles = {
  con: {
    width: '100%',
    height: '100%'
  },
  header: {
		backgroundColor: '#ffffff',
		padding: '0 30px',
	},
	toggle: {
		cursor: 'pointer',
		fontSize: '18px',
		transition: 'all .3s',
	}
}



const View = ({ location }) => {
	console.log(location)

  const match = useRouteMatch()
  const mainUrl = match.path
  console.log('match' ,match)

  const { state: collapsed, toggle } = useBoolean(false)
  const { state: proLoading, setTrue: proTrue ,setFalse: proFalse } = useBoolean(false)

  return(
    <Layout style={ styles.con }>
			<NProgress isAnimating={ proLoading } key={ location.pathname }>
				{({ isFinished, progress, animationDuration }) => (
					<Container
						isFinished={isFinished}
						animationDuration={animationDuration}
					>
						<Bar 
							progress={progress}
							animationDuration={animationDuration}
						></Bar>
					</Container>
				)}
			</NProgress>
      <Sider trigger={ null } collapsible collapsed={ collapsed }>
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
        <Header style={ styles.header }>
					<div onClick={() => toggle()} style={ styles.toggle }>
						{ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
					</div>
				</Header>
        <Content style={ styles.con }>
					<TransitionGroup>
						<CSSTransition
							key={ location.pathname }
							classNames="fade"
							timeout={ 1000 }
							onEnter={() => proTrue()}
							onEntered={() => proFalse()}
						>
							<Switch location={ location }>
								<Route path={ `${mainUrl}` } exact>
									<Redirect to={ `${mainUrl}/dashboard` }></Redirect>
								</Route>
								{
									routes.map((item ,index) => {
										const Wrap = item.component
										return(
											<Route exact path={ `${mainUrl}/${item.path}` } key={ index } render={ () => <Wrap /> }></Route>
										)
									})
								}
							</Switch>
						</CSSTransition>
					</TransitionGroup>
					
        </Content>
      </Layout>
    </Layout>
  )
}

export default View