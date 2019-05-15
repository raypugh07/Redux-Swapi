import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getFriend} from '../actions/index'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getFriend();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Fetching Characters</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
/*const mapStateToProps=state=>({
  characters: state.charsReducer.characters,
  fetching:state.charsReducer.fetching,
  error:state.charsReducer.error

})*/

const mapStateToProps=state=>{
  return{
    characters: state.charsReducer.characters,
  fetching:state.charsReducer.fetching,
  error:state.charsReducer.error

  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {getFriend
    /* action creators go here */
  }
)(CharacterListView);
