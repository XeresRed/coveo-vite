import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import { multipleReducer, MultipleState } from './reducers/multiple.reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

export interface AppState {
    multiple: MultipleState,
}

export const store = configureStore({
  reducer: combineReducers({
    multiple: multipleReducer
  }),
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(sagaMiddleware)

})

sagaMiddleware.run(rootSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch