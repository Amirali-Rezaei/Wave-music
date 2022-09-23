import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
	songs,
	setCurrentSong,
	audioRef,
	isSongPlaying,
	isLibraryOpen,
}) => {
	return (
		<div className={`library ${isLibraryOpen && "active-library"}`}>
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map((song) => (
					<LibrarySong
						key={song.id}
						song={song}
						setCurrentSong={setCurrentSong}
						songs={songs}
						audioRef={audioRef}
						isSongPlaying={isSongPlaying}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
