import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

/* specify the props App expects */
/* type fetchTodos as Function instead of itself - gets rid of error at export */
/* add Function as return type to fetchTodos in /actions/types */
interface AppProps {
  todos: Todo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}

/* pass in the prop interface as the generic type */
class _App extends Component<AppProps> {
  componentDidMount() {}

  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map(
      (todo: Todo): JSX.Element => {
        return (
          <div key={todo.id}>
            {todo.title}
            <button onClick={() => this.onTodoClick(todo.id)}>Delete</button>
          </div>
        );
      }
    );
  }

  /* render methods return the type JSX.Element */
  render(): JSX.Element {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

/* using destructuring in place of state/state.todos */
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

/* only exporting the redux-connected App */
/* TS throws an error around _App because it doesn't understand thunk actions - no fix */
/* see line 7 */
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// /* in order to pass in a prop without getting an error, we have to specify an interface */
// /* if there is a case where the component may not receive props, mark them as optional */
// interface AppProps {
//   color?: string;
// }

// interface AppState {
//   counter: number
// }

// /* Component is by default a generic class that can take multiple types */
// /* P = props, S = state (default read-only) */
// class App extends Component<AppProps, AppState> {
//   /* initializing state in the constructor REQUIRES passing in a state type */
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 }
//   }

//   /* default read-only state can also be over-written by re-assigning it without a constructor */
//   // state = { counter: 0 }

//   /* in order to use this functional pattern, Component MUST receive state type */
//   onIncrement = (): void => {
//     this.setState((prevState) => ({
//       counter: prevState.counter + 1,
//     }));
//   };

//   onDecrement = (): void => {
//     this.setState((prevState) => ({
//       counter: prevState.counter - 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.onIncrement}>increment</button>
//         <button onClick={this.onDecrement}>decrement</button>
//       </div>
//     );
//   }
// }

/* FUNCTIONAL COMPONENT */
// const App2 = (props: AppProps): JSX.Element => {
//   return (
//     <h1>{props.color}</h1>
//   )
// }
