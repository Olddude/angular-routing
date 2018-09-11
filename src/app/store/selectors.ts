import { RootState } from './root-reducer';

export function getHypermedia(rootState: RootState) {
  return rootState.app.hypermedia;
}

