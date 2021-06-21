import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {

  // const songSelectHandler = async () => {
  //   await setCurrentSong(song);
  //   audioRef.current.play();
  //   const newSongs = songs.map((song) => {
  //     if (song.id === id) {
  //       return {
  //         ...song,
  //         active: true,
  //       };
  //     } else {
  //       return {
  //         ...song,
  //         active: false,
  //       };
  //     }
  //   });
  //   setSongs(newSongs);
  // };

  const songSelectHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (isPlaying !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  }

  // is song playing
  if (isPlaying) audioRef.current.play();

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;