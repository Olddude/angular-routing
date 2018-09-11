import { Reducer } from 'redux';
import { DatapointsAction, DatapointsActions } from './actions';

export interface DatapointsState {
  readonly hypermedia: any;
}

export const initialAppState: DatapointsState = {
  hypermedia: undefined
};

export const datapointsReducer: Reducer<DatapointsState> = (state: DatapointsState = initialAppState, action: DatapointsAction) => {
  switch (action.type) {
    case DatapointsActions.FETCH_ROOT_SUCCEEDED: {
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
