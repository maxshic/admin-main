const reducer = (state = false ,action) => {
  switch(action.type){
    case 'FOLD_TOGGLE':
      return !state
    default:
      return state
  }
}

export default reducer