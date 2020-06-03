import { createStore ,combineReducers ,applyMiddleware } from 'redux'

import { persistStore ,persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import createSagaMiddleware from 'redux-saga'

import collapseReducer from './reducer/collapseReducer'
import tagReducer from './reducer/menuTagReducer'
import userReducer from './reducer/userReducer'

import { rootSage } from './saga'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  collapse: collapseReducer,
  tagMenus: tagReducer,
  user: userReducer
})

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSage)

export default store