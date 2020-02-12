const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 


var input = document.getElementById("text")

input.addEventListener('keypress', e => {
    if(e.keyCode== 13){
e.preventDefault()
dispatch({ type: "ADD" ,value: input.value})
    } 
    // console.log(input.value)
 
 
})

