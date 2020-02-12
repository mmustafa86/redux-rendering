const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type ,value} = action;
    let newState = [...state]
  
    if (type === 'ADD') {
        console.log(value)
        newState.push(value)
       return newState

}
console.log(newState)
    return state;
}