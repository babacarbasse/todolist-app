import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store';
import { todoState } from './store/selectors/todo.selectors';
import { ITodoState } from './store/states/todo.state';
import { GetTodoList } from './store/actions/todo.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  $todoState = this.store.pipe(select(todoState));
  todoState: ITodoState;

  constructor(private http: HttpClient, private store: Store<IAppState>) {
    this.$todoState.subscribe(state => {
      this.todoState = state;
      console.log(state);
    });
  }

  loadTodoList() {
    if (this.todoState.loaded) {
      return;
    }
    this.store.dispatch(new GetTodoList());
  }

  getTodoList() {
    return this.http.get('http://localhost:3000/todo');
  }
}
