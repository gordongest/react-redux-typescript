import { FetchTodosAction, DeleteTodoAction } from './todos';

/* protecting action types */
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

/* exporting Action interfaces from todos.ts */
export type Action = FetchTodosAction | DeleteTodoAction;