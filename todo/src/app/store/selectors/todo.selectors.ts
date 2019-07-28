import { IAppState } from '../states';
import { createSelector } from '@ngrx/store';
import { ITodoState } from '../states/todo.state';

export const todoState = (state: IAppState): ITodoState => state.todoList;

export const selectDataFromTodoState = createSelector(
  todoState,
  (state: ITodoState) => {
    return state.data;
  }
);
