import React from "react";

const LibrarySong = ({
	song,
	setCurrentSong,
	songs,
	audioRef,
	isSongPlaying,
}) => {
	const songSelectHandler = async () => {
		// const [selectedSong] = songs.filter((state) => state.id === song.id);
		await setCurrentSong(song);
		const previousSong = songs.findIndex((s) => s.active === true);
		songs[previousSong].active = false;
		song.active = true;
	};
	if (isSongPlaying) audioRef.current.play();

	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active && "selected"}`}
		>
			<img src={song.cover} alt="song pic" />
			<div className="song-description">
				<h3>{song.songName}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
