import { RouterReducerState } from '@ngrx/router-store';
import { ITodoState } from './todo.state';

export interface IAppState {
  router?: RouterReducerState;
  todoList: ITodoState;
}
