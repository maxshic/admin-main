import * as constants from '@/store/constants'

const defaultState = {
  menuTags: [
    {
      path: '/app/dashboard',
      name: '首页'
    }
  ],
  collapsed: false,
}

const reducer = (state = defaultState ,action) => {
  switch(action.type){
    case constants.FOLD_TOGGLE:
      return {...state , collapsed: !state.collapsed}
    case constants.TAG_ADD:
      return 
    case constants.TAG_DEL:
      return state.menuTags.filter(item => {
        return item.path !== action.payload.path
      })
    default: 
      return state
  }
}

export default reducer