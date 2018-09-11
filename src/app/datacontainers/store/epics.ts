import { Injectable } from '@angular/core';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DatacontainersActions, DatacontainersAction } from './actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatacontainersEpics {
  constructor(private httpClient: HttpClient, private actions: DatacontainersActions) {
  }

  createEpic() {
    return combineEpics(
      this.createfetchRootEpic(),
    );
  }

  createfetchRootEpic(): Epic<DatacontainersAction> {
    return (action$, _state$) => action$.pipe(
      ofType(DatacontainersActions.FETCH_ROOT_STARTED),
      switchMap(action => {
        return this.httpClient.get(action.payload)
          .pipe(
            map(hypermedia => this.actions.fetchRootSucceeded(hypermedia)),
            catchError((err) => of(this.actions.fetchRootFailed(err)))
          );
      })
    );
  }
}
