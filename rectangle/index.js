const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

document.getElementById('height').addEventListener('click',e => dispatch({ type: 'IncrementHeight' ,value: +10}) )

document.getElementById('width').addEventListener('click',e => dispatch({ type: 'IncrementWidth' ,value: +10}) )
document.getElementById('red').addEventListener('click',e => dispatch({ type: 'CHANGE' ,color: "red"}) )
document.getElementById('blue').addEventListener('click',e => dispatch({ type: 'CHANGE' ,color: "blue"}) )
