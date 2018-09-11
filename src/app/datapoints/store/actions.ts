import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';

export interface DatapointsAction extends Action<string> {
  payload?: any;
  error?: boolean;
}

@Injectable()
export class DatapointsActions {
  static readonly FETCH_ROOT_STARTED   = 'app/datapoints::FETCH_ROOT_STARTED';
  static readonly FETCH_ROOT_SUCCEEDED = 'app/datapoints::FETCH_ROOT_SUCCEEDED';
  static readonly FETCH_ROOT_FAILED    = 'app/datapoints::FETCH_ROOT_FAILED';

  @dispatch()
  fetchRootStarted = (href: string): DatapointsAction => ({
    type: DatapointsActions.FETCH_ROOT_STARTED,
    payload: href
  })

  fetchRootSucceeded = (hypermedia: any): DatapointsAction => ({
    type: DatapointsActions.FETCH_ROOT_SUCCEEDED,
    payload: hypermedia
  })

  fetchRootFailed = (err: any): DatapointsAction => ({
    type: DatapointsActions.FETCH_ROOT_FAILED,
    payload: err,
    error: true
  })
}
