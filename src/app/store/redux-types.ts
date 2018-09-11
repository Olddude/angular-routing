import { Action } from 'redux';

export interface Action extends Action<string> {
  type: string;
  payload?: any;
  error?: boolean;
}
