import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { actionMultipleB, actionMultipleC } from '../actions/multiple.actions';
import { typesMultipleAction } from '../constants/multiple.constants';

export function* effectTypeA() {
    yield takeEvery(typesMultipleAction.MULTIPLE_A, function* ({payload}: {type: string, payload:  number}) {
        console.log('me ejecuto');
        
        yield put(actionMultipleB({idCard: 123, idMigrant: payload}));
    })
}


export function* effectTypeB() {
    yield takeEvery(typesMultipleAction.MULTIPLE_B, function* ({payload}: {type: string, payload:  {idMigrant: number, idCard: number}}) {
        yield put(actionMultipleC(1000, { idCard: payload.idCard, idMigrant: payload.idMigrant}));
    })
}

export default function* configSaga() {
    yield all([
        fork(effectTypeA),
        fork(effectTypeB)
    ]);
}