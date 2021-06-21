import React from 'react';
import LibrarySong from './LibrarySong';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, setLibraryStatus }) => {

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <div className="library-header">
        <h2>Library</h2>
        <span onClick={() => setLibraryStatus(!libraryStatus)}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div >
  );
}

export default Library;