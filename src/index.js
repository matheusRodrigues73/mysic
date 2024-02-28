import allSongsArray from "./allSongsArray.js";
import fillButtons from "./fillButtons.js";
import sortAlphabetcal from "./sortAlphabetcal.js";
import "./style.css";
import toggleButton from "./toggleButton.js";

const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const shuffleButton = document.querySelector("#shuffle");

const playerSongTitle = document.querySelector("#player-song-title");
const playerSongArtist = document.querySelector("#player-song-artist");
const playlistSongs = document.querySelector("#playlist-songs");

const audio = new Audio();

const allSongs = allSongsArray;

const userData = {
  songs: sortAlphabetcal(allSongs),
  currentSong: null,
  songCurrentTime: 0,
};

fillButtons(playButton, pauseButton, previousButton, nextButton, shuffleButton);

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
  if (userData?.currentSong?.id === song.id) {
    audio.currentTime = userData.songCurrentTime;
  } else if (userData?.currentSong !== song) {
    userData.currentSong = song;
    userData.songCurrentTime = 0;
    audio.currentTime = 0;
  }
  markCurrentSong(`song-${id}`);
  setPlayerDisplaySong();
  toggleButton(playButton, pauseButton);
  audio.play();
};

const pauseSong = () => {
  if (userData?.currentSong) {
    userData.songCurrentTime = audio.currentTime;
    toggleButton(pauseButton, playButton);
    audio.pause();
  }
};

const playNextSong = () => {
  const currentSongIndex = getCurrentSongIndex();
  if (
    userData?.currentSong === null ||
    currentSongIndex === userData?.songs.length - 1
  ) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.songs[currentSongIndex + 1].id);
  }
  nextButton.focus();
};

const playPreviousSong = () => {
  if (userData?.currentSong === null) {
    return;
  }
  const currentSongIndex = getCurrentSongIndex();
  if (currentSongIndex === 0) {
    playSong(userData?.songs[userData?.songs.length - 1].id);
  } else {
    playSong(userData?.songs[currentSongIndex - 1].id);
  }
  previousButton.focus();
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  playSong(userData?.songs[0].id);
};

const deleteSong = (id) => {
  const deletedSong = userData?.songs.find((song) => song.id === id);
  if (userData?.currentSong === deletedSong) {
    pauseSong();
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    setPlayerDisplaySong();
  }
  userData.songs = userData?.songs.filter((song) => song !== deletedSong);
  renderSongs(userData?.songs);
  markCurrentSong(`song-${userData?.currentSong?.id}`);

  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");
    resetButton.className = "resetButton";
    resetButton.appendChild(resetText);
    resetButton.addEventListener("click", () => {
      userData.songs = sortAlphabetcal(allSongs);
      userData.currentSong = null;
      userData.songCurrentTime = 0;
      renderSongs(userData?.songs);
    });
    playlistSongs.appendChild(resetButton);
  }
};

const renderSongs = (array) => {
  const songsHTML = array.map(
    (song) =>
      `<li id="song-${song.id}" class="playlist-song">
            <button class="song-info" data-songId="${song.id}">
                <span class="playlist-song-title">${song.title}</span>
                <span class="plalist-song-artist">${song.artist}</span>
                <span class="playlist-song-time">${song.time}</span>
            </button>
            <button class="delete" data-deleteId = "${song.id}">
                <i class="bi bi-x-circle"></i>
            </button>
        </li>`
  );
  playlistSongs.innerHTML = songsHTML.join("");
  document
    .querySelectorAll(".song-info")
    .forEach((btn) =>
      btn.addEventListener("click", () => playSong(Number(btn.dataset.songid)))
    );
  document.querySelectorAll(".delete").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () =>
      deleteSong(Number(deleteBtn.dataset.deleteid))
    );
  });
};

const markCurrentSong = (id) => {
  document.querySelectorAll(".playlist-song").forEach((songElement) => {
    if (songElement.id === id) {
      songElement.setAttribute("aria-current", "true");
    } else {
      songElement.removeAttribute("aria-current");
    }
  });
};

const setPlayerDisplaySong = () => {
  playerSongTitle.textContent = userData?.currentSong
    ? userData.currentSong.title
    : "";
  playerSongArtist.textContent = userData?.currentSong
    ? userData.currentSong.artist
    : "";
};

const getCurrentSongIndex = () =>
  userData?.songs.indexOf(userData?.currentSong);
renderSongs(userData?.songs);

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", () => pauseSong());

nextButton.addEventListener("click", () => playNextSong());

previousButton.addEventListener("click", () => playPreviousSong());

shuffleButton.addEventListener("click", () => shuffle());

audio.addEventListener("ended", () => playNextSong());
