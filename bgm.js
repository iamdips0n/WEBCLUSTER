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

// Giving Names To different parts of our music player
const songCover = document.getElementById("covers");
const songName = document.getElementById("songName");
const songArtist = document.getElementById("artist");

const playback = document.getElementById("playback");

const playbutton = document.getElementById("playSong");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

// listing every sond and their assets
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
    },
    // I love this hindi song <3
    { 
         name: "Dilruba Dilnashi",
        cover: "./Music/dilruba.jpg",
        artist: "Rito Riba",
        music: "./Music/Dilruba.mp3"
    }
];

//New and Cool Background for our music player

function showMusicVideo() {
    document.body.classList.add("musicvideo-active");
if (musicvideo) {
    musicvideo.play().catch(err => console.log("Video Error:", err));
}
}

function hideMusicVideo() {
    document.body.classList.remove("musicvideo-active");
    if (musicvideo) {
        musicvideo.pause();
    }
}

// make the ssets appear in the player, cool!!
const audio = document.createElement("audio");
let currentSong = 0;
updateSong();

prev.addEventListener("click", function() {
    if (currentSong == 0) {
        return;
    }
    currentSong--;
    updateSong();

});

// Switch songs if you dont like, but you will definately like it!!!
next.addEventListener("click", function() {
    if (currentSong == songs.length - 1) {
        return;
    }
    currentSong++;
    updateSong();
});

// change in play and pause button, just making it cool!!
playbutton.addEventListener("click", function() {
    if (!audio.paused) {
        audio.pause();
    }
    else {
        audio.play();
    }
    
});
// play and pause icons from fontawesome
function changeplayicon() {
    if (audio.paused) {
        playbutton.className = "fa-solid fa-play fa-2x";
    }
    else {
        playbutton.className = "fa-solid fa-pause fa-2x";
    }

}
// Change play and pause icon as well as play and pause the background video
audio.addEventListener("play", function() {
    if (bgm) {
        bgm.pause();
    }
    changeplayicon();
    showMusicVideo();
});

audio.addEventListener("pause", function()  {
    changeplayicon();
    hideMusicVideo();
    bgm.play();
});

audio.addEventListener("ended", function() {
    changeplayicon();
    hideMusicVideo();
    bgm.play();
});


//play the audio of song, 
function updateSong() {
    const song = songs[currentSong];
    const playing = !audio.paused;

    songCover.src = song.cover;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

    audio.src = song.music;
    if (playing) audio.play();
    changeplayicon();

    audio.onloadedmetadata = function() {
        playback.value = 0;
    playback.max = audio.duration;
    }
}
// playback bar or slider functions, making the music player more cooler!!
playback.addEventListener("change", function() {
    audio.currentTime = playback.value;
});

// can skip into any part of song, hurray!!
function movePlayback() {
    playback.value = audio.currentTime;
};

setInterval(movePlayback, 1000);


