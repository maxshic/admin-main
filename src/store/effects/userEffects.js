import { call ,put } from 'redux-saga/effects'
import Api from '@/services/apis'
import * as actionTypes from '@/store/constants'

export function *login({ payload ,callBack }){
  const data = yield call(Api.login ,payload ,{ responseType: 'json' })
  callBack(data)
  yield put({ type: actionTypes.SET_USERINFO ,payload: data })
}