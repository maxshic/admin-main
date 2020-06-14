import React ,{ useEffect } from 'react'
import { Layout ,Tag } from 'antd'
import { MenuFoldOutlined ,MenuUnfoldOutlined } from '@ant-design/icons'
import { Switch, useRouteMatch ,Route ,Redirect ,withRouter } from 'react-router-dom'
import { CSSTransition ,TransitionGroup } from 'react-transition-group'
import { useBoolean } from '@umijs/hooks'

import { connect } from 'react-redux'

import { NProgress } from '@tanem/react-nprogress'
import Container from '@/components/BarContainer'
import Bar from  '@/components/Bar'

import SiderBar from './SiderBar'

import TopHeader from './TopHeader'
// import ajson from './a.json'

// import withGuard from '@/components/Guard'

import routes from '@/components/routes'

const { Header ,Content } = Layout

const styles = {
  logo: {
    margin: '10px',
    backgroundColor: '#f2f2f2' ,
    padding: '9px 0' ,
    textAlign: 'center',
    borderRadius: '3px'
  },
  con: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: 'auto',
    height: '100%',
    margin: '10px',
    padding: '15px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    minHeight: '500px'
  },
  header: {
		backgroundColor: '#ffffff',
		padding: '0 30px',
	},
	toggle: {
    display: 'inline-block',
		cursor: 'pointer',
		fontSize: '18px',
		transition: 'all .3s',
  },
  tagCon: {
    padding: '10px 10px 0px 10px',
  },
  tag: {
    userSelect: 'none',
    cursor: 'pointer',
  }
}

const View = (props) => {
  const { location ,menus } = props

  // console.log( 'props',props)
  
  const match = useRouteMatch()
  const mainUrl = match.path
  // console.log('match' ,match)

  const { state: collapsed, toggle } = useBoolean(false)
  const { state: proLoading, setTrue: proTrue ,setFalse: proFalse } = useBoolean(false)
  useEffect(() => {
    console.log('start')
    return () => {
      console.log('end')
    }
  } ,[location.pathname])

  const drawRoute = (arr) => {
    if(arr.length === 0){
      return <></>
    }else{
      return arr.map(item => {
        if(item.children){
          return drawRoute(item.children)
        }else{
          // const Wrap = () => withGuard(item.name)(item.component)
          const Wrap = item.component
          return (
            <Route 
              exact 
              path={ `/app/${item.path}` } 
              title={ item.name } 
              key={ item.path } 
              render={ 
                () => <Wrap title={ item.name } /> 
              }>
            </Route>
          )
        }
      })
    }
  }

  const tagClick = (index) => {
    console.log(index)
  }
  const tagClose = () => {

  }

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
      {/* <Sider trigger={ null } collapsible collapsed={ collapsed }>
        <div style={ styles.logo }>Logo</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={ [location.pathname] }>
          { drawMenu(routes) }
        </Menu>
      </Sider> */}
      <SiderBar routes={ routes } />
      <Layout>
        {/* <Header style={ styles.header }>
					<div onClick={() => toggle()} style={ styles.toggle }>
						{ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
					</div>
				</Header> */}
        <TopHeader />
        <div style={ styles.tagCon }>
          {
            menus.map((item ,index) => {
              return(
                <Tag 
                  style={ styles.tag } 
                  closable={ index !== 0 } 
                  key={ index } 
                  onClick={ () => tagClick(index) }
                  onClose={ () => tagClose() }
                >
                  { item.name }
                </Tag>
              )
            })
          }
        </div>
        <Content style={ styles.content }>
					<TransitionGroup>
						<CSSTransition
							key={ location.pathname }
							classNames="fade"
              timeout={ 300 }
              unmountOnExit
							onEnter={() => proTrue()}
							onEntered={() => proFalse()}
						>
							<Switch location={ location }>
								<Route path={ `${mainUrl}` } exact>
									<Redirect to={ `${mainUrl}/dashboard` }></Redirect>
								</Route>
								{
                  drawRoute(routes)
								}
							</Switch>
						</CSSTransition>
					</TransitionGroup>
        </Content>
      </Layout>
    </Layout>
  )
}

export default connect((state) => {
  return{
    menus: state.tagMenus
  }
})(withRouter(View))