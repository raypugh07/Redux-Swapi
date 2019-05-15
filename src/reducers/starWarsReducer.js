import {FRIEND_FETCH,FRIEND_SUCCESS,FRIEND_FAIL} from "../actions";


const initialState = {
  fetching:false,
  characters: [],
  
  error:null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FRIEND_FETCH:
    return{
      ...state,
      fetching:true,
     error:null
      }
    case FRIEND_SUCCESS:
    return{
      ...state,
      
      //error:null,
      characters:[...state.characters,...action.payload],
      fetching:false

    }
    case FRIEND_FAIL:
    return{
    ...state,
    fetching:false,
    error:action.payload

    }
    default:
      return state;
  }
};
