import React, { Component } from 'react';

export default class App extends Component {
  render(){
    return(
      <div>hello, there</div>
    )
  }
}

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