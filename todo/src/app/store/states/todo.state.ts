import { ITodo } from 'src/app/model/todo';

export interface ITodoState {
  data: Array<ITodo>;
  entities: { [id: string]: ITodo };
  loaded: boolean;
  loading: boolean;
  error: any;
}
