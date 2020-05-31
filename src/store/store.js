import { createStore ,combineReducers ,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import collapseReducer from './reducer/collapseReducer'
import tagReducer from './reducer/menuTagReducer'

import { helloSage } from './saga'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  collapse: collapseReducer,
  tagMenus: tagReducer
})

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSage)

export default store