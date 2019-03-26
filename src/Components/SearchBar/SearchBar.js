import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.searchTerm);
  }

  handleTermChange(event) {
    const newTerm = event.target.value;
    return this.setState( {searchTerm: newTerm } )
  }
  
  render() {
    return ( 
      <div className = "SearchBar" >
        <input placeholder = "Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search}> SEARCH </a> 
      </div>
    )
  } 
};