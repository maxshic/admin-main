const defaultState = [
  {
    path: '/app/dashboard',
    name: '首页'
  }
]

const reducer = (state = defaultState ,action) => {
  switch(action.type){
    case 'TAG_ADD':
      return [...state ,action.item]
    case 'TAG_DEL':
      return state.filter(item => {
        return item.path !== action.item.path
      })
    default:
      return state
  }
}

export default reducer