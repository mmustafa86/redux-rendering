const initialState = [
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "The Moment That Truth Is Organized It Becomes A Lie",
        likes: 231,
        retweets: 12,
        replies: 21
    },
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        likes: 112,
        retweets: 2,
        replies: 24
    },
    {
        user: {
            handle: "@DigitalCrafts",
            username: "DigitalCrafts Bootcamp",
            isVerified: false,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "Sign up for our next course plz!",
        likes: 11,
        retweets: 3,
        replies: 144
    }
]
;

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    // console.log(state)
    const { type } = action;
let newState=[...state]
    // ACTION 1 - Sort by # likes
if(type==="likes"){
let sort=newState.sort(function(a,b){
    return a.likes-b.likes
})
// newState.push(sort)
console.log(newState)

return newState;

}
    // ACTION 2 - Sort by # retweets
    if(type==="retweets"){
        let sort=newState.sort(function(a,b){
            return a.retweets-b.likes
        })
       
        console.log(newState)
     return newState;
        }
    // ACTION 3 - Sort by # replies
    if(type==="replies"){
        let sort=newState.sort(function(a,b){
            return a.replies-b.replies
        })
        
        console.log(newState)
       return newState;
        }
    return state;
}