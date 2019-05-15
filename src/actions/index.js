import axios from 'axios'

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export const FRIEND_FETCH='FRIEND_FETCH'
export const FRIEND_SUCCESS='FRIEND_SUCCESS'
export const FRIEND_FAIL='FRIEND_FAIL'

export const getFriend=()=>dispatch=>{
    dispatch({type:FRIEND_FETCH});
    axios.get('https://swapi.co/api/people/')
    .then(({ data })=>{
        dispatch({type:FRIEND_SUCCESS,payload:data.results})
})
.catch(err=>{
    
    dispatch({
        type:FRIEND_FAIL,
        payload:err
         })
    })
}


