// background Music from Youtube!!

function start() {
    const splash = document.getElementById("splash");
    const bgm = document.getElementById("bgm");

    // Play music right away, inside the click
    bgm.volume = 0.4;
    bgm.play().catch(err => console.log("Audio error:", err));

    // Fade out, then remove the splash screen
    splash.addEventListener("transitionend", () => splash.remove());
    splash.classList.add("hide");
    setTimeout(() => {
    document.querySelectorAll('.slide-in').forEach(el => el.classList.add('play'))
}, 400)
}

const songCover = document.getElementById("covers");
const songName = document.getElementById("songName");
const songArtist = document.getElementById("artist");

const playback = document.getElementById("playback");

const playbutton = document.getElementById("playSong");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

const songs = [
    {
        name: "Earrings",
        cover: "./Music/Earrings.jpg",
        artist: "Malcolm Todd",
        music: "./Music/Earrings.mp3"
    },
    {
         name: "BabyDoll",
        cover: "./Music/BabyDll.jpg",
        artist: "Dominic Fike",
        music: "./Music/Babydoll.mp3"
    },
    {
         name: "Sweater Weather",
        cover: "./Music/Sweater.jpg",
        artist: "The Neighbourhood",
        music: "./Music/Sweater.mp3"
    },
    {
         name: "Self Aware",
        cover: "./Music/selfaware.jpg",
        artist: "Temper City",
        music: "./Music/selfaware.mp3"
    },
    {
         name: "Sailor Song",
        cover: "./Music/sailor.jpg",
        artist: "Gigi Perez",
        music: "./Music/sailor.mp3"
    },
    {
         name: "A Wall",
        cover: "./Music/wall.jpg",
        artist: "Lover Boy",
        music: "./Music/wall.mp3"
    },
    {
         name: "505",
        cover: "./Music/505.jpg",
        artist: "Artic Monkeys",
        music: "./Music/505.mp3"
    },
    {
         name: "No 1 Party Anthem",
        cover: "./Music/party.jpg",
        artist: "Artic Monkeys",
        music: "./Music/party.mp3"
    },
    {
         name: "Bad Guy",
        cover: "./Music/bad.jpg",
        artist: "Billie Eilish",
        music: "./Music/bad.mp3"
    }
];

const audio = document.createElement("audio");
let currentSong = 0;

prev.addEventListener("click", function() {
    if (currentSong == 0) {
        return;
    }
    currentSong--;
    updateSong();

});

next.addEventListener("click", function() {
    if (currentSong == songs.length - 1) {
        return;
    }
    currentSong++;
    updateSong();
});

function updateSong() {
    const song = songs[currentSong];
    songCover.src = song.cover;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

}