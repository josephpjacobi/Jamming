import React from 'react';
import './TrackList.css';
import { Track } from './Track'; 

class Tracklist extends React.Component {
  render() {
    <div className = "TrackList" >
      this.props.tracks.map((track) => {
        <Track track={track} key={track.id} />
      })
    </div>
  }
};


export default Tracklist;