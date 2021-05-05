import React from "react";

const Song = ({ currentSong, isPlaying, songInfo }) => {
  // Add styles
  const perc = (songInfo.currentTime / songInfo.duration) * 100;
  console.log(perc);
  const degree = 12 * perc;
  const trackAnim = {
    transform: `rotate(${degree}deg)`,
    transitionDuration: `0.5s`,
  };

  return (
    <div className="song-container">
      <img
        style={trackAnim}
        alt={currentSong.name}
        src={currentSong.cover}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
