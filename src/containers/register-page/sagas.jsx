import { call, put, takeEvery } from 'redux-saga/effects';
import _config from 'config';
import _api from 'utils/api';


function* registerUser(action) {
  try {
    let { email, password } = action.payload;
    let postBody = {
      email: email,
      password: password
    };
    let registerUrl = `http://localhost:4200/register`;
    let registerRes = yield _api.call(registerUrl, 'POST', postBody);

    yield put({ type: 'REGISTER_PAGE__REGISTER_USER_SUCCESS' })
  } catch (e) {
    yield put({ type: 'REGISTER_PAGE__REGISTER_USER_FAILED' })

  }
}
export default [
  takeEvery('REGISTER_PAGE__REGISTER_USER', registerUser),
];
