import { ITodoState } from '../states/todo.state';
import { TodoListActions, ETodoAction } from '../actions/todo.actions';
import { ITodo } from 'src/app/model/todo';

const initialState: ITodoState = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
  entities: {}
};
export function todoReducer(
  state = initialState,
  action: TodoListActions
): ITodoState {
  switch (action.type) {
    case ETodoAction.GetTodoList:
      return {
        ...state,
        loading: true
      };
    case ETodoAction.GetTodoListError:
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    case ETodoAction.GetTodoListSuccess:
      const data = action.payload;
      const $entities = action.payload.reduce((entities, todo): {
        [id: string]: ITodo;
      } => {
        return {
          ...entities,
          [todo._id]: todo
        };
      }, {});
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
        entities: $entities
      };
    default:
      return state;
  }
}
