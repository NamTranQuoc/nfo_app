import { all } from 'redux-saga/effects';
import {takeEverySignIn} from "./AuthSaga";

export default function* rootSaga() {
  yield all([
    takeEverySignIn(),
  ]);
}
