import { createStore } from 'redux'

const defaultState = [
  {
    path: '/app/dashboard',
    name: '首页'
  }
]

const reducer = (state = defaultState ,action) => {
  switch(action.type){
    case 'ADD_TAG':
      return [...state ,action.item]
    case 'DEL_TAG':
      return state.filter(item => {
        return item.path !== action.item.path
      })
    default:
      return state
  }
}

const store = createStore(reducer)

export default store