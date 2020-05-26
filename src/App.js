import React ,{ useEffect ,useLayoutEffect } from 'react';
import '@/App.less';

// import { Button } from 'antd'
import { Switch ,Route ,Redirect ,withRouter } from 'react-router-dom'
// import { useUpdateEffect } from '@umijs/hooks'

import Login from '@/views/Login'
// import Dashboard from '@/views/Dashboard'
import Container from '@/components/layout/container'
import NoMatch from '@/components/404/NoMatch'

// import NProgress from 'nprogress'

const App = ({ location }) => {

  // console.log(props)

  useEffect(() => {
    console.log(location.pathname)
  } ,[location.pathname])

  useLayoutEffect(() => {
    console.log('end')
  } ,[location.pathname])

  // const math = useRouteMatch()
  // console.log(math)

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login"></Redirect>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/app">
        <Container />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
    // <div className="App">
    //   <header className="App-header">
    //     <Button type="primary">Primary</Button>
    //   </header>
    // </div>
  );
}

export default withRouter(App);
