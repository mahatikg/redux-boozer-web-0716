
export default function cocktailsReducer(state=[], action){

  switch (action.type) {
    case 'FETCH_COCKTAILS': // if this action return the action with the payload
      return action.payload;

    default: // otherwise just return the regular state 
      return state;
  }
}
