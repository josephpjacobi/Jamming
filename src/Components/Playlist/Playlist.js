import React from 'react';
import './Playlist.css';
import { Tracklist } from '';

class Playlist extends React.Component {
  render() {
    <div className = "Playlist" >
      <input defaultValue = {'New Playlist'} />
      <TrackList />
      <a className = "Playlist-save" > SAVE TO SPOTIFY </a> 
    </div>
  }
};


export default Playlist;