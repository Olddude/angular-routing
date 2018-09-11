import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';
import { AppEpics } from './epics';
import { DatapointsEpics } from '../datapoints/store/epics';
import { DatacontainersEpics } from '../datacontainers/store/epics';

@Injectable()
export class RootEpics {
  constructor(
    private appEpics: AppEpics,
    private datapointsEpics: DatapointsEpics,
    private datacontainersEpics: DatacontainersEpics
  ) { }

  public createRootEpic() {
    return combineEpics(
      this.appEpics.createEpic(),
      this.datapointsEpics.createEpic(),
      this.datacontainersEpics.createEpic()
    );
  }
}
