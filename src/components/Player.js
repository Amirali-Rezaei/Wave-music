import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
	setCurrentSong,
	songs,
	isSongPlaying,
	setIsSongPlaying,
	audioRef,
	setSongInfo,
	songInfo,
	currentSong,
	setSongs,
}) => {
	// Event Handlers

	const activeLibraryHandler = (nextPrevious) => {
		const newSongs = songs.map((song) => {
			if (song.id === nextPrevious.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});

		setSongs(newSongs);
	};

	const playSongHandler = () => {
		if (!isSongPlaying) {
			audioRef.current.play();
			setIsSongPlaying(!isSongPlaying);
		} else {
			audioRef.current.pause();
			setIsSongPlaying(!isSongPlaying);
		}
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) +
			":" +
			("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const skipTrackHandler = async (direction) => {
		const currentSongIndex = songs.findIndex(
			(song) => song.id === currentSong.id
		);

		if (direction === "forward") {
			await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentSongIndex + 1) % songs.length]);
		}
		if (direction === "back") {
			if ((currentSongIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryHandler(songs[songs.length - 1]);
				if (isSongPlaying) audioRef.current.play();
				return;
			}
			await setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
			activeLibraryHandler(songs[(currentSongIndex - 1) % songs.length]);
		}

		if (isSongPlaying) audioRef.current.play();
	};

	// Add the styles
	const trackAnimation = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<div
					style={{
						background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
					}}
					className="track"
				>
					<input
						type="range"
						min={0}
						max={songInfo.duration || "00:00"}
						value={songInfo.currentTime}
						onChange={dragHandler}
					/>
					<div style={trackAnimation} className="animate-track"></div>
				</div>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon
					className="skipBack"
					size="2x"
					icon={faAngleLeft}
					onClick={() => skipTrackHandler("back")}
				/>
				<FontAwesomeIcon
					className="play"
					size="2x"
					icon={isSongPlaying ? faPause : faPlay}
					onClick={playSongHandler}
				/>
				<FontAwesomeIcon
					className="skipForward"
					size="2x"
					icon={faAngleRight}
					onClick={() => skipTrackHandler("forward")}
				/>
			</div>
		</div>
	);
};

export default Player;
