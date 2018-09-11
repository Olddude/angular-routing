import { Injectable } from '@angular/core';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Action } from 'redux';
import { AppActions } from './actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AppEpics {
  constructor(private httpClient: HttpClient, private actions: AppActions) {
  }

  createEpic() {
    return combineEpics(
      this.createfetchRootEpic(),
    );
  }

  createfetchRootEpic(): Epic<Action> {
    return (action$, _state$) => action$.pipe(
      ofType(AppActions.FETCH_ROOT_STARTED),
      switchMap(() => {
        return this.httpClient.get(environment.backendUrl)
          .pipe(
            map(hypermedia => this.actions.fetchRootSucceeded(hypermedia)),
            catchError(() => of(this.actions.fetchRootFailed()))
          );
      })
    );
  }
}
