import { combineReducers, Reducer } from 'redux';
import { appReducer, AppState } from './reducer';
import { DatapointsState, datapointsReducer } from '../datapoints/store/reducer';

export interface RootState {
  app?: AppState;
  datapoints?: DatapointsState;
}

export const initialRootState: RootState = {
  app: undefined,
  datapoints: undefined
};

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  app: appReducer,
  datapoints: datapointsReducer
});
