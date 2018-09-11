import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';

import { RootState, rootReducer, initialRootState } from './root-reducer';
import { RootEpics } from './root-epics';

import { createEpicMiddleware } from 'redux-observable';
import { AppEpics } from './epics';
import { AppActions } from './actions';
import { DatapointsStoreModule } from '../datapoints/store/datapoints-store.module';


@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    DatapointsStoreModule
  ],
  providers: [
    RootEpics,
    AppEpics,
    AppActions
  ]
})

export class StoreModule {
  constructor(
    store: NgRedux<RootState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics
  ) {

    const epicMiddleWare = createEpicMiddleware();
    const middleWares = [epicMiddleWare];
    const storeEnhancer = devTools.isEnabled() ? [devTools.enhancer()] : [];

    store.configureStore(
      rootReducer,
      initialRootState,
      middleWares,
      storeEnhancer
    );

    epicMiddleWare.run(rootEpics.createRootEpic());

    ngReduxRouter.initialize();

  }
}
