import React from "react";

import TrackList from "../TrackList/TrackList";

import "./Playlist.css";

class Playlist extends React.Component {
  handleNameChange = (event) => {
    this.props.onNameChange(event.target.value);
  };

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={"New Playlist"} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
