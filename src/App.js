import React, { useState, useRef } from "react";

// Adding Styles
import "./styles/App.scss";

// Adding components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

// Adding songs
import data from "./data";

function App() {
	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isSongPlaying, setIsSongPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		duration: 0,
		currentTime: 0,
		animationPercentage: 0,
	});
	const [isLibraryOpen, setIsLibraryOpen] = useState(false);

	// Ref
	const audioRef = useRef(null);

	// Function
	const timeUpdateHandler = (e) => {
		const { currentTime, duration } = e.target;
		// Calculate Animation Percentage
		const roundedCurrentTime = Math.round(currentTime);
		const roundedDuration = Math.round(duration);
		const animationPercentage = Math.round(
			(roundedCurrentTime / roundedDuration) * 100
		);
		setSongInfo({
			...songInfo,
			currentTime,
			duration,
			animationPercentage,
		});
	};

	const songEndHandler = async () => {
		const currentSongIndex = songs.findIndex(
			(song) => song.id === currentSong.id
		);

		await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);

		if (isSongPlaying) audioRef.current.play();
	};

	return (
		<div className={`App ${isLibraryOpen && "library-active"}`}>
			<Nav
				isLibraryOpen={isLibraryOpen}
				setIsLibraryOpen={setIsLibraryOpen}
			/>
			<Song currentSong={currentSong} isSongPlaying={isSongPlaying} />
			<Player
				isSongPlaying={isSongPlaying}
				setIsSongPlaying={setIsSongPlaying}
				currentSong={currentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setCurrentSong={setCurrentSong}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isSongPlaying={isSongPlaying}
				isLibraryOpen={isLibraryOpen}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={songEndHandler}
			></audio>
		</div>
	);
}

export default App;
