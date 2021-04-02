import { Todo, FetchTodosAction  } from '../actions'
import { ActionTypes } from '../actions/types'

export const todosReducer = (todos: Todo[] = [], action: FetchTodosAction) => {
  switch(action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return todos;
  }
}