import React from "react";

const Song = ({ currentSong, isSongPlaying }) => {
	return (
		<div className="song-container">
			<img
				src={currentSong.cover}
				alt="song pic"
				className={`${isSongPlaying && "image-rotate"}`}
			/>
			<h2>{currentSong.songName}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
