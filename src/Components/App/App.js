import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar'; 
import { SearchResults } from '../SearchResults/SearchResults'; 
import { Playlist } from '../Playlist/Playlist'; 
import { Spotify } from '../../util/Spotify';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.searchResults = [  //NEED TO CHANGE THIS this.search()
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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
      const addNewTrack = this.state.playlistTracks.push(track);
      return this.setState( {playlistTracks: addNewTrack} );
  }

  removeTrack(track) {
    const newPlaylist = this.state.playlistTracks.filter(savedTrack => savedTrack.id === track.id)
    return this.setState( {playlistTracks: newPlaylist} );
  }

  updatePlaylistName(name) {
   const newPlaylistName = name ;
   return this.setState( {playlistName: newPlaylistName });
  }

  savePlaylist() {
    const savePlaylistName = this.state.playlistName;
    const trackURIs = [];

  }

  search(searchTerm) {
    // const search = Spotify.search(searchTerm);
    // return this.setState({ searchResults: search });
    Spotify.getAccessToken();
  }

  render() {
    return (
      <div >
        <h1> Ja 
          <span className = "highlight" > mmm </span>ing
        </h1>
        <div className = "App" >
          <SearchBar onSearch={this.search}/>
        <div className = "App-playlist" >
          <SearchResults searchResults={this.state.searchResults} onAdd={this.state.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.state.removeTrack} onNameChange={this.state.updatePlaylistName} onSave={this.state.savePlaylist}/>
        </div> 
        </div> 
      </div>
      )
  }

}

export default App;
