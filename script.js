function showMessage() {
    alert("Welcome to MusicHub ??");
}

function playSong() {
    alert("Music player will be added soon ??");
}
// ================================
// SONG DATA
// ================================

const songs = [

    {
        title: "Song One",
        artist: "Artist One",
        file: "music/song1.mp3"
    },

    {
        title: "Song Two",
        artist: "Artist Two",
        file: "music/song2.mp3"
    },

    {
        title: "Song Three",
        artist: "Artist Three",
        file: "music/song3.mp3"
    }

];


// ================================
// ELEMENTS
// ================================

const audio =
    document.getElementById("audio");

const playButton =
    document.getElementById("playButton");

const progress =
    document.getElementById("progress");

const volume =
    document.getElementById("volume");

const currentSong =
    document.getElementById("currentSong");

const currentArtist =
    document.getElementById("currentArtist");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");


// Current song number

let songIndex = 0;


// ================================
// LOAD SONG
// ================================

function loadSong(index) {

    songIndex = index;

    currentSong.textContent =
        songs[index].title;

    currentArtist.textContent =
        songs[index].artist;

    audio.src =
        songs[index].file;

    audio.load();

}


// ================================
// SELECT SONG
// ================================

function selectSong(index) {

    loadSong(index);

    audio.play();

    playButton.textContent = "?";

}


// ================================
// PLAY / PAUSE
// ================================

function playPause() {

    if (audio.paused) {

        audio.play();

        playButton.textContent = "?";

    } else {

        audio.pause();

        playButton.textContent = "?";

    }

}


// ================================
// NEXT SONG
// ================================

function nextSong() {

    songIndex++;

    if (songIndex >= songs.length) {

        songIndex = 0;

    }

    loadSong(songIndex);

    audio.play();

    playButton.textContent = "?";

}


// ================================
// PREVIOUS SONG
// ================================

function previousSong() {

    songIndex--;

    if (songIndex < 0) {

        songIndex = songs.length - 1;

    }

    loadSong(songIndex);

    audio.play();

    playButton.textContent = "?";

}


// ================================
// PROGRESS BAR
// ================================

audio.addEventListener(
    "timeupdate",
    function () {

        if (audio.duration) {

            let percent =
                (audio.currentTime /
                audio.duration) * 100;

            progress.value = percent;


            currentTime.textContent =
                formatTime(
                    audio.currentTime
                );


            duration.textContent =
                formatTime(
                    audio.duration
                );

        }

    }
);


// ================================
// CHANGE SONG POSITION
// ================================

progress.addEventListener(
    "input",
    function () {

        if (audio.duration) {

            audio.currentTime =
                (progress.value / 100)
                * audio.duration;

        }

    }
);


// ================================
// VOLUME
// ================================

volume.addEventListener(
    "input",
    function () {

        audio.volume =
            volume.value;

    }
);


// ================================
// AUTOMATIC NEXT SONG
// ================================

audio.addEventListener(
    "ended",
    function () {

        nextSong();

    }
);


// ================================
// FORMAT TIME
// ================================

function formatTime(time) {

    if (isNaN(time)) {

        return "0:00";

    }

    let minutes =
        Math.floor(time / 60);

    let seconds =
        Math.floor(time % 60);


    if (seconds < 10) {

        seconds = "0" + seconds;

    }


    return minutes + ":" + seconds;

}


// ================================
// OLD HOME PAGE BUTTON
// ================================

function showMessage() {

    alert(
        "Welcome to MusicHub ??"
    );

}


// ================================
// LOAD FIRST SONG
// ================================

loadSong(0);
file: "music/song1.mp3"
file: "music/song2.mp3"
file: "music/song3.mp3"