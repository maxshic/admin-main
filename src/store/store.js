import { createStore ,combineReducers ,applyMiddleware } from 'redux'

import { persistStore ,persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import createSagaMiddleware from 'redux-saga'

import collapseReducer from './reducer/collapseReducer'
import tagReducer from './reducer/menuTagReducer'
import userReducer from './reducer/userReducer'

import { rootSage } from './saga'

//中间件
const sagaMiddleware = createSagaMiddleware()

//reducer
const reducer = combineReducers({
  collapse: collapseReducer,
  tagMenus: tagReducer,
  user: userReducer
})

//persistConfig
const persistConfig = {
  key: 'root',
  storage: storageSession
}

const persistedReducer = persistReducer(persistConfig ,reducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSage)

export const persistor = persistStore(store)

export default store