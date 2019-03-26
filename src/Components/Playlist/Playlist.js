import React from 'react';
import './Playlist.css';
import { Tracklist } from '../Tracklist/Tracklist';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e) {
    const newName = e.target.value;
    this.props.onNameChange(newName);
  }

  render() {
    return (
      <div className = "Playlist" >
        <input defaultValue = {'New Playlist'} onChange={this.handleNameChange}/>
        <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className = "Playlist-save" onClick={this.props.onSave}> SAVE TO SPOTIFY </a> 
      </div>
    )
  }
};