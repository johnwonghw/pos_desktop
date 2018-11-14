import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import _config from 'config';
import _api from 'utils/api';


function* register(action) {
  try {
    let { email, password } = action.payload;
    let postBody = {
      email: email,
      password: password
    };
    let registerUrl = `http://localhost:4200/register`;
    let registerRes = yield call (_api.execute, registerUrl, 'POST', postBody);

    console.log({registerRes})
    yield put({ type: 'REGISTER_PAGE__REGISTER_SUCCESS' })
  } catch (e) {
    yield put({ type: 'REGISTER_PAGE__REGISTER_FAILED' })

  }
}
export default [
  takeEvery('REGISTER_PAGE__REGISTER', register),
];
