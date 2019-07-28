import { Injectable } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {
  GetTodoList,
  GetTodoListSuccess,
  ETodoAction,
  GetTodoListError
} from './../actions/todo.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class TodoEffects {
  constructor(private action$: Actions, private todoService: TodoService) {}

  @Effect()
  getTodoList$ = this.action$.pipe(
    ofType<GetTodoList>(ETodoAction.GetTodoList),
    switchMap(() => this.todoService.getTodoList()),
    switchMap((todos: any) => of(new GetTodoListSuccess(todos))),
    catchError(err => of(new GetTodoListError(err)))
  );
}
