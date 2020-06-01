import { call ,put } from 'redux-saga/effects'
import Api from '@/services/apis'
import * as actionTypes from '@/store/constants'

export function *login(){
  const data = yield call(Api.login ,{ username: 'admin' ,password: 'admin' } ,{ responseType: 'json' })
  yield put({ type: actionTypes.SET_USERINFO ,payload: data })
}