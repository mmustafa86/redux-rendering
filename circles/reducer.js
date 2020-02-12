const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];


const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

if(type==='ADD'){
  let newState =[...state]
  let states=newState[Math.floor(newState.length * Math.random())]
   console.log(states)
   newState.push(states)
  return newState
}

    // ACTION: Add a random circle
    
    return state;
}