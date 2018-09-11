import { combineReducers, Reducer } from 'redux';
import { appReducer, AppState } from './reducer';
import { DatapointsState, datapointsReducer } from '../datapoints/store/reducer';
import { DatacontainersState, datacontainersReducer } from '../datacontainers/store/reducer';

export interface RootState {
  app?: AppState;
  datapoints?: DatapointsState;
  datacontainers?: DatacontainersState;
}

export const initialRootState: RootState = {
  app: undefined,
  datapoints: undefined,
  datacontainers: undefined
};

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  app: appReducer,
  datapoints: datapointsReducer,
  datacontainers: datacontainersReducer
});
