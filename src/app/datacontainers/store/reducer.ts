import { Reducer } from 'redux';
import { DatacontainersAction, DatacontainersActions } from './actions';

export interface DatacontainersState {
  readonly hypermedia: any;
}

export const initialAppState: DatacontainersState = {
  hypermedia: undefined
};

export const datacontainersReducer: Reducer<DatacontainersState> =
  (state: DatacontainersState = initialAppState, action: DatacontainersAction) => {
  switch (action.type) {
    case DatacontainersActions.FETCH_ROOT_SUCCEEDED: {
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
