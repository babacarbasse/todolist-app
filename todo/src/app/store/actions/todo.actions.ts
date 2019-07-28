import { Action } from '@ngrx/store';
import { ITodo } from './../../model/todo';
export enum ETodoAction {
  GetTodoList = '[Todo] get todo list',
  GetTodoListSuccess = '[Todo] get todo list success',
  GetTodoListError = '[Todo] get todo list error'
}

export class GetTodoList implements Action {
  readonly type = ETodoAction.GetTodoList;
}

export class GetTodoListSuccess implements Action {
  readonly type = ETodoAction.GetTodoListSuccess;
  constructor(public payload: Array<ITodo>) {}
}

export class GetTodoListError implements Action {
  readonly type = ETodoAction.GetTodoListError;
  constructor(public payload: any) {}
}

export type TodoListActions =
  | GetTodoList
  | GetTodoListSuccess
  | GetTodoListError;
