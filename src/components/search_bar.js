import React, {Component} from 'react';  // Component remove need for React.Component

class SearchBar extends Component {  // extends React.Component

  constructor(props) {
    super(props);
    this.state = { term: 'Starting value'};
  }

  render () {
	  return (
      <div className="search-bar">
        <input
          value={this.state.term} // set the initial value of the field
          onChange={event => this.setState({ term: event.target.value }) }/>
      </div>
    );
  }
}

export default SearchBar;
