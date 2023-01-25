import { all, fork } from "redux-saga/effects";
import Multiple from './mutiple.effect';

export default function* rootSaga() {
  yield all([
    Multiple(),
  ]);
}
