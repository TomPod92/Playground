import React, { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();
// -------------------------------------------
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'increment':
      return {...state, firstCounter: state.firstCounter + 1}
    case 'increment2':
      return {...state, secondCounter: state.secondCounter + 1}
    case 'decrement':
      return {...state, firstCounter: state.firstCounter - 1}
    case 'reset':
      return initialState
    default:
      return state
  }
}
// -------------------------------------------
export const ContextAndReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="centered">
          <div>Count: {count.firstCounter}</div>
          <div>Count2: {count.secondCounter}</div>
          <button onClick={() => dispatch({type: 'add', value: 5})}>Dodaj liczbe</button>
          <button onClick={() => dispatch({type: 'increment'})}>Dodaj 1</button>
          <button onClick={() => dispatch({type: 'increment2'})}>Dodaj 1 do drugiego</button>
          <button onClick={() => dispatch({type: 'decrement'})}>Odejmij 1</button>
          <button onClick={() => dispatch({type: 'reset'})}>Resetuj</button>
          <ComponentA />
          <hr/>
      </div>
    </CountContext.Provider>
  )
}
// -------------------------------------------
const ComponentA = () => {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component A: {countContext.countState.firstCounter}
      <button onClick={() => countContext.countDispatch({type:'increment'})}>Dodaj 1</button>
      <ComponentB />
      <ComponentC />
    </div>
  )
}

const ComponentB = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component B: {countContext.countState.firstCounter}
      <button onClick={() => countContext.countDispatch({type:'increment'})}>Dodaj 1</button>
    </div>
  )
}

const ComponentC = () => {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component C: {countContext.countState.firstCounter}
      <button onClick={() => countContext.countDispatch({type:'increment'})}>Dodaj 1</button>
    </div>
  )
}
// -------------------------------------------