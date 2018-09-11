import { combineReducers, Reducer } from 'redux';
import { appReducer } from './reducer';

export interface RootState {
  app?: any;
}

export const initialRootState: RootState = {
  app: undefined
};

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  app: appReducer
});
