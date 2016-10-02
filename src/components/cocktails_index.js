import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import * as actions from '../actions/index'
import {bindActionCreators} from 'redux'
// does things like dispatcher action and lets mapstatetoprops stuff work

//not entirely sure what line three does

//importing all the stuff you need

 function CocktailsIndex (props) {
  // a function that displays the cocktails
  //almost exactly like def index
  debugger;
  return (
    <div>
      <h1>Cocktail List</h1>
      <ul>
        {props.cocktails.map(cocktail => <Link to={`/cocktails/${cocktail.id}`}><li key={cocktail.id}>{cocktail.name}</li></Link>)}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  return{
    cocktails:state.cocktails
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CocktailsIndex)
