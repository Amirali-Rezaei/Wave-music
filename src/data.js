import { v4 as uuid } from "uuid";

const chillHop = () => {
	return [
		{
			songName: "Starlink",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=43682",
			cover: "https://chillhop.com/wp-content/uploads/2022/07/e4292fd3128da3eb44c528641e120ab67be129a9-1024x1024.jpg",
			color: ["#BDBA8A", "#274D72"],
			artist: "Idealism, SwuM",
			id: uuid(),
			active: true,
		},
		{
			songName: "Know by Now",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=43680",
			cover: "https://chillhop.com/wp-content/uploads/2022/07/e4292fd3128da3eb44c528641e120ab67be129a9-1024x1024.jpg",
			color: ["#BDBA8A", "#274D72"],
			artist: "Idealism, SwuM",
			id: uuid(),
			active: false,
		},
		{
			songName: "Passing Storm",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=42056",
			cover: "https://chillhop.com/wp-content/uploads/2022/07/dddab0f5dcf8d0cc3e6276b6d8bff791795a2499-1024x1024.jpg",
			color: ["#2E3833", "#B2854B"],
			artist: "Thomas Prime, Moderator",
			id: uuid(),
			active: false,
		},
		{
			songName: "Flight Mode",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=43903",
			cover: "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
			color: ["#63CDAD", "#669973"],
			artist: "J.Folk",
			id: uuid(),
			active: false,
		},
		{
			songName: "Snoopy's House",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=37131",
			cover: "https://chillhop.com/wp-content/uploads/2022/05/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
			color: ["#E76C16", "#004143"],
			artist: "Sleepy Fish, coa",
			id: uuid(),
			active: false,
		},
		{
			songName: "Everyday",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=41890",
			cover: "https://chillhop.com/wp-content/uploads/2022/07/973ae6f7b847fbfe9e2f6a2efbf2a9121ac8285f-1024x1024.jpg",
			color: ["#B58E5A", "#562924"],
			artist: "Aves",
			id: uuid(),
			active: false,
		},
		{
			songName: "Night Owl",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=35641",
			cover: "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
			color: ["#C082FE", "#381FBF"],
			artist: "brillion",
			id: uuid(),
			active: false,
		},
		{
			songName: "Empty Place",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=35664",
			cover: "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
			color: ["#C082FE", "#381FBF"],
			artist: "Psalm Trees, ALEXANDER",
			id: uuid(),
			active: false,
		},
		{
			songName: "Minnie",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=35660",
			cover: "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
			color: ["#C082FE", "#381FBF"],
			artist: "HM Surf, Mama Aiuto",
			id: uuid(),
			active: false,
		},
	];
};

export default chillHop;
