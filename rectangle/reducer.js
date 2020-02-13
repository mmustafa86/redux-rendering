const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, value ,color } = action;

    // ACTION 1 - Increment height by 10
if (type==="IncrementHeight"){
    return {
        height: state.height + value,
        width: state.width,
        color: state.color
    }
    
}
// ACTION 2 - Increment width by 10
if(type==="IncrementWidth"){
    return {
        width: state.width + value,
        height: state.height,
        color: state.color
    }
}

    // ACTION 3 - Change the color
    if(type==="CHANGE"){
        return{
        width: state.width,
        height: state.height,
        color: color
        }
    }

    return state;
}