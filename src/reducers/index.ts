import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

/* specifying the shape of State in general */
export interface StoreState {
  todos: Todo[];
}

const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});

export default reducers;
