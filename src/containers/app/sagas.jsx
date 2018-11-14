import { all } from 'redux-saga/effects';
// import SignUpSagas
import LoginSagas from 'containers/login-page/sagas'
import RegisterSagas from 'containers/register-page/sagas'

export default function* rootSaga() {
  yield all([
    ...LoginSagas,
    ...RegisterSagas
  ]);
}
