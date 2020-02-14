const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];
var cards =function (){
    var suits = ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H',
    'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D',
    'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S',
    'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'];
    var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    var card = [];
for (var i = 0; i < suits.length; i++) {
    card.push({
        value: values[i],
        suit: suits[i],
       
    });

}
return card
}
// console.log(cards())
var items=cards()
console.log(items)


const reducer = (state = items, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
//    console.log(state)
    let newState=[...state]
    
    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if(type==='ADD'){
       
        let states=newState[Math.floor(newState.length * Math.random())]
         console.log(newState)
         newState.push(states)
        return newState
      }
    return state;
}