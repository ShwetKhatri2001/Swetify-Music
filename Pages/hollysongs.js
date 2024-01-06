const music = document.querySelector("audio");
const songimg = document.getElementById("songimg");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const likeToggle = document.getElementById("likeToggle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const back = document.getElementById("back");
const shuffle = document.getElementById("shuffle");
const loop = document.getElementById("loop");
const download = document.getElementById("download");
let progress = document.getElementById("progress");
let song_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");
const homepage_content = document.getElementById("homepage_content");
// const liked_div = document.getElementById("liked_div");
const main_div = document.getElementById("main_div");
let cat_images = document.getElementsByClassName("image");
let category_title = document.getElementsByClassName("small-category");
let home = document.getElementById("home");
let categories = document.getElementById("popular-categories");
let artists = document.getElementById("artists");
const favlist = document.getElementById("fav-list");
const progress_el = document.getElementById("progress-el");

let allsongs;
const fetchData = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
const fetchAndLogSongs = async () => {
  try {
    const hollywoodsongs = await fetchData("../playlists/hollywoodsongs.json");
    // Wrapping all the songs array in one array by Type of songs.
    allsongs = [
  hollywoodsongs
];
  } catch (error) {
    console.error('Error fetching or logging songs:', error);
  }
 };
 fetchAndLogSongs()

// Wrapping all the categories in one array.
const allcategories = [
  "TopHollywoodHits",
  "TopBollywoodHits",
  "RockOn",
  "DanceHits",
  "CollegeDeYaar",
  "GujjuGarba",
  "90'sHits",
  "PatrioticBollywood",
  "HoliSpecial",
  "NehaKakkar",
  "ArijitSingh",
  "Ritviz",
  "JubinNautiyal",
  "AtifAslam",
];

const out = () => {
  console.log(title)
}

let isplaying = false; // variable to check if the song is playing or not.
const playmusic = () => {
  // function to play the song.
  isplaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause"); // replacing the play icon with pause icon.
  //songimg.classList.add("anime");
};

const pausemusic = () => {
  // function to pause the song.
  isplaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play"); // replacing the pause icon with play icon.
  //songimg.classList.remove("anime");
};

let songs = [];
let category;

//function to load songs from playlist
let song = 0;
const loadplaylistsong = (
  arrno, tsong
) => {
  songs = allsongs[arrno];
  category = allcategories[arrno];
  loadcurrSong(songs[tsong], category);
  homepage_content.classList.add("hidden");
  main_div.classList.remove("hidden");
  song = tsong;
  // console.log("hii");
  playmusic();
};

const loadcurrSong = (tsong, category) => {
  title.textContent = tsong.title;
  artist.innerHTML = `<marquee>${tsong.artist}</marquee>`; // changing the artist of the song.
  music.src = "../songs-images/" + category + "/" + tsong.name + ".mp3";
  console.log(music.src); // changing the source of the song.
  songimg.src = "../songs-images/" + category + "/" + tsong.name + ".jpg";
};

const loadnextsong = (arrno) => {
  song += 1;
  console.log(song);
  if (song > allsongs[arrno].length) {
    song = 0;
  }
  loadplaylistsong(arrno, song);
}

const loadprevsong = (arrno) => {
  song -= 1;
  if (song < 0) {
    song = allsongs[arrno].length;
  }
  loadplaylistsong(arrno, song);
}

progress_el.addEventListener("change", () => {
  music.currentTime = (progress_el.value * music.duration) / 100;
  console.log("hii");
})

music.addEventListener("timeupdate", () => {
  let time = parseInt((music.currentTime / music.duration) * 100);
  progress_el.value = time;
  const currentTimeMinutes = Math.floor(music.currentTime / 60);
  const currentTimeSeconds = Math.floor(music.currentTime % 60);
  current_time.textContent = `${currentTimeMinutes}:${currentTimeSeconds < 10 ? '0' : ''}${currentTimeSeconds}`;
})

play.addEventListener("click", () => {
  // event listener to play or pause the song.
  if (isplaying) pausemusic();
  else playmusic();
});