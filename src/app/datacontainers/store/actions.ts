import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';

export interface DatacontainersAction extends Action<string> {
  payload?: any;
  error?: boolean;
}

@Injectable()
export class DatacontainersActions {
  static readonly FETCH_ROOT_STARTED   = 'app/datacontainers::FETCH_ROOT_STARTED';
  static readonly FETCH_ROOT_SUCCEEDED = 'app/datacontainers::FETCH_ROOT_SUCCEEDED';
  static readonly FETCH_ROOT_FAILED    = 'app/datacontainers::FETCH_ROOT_FAILED';

  @dispatch()
  fetchRootStarted = (href: string): DatacontainersAction => ({
    type: DatacontainersActions.FETCH_ROOT_STARTED,
    payload: href
  })

  fetchRootSucceeded = (hypermedia: any): DatacontainersAction => ({
    type: DatacontainersActions.FETCH_ROOT_SUCCEEDED,
    payload: hypermedia
  })

  fetchRootFailed = (err: any): DatacontainersAction => ({
    type: DatacontainersActions.FETCH_ROOT_FAILED,
    payload: err,
    error: true
  })
}
