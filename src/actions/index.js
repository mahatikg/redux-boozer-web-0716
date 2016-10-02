const defaultCocktails = [{id: 1, name: 'Gin and Tonic'}, {id: 2, name: 'Old Fashioned'}, {id: 3, name: 'Negroni'}, {id: 4, name: 'Roy Rogers'}];
// ^^ the array of cocktail objects that you will call as the payload

export function fetchCocktails(){
  // this action fuction simply calls an action called Fetch Cocktails
  // with a payload of the cocktail array! 
  return {
    type: 'FETCH_COCKTAILS',
    payload: defaultCocktails

  }
}
