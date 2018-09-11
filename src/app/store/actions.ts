import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from './redux-types';

@Injectable()
export class AppActions {
  static readonly FETCH_ROOT_STARTED   = 'app::FETCH_ROOT_STARTED';
  static readonly FETCH_ROOT_SUCCEEDED = 'app::FETCH_ROOT_SUCCEEDED';
  static readonly FETCH_ROOT_FAILED    = 'app::FETCH_ROOT_FAILED';

  @dispatch()
  fetchRootStarted = (): Action => ({
    type: AppActions.FETCH_ROOT_STARTED
  })

  fetchRootSucceeded = (hypermedia: any): Action => ({
    type: AppActions.FETCH_ROOT_SUCCEEDED,
    payload: hypermedia
  })

  fetchRootFailed = (): Action => ({
    type: AppActions.FETCH_ROOT_FAILED,
    error: true
  })
}
