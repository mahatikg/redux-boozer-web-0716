import  combineReducers  from 'redux';
// allows you to have a root reducer
import cocktailsReducer from './cocktails_reducer';
//calling the file you want so you can put it in the root reducer
// so you can call the root reducer elsewhere 

//

const rootReducer = combineReducers({
  cocktails: cocktailsReducer
})

export default rootReducer
