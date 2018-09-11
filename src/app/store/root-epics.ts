import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';
import { AppEpics } from './epics';

@Injectable()
export class RootEpics {
  constructor(
    private appEpics: AppEpics
  ) { }

  public createRootEpic() {
    return combineEpics(
      this.appEpics.createEpic()
    );
  }
}
