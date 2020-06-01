import { SET_USERINFO } from '@/store/constants'

const defaultState = {}

const reducer = (state = defaultState ,action) => {
  switch(action.type){
    case SET_USERINFO:
      return action.payload
    default:
      return state
  }
}

export default reducer