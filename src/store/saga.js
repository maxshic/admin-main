import { takeEvery } from 'redux-saga/effects'
import effects from '@/store/effects'
import * as actionTypes from '@/store/constants'

export function *rootSage(){
  console.log('saga-start')
  yield takeEvery(actionTypes.USER_LOGIN ,effects.login)
}