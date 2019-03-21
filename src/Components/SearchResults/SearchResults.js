import React from 'react';
import { TrackList } from './TrackList'; //Import TrackList Component
import './SearchResults.css';

class SearchResults extends React.Component {
  render() {
    <div className="SearchResults" >
      <h2> Results </h2>
      <TrackList tracks = {this.props.searchResults}/>
    </div>
  }
};

export default SearchResults;