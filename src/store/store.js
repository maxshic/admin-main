import { createStore ,combineReducers ,applyMiddleware } from 'redux'

import collapseReducer from './reducer/collapseReducer'
import tagReducer from './reducer/menuTagReducer'

const reducer = combineReducers({
  collapse: collapseReducer,
  tagMenus: tagReducer
})

const store = createStore(reducer)

export default store