import { Todo, Action, ActionTypes } from '../actions';

/* because there are multiple possible actions for this reducer,
it's easier to import them as one variable which is defined in actions/types */
export const todosReducer = (todos: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return todos.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return todos;
  }
};
