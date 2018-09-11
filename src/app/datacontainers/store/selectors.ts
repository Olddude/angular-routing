import { DatacontainersState } from './reducer';

export function getHypermedia(datacontainersState: DatacontainersState) {
  return datacontainersState.hypermedia;
}
