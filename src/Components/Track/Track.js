import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack.bind(this);
  }

  renderAction(isRemoval) {        //Double Check this method//
    if (isRemoval) {
      return <a className= "Track-action">-</a>
    }
      return <a className="Track-action" onClick={this.addTrack}>+</a>
  }

  addTrack() {
    this.props.onAdd(this.props.track)
  }

  removeTrack() {
    this.props.onRemoval(this.props.track)
  }
  
  render() {
    return (
      <div className = "Track" >
        <div className = "Track-information" >
          <h3> 
            {this.props.track.name}
          </h3>
          <p> 
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div> 
        <a className="Track-action"></a>
      </div>
    )
  }
};