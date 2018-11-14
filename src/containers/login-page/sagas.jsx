import { call, put, takeEvery } from 'redux-saga/effects';
import _config from 'config';
import _api from 'utils/api';


function* login(action) {
  try {
    let { email, password } = action.payload;
    let postBody = {
      email,
      password,
    };
    let loginUrl = `http://localhost:4200/login`;
    console.log('hi')
    let loginRes = yield call (_api.execute, loginUrl, 'POST', postBody);

    yield put({ type: 'LOGIN_PAGE__LOGIN_SUCCESS', response: { loginRes } })
  } catch (e) {
    yield put({ type: 'LOGIN_PAGE__LOGIN_FAILED' })

  }
}
export default [
  takeEvery('LOGIN_PAGE__LOGIN', login),
];
