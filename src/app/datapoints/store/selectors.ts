import { DatapointsState } from './reducer';

export function getHypermedia(datapointsState: DatapointsState) {
  return datapointsState.hypermedia;
}
