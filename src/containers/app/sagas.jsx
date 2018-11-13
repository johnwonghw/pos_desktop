import { all } from 'redux-saga/effects';
// import SignUpSagas
import RegisterSagas from 'containers/register-page/sagas'

export default function* rootSaga() {
  yield all([
    ...RegisterSagas
  ]);
}
