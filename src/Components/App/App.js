import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar'; //Create Search Bar componenet import & export
import { SearchResults } from '../SearchResults/SearchResults'; //Creat SearchResults component import & export
import { Playlist } from '../Playlist/Playlist'; //Creat Playlist componenet import & export
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.searchResults = [
       {
        name: 'name',
        artist: 'artist',
        album: 'album',
        id: 'id'
      }
    ];
    this.state.playlistName = 'Playlist Name';
    this.state.playlistTracks = [
      {
        name: 'name',
        artist: 'artist',
        album: 'album',
        id: 'id'
    }
  ];
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    // if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    //   return
    // }
    //   this.state.playlistTracks.push(track);
  }

  removeTrack(track) {
    // if (this.state.playlistName.find(savedTrack => savedTrack.id === track.id)) {
    //   return
    // }
    //   this.state.playlistTracks.filter(savedTrack => savedTrack.id != track.id)
  }
  render() {
    return (
      <div >
        <h1> Ja 
          <span className = "highlight" > mmm </span>ing
        </h1>
        <div className = "App" >
          <SearchBar/>
        <div className = "App-playlist" >
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack()}/>
        </div> 
        </div> 
      </div>
      )
  }

}

export default App;
