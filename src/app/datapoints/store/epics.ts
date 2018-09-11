import { Injectable } from '@angular/core';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DatapointsActions, DatapointsAction } from './actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatapointsEpics {
  constructor(private httpClient: HttpClient, private actions: DatapointsActions) {
  }

  createEpic() {
    return combineEpics(
      this.createfetchRootEpic(),
    );
  }

  createfetchRootEpic(): Epic<DatapointsAction> {
    return (action$, _state$) => action$.pipe(
      ofType(DatapointsActions.FETCH_ROOT_STARTED),
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
