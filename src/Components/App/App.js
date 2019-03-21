import React from 'react';
import { SearchBar } from './SearchBar'; //Create Search Bar componenet import & export
import { SearchResults } from './SearchResults'; //Creat SearchResults component import & export
import { Playlist } from './Playlist'; //Creat Playlist componenet import & export
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = [
       {
        name: 'name',
        artist: 'artist',
        album: 'album',
        id: 'id'
      }
    ]
  }
  render() {
    return (
      <div >
        <h1 > Ja 
          <span className = "highlight" > mmm </span>ing</h1>
        <div className = "App" >
          < SearchBar />
        <div className = "App-playlist" >
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div> 
        </div> 
      </div>
      )
  }

}

export default App;
