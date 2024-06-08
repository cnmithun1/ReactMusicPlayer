import React, { useState, useEffect } from "react";
import Song from "./Song";
import "./index.css";

const Player = () => {
  const [playlist, setPlaylist] = useState([
    {
      title: "Smack That",
      artist: "Akon",
    },
    { title: "Single Ladies", artist: "beyonce" },
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Waka Waka", artist: "Shakira" },
    { title: "On the floor", artist: "Jennifer Lopez" },
    { title: "Perfect Duet", artist: "Ed Sheeran" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    // Display the first track initially
    setCurrentIndex(0);
  }, [playlist]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    if (isShuffle) {
      setCurrentIndex(Math.floor(Math.random() * playlist.length));
    } else {
      setCurrentIndex((currentIndex + 1) % playlist.length);
    }
  };

  const handleSkipBackward = () => {
    setCurrentIndex((currentIndex - 1 + playlist.length) % playlist.length);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  return (
    <div className="player">
      <Song track={playlist[currentIndex]} isPlaying={isPlaying} />
      <div className="controls">
        <button onClick={handleSkipBackward}>Previous</button>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={handleSkipForward}>Next</button>
        <button onClick={toggleShuffle}>
          {isShuffle ? "Disable Shuffle" : "Enable Shuffle"}
        </button>
      </div>
    </div>
  );
};

export default Player;
