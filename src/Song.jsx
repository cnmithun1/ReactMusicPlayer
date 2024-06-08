import React from "react";
import "./index.css";

const Song = ({ track, isPlaying }) => {
  return (
    <div className={`song ${isPlaying ? "playing" : "paused"}`}>
      <h2>{track.title}</h2>
      <h3>{track.artist}</h3>
    </div>
  );
};

export default Song;
