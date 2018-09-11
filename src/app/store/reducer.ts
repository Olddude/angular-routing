import { Reducer } from 'redux';
import { AppActions } from './actions';
import { Action } from './redux-types';

export interface AppState {
  readonly hypermedia: any;
}

export const initialAppState: AppState = {
  hypermedia: undefined
};

export const appReducer: Reducer<AppState> = (state: AppState = initialAppState, action: Action) => {
  switch (action.type) {
    case AppActions.FETCH_ROOT_SUCCEEDED: {
      return {
        ...state,
        hypermedia: { ...action.payload }
      };
    }
    default: {
      return state;
    }
  }
};
