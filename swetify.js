// Below are the variables of JS, which are used in the code for the functionality of the website.
const music = document.querySelector('audio');
const songimg = document.getElementById('songimg');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const likeToggle = document.getElementById('likeToggle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const back = document.getElementById('back');
const shuffle = document.getElementById('shuffle');
const loop = document.getElementById('loop');
const download = document.getElementById('download');
let progress = document.getElementById('progress');
let song_duration = document.getElementById('duration');
let current_time = document.getElementById('current_time');
const progress_div = document.getElementById('progress_div');
const homepage_content = document.getElementById('content');
// const liked_div = document.getElementById("liked_div");
const main_div = document.getElementById('main_div');
let cat_images = document.getElementsByClassName('image');
let category_title = document.getElementsByClassName('small-category');
let home = document.getElementById('home');
let categories = document.getElementById('popular categories');
let artists = document.getElementById('artists');
const favlist = document.getElementById('fav-list');

const jsonPaths = [
  './playlists/atifsongs.json',
  './playlists/arijitsongs.json',
  './playlists/nehasongs.json',
  './playlists/jubinsongs.json',
  './playlists/ritvizsongs.json',
  './playlists/rocksongs.json',
  './playlists/dancesongs.json',
  './playlists/collegesongs.json',
  './playlists/garbasongs.json',
  './playlists/Hits90s.json',
  './playlists/patriotic.json',
  './playlists/holispecial.json',
  './playlists/bollywoodsongs.json',
  './playlists/hollywoodsongs.json',
  './playlists/sonusongs.json',
  './playlists/shreyasongs.json',
];
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.style.left === "0px") {
    navbar.style.left = "-250px";
  } else {
    navbar.style.left = "0px";
  }
}

let globalSong, allsongs;
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
    const atifsongs = await fetchData(jsonPaths[0]);
    // Below is the array of songs by Arijit Singh, in which each song is an object with the name, title and artist properties.
    const arijitsongs = await fetchData(jsonPaths[1]);
    // Below is the array of songs by Neha Kakkar, in which each song is an object with the name, title and artist properties.
    const nehasongs = await fetchData(jsonPaths[2]);
    // Below is the array of songs by Jubin Nautiyal, in which each song is an object with the name, title and artist properties.
    const jubinsongs = await fetchData(jsonPaths[3]);
    // Below is the array of songs by Ritviz, in which each song is an object with the name, title and artist properties.
    const ritvizsongs = await fetchData(jsonPaths[4]);
    // Below is the array of songs in Rock genre, in which each song is an object with the name, title and artist properties.
    const rocksongs = await fetchData(jsonPaths[5]);
    // Below is the array of songs for dance, in which each song is an object with the name, title and artist properties.
    const dancesongs = await fetchData(jsonPaths[6]);
    // Below is the array of songs for college, in which each song is an object with the name, title and artist properties.
    const collegesongs = await fetchData(jsonPaths[7]);
    // Below is the array of songs for garba, in which each song is an object with the name, title and artist properties.
    const garbasongs = await fetchData(jsonPaths[8]);
    // Below is the array of songs for 90's Bollywood songs, in which each song is an object with the name, title and artist properties.
    const Hits90s = await fetchData(jsonPaths[9]);
    // Below is the array of Bollywood patriotic songs , in which each song is an object with the name, title and artist properties.
    const patriotic = await fetchData(jsonPaths[10]);
    // Below is the array of Holi special songs , in which each song is an object with the name, title and artist properties.
    const holispecial = await fetchData(jsonPaths[11]);
    // Array of Bollywood songs, in which each song is an object with the name, title and artist properties.
    const bollywoodsongs = await fetchData(jsonPaths[12]);
    // Array of Hollywood songs, in which each song is an object with the name, title and artist properties.
    const hollywoodsongs = await fetchData(jsonPaths[13]);
    // Below is the array of songs by Sonu Nigam, in which each song is an object with the name, title and artist properties.
    const sonusongs = await fetchData(jsonPaths[14]);
    // Below is the array of songs by Shreya Ghosal, in which each song is an object with the name, title and artist properties.
    const shreyasongs = await fetchData(jsonPaths[15]);

    globalSong = [
      hollywoodsongs,
      holispecial,
      bollywoodsongs,
      patriotic,
      Hits90s,
      garbasongs,
      dancesongs,
      arijitsongs,
      atifsongs,
      nehasongs,
      jubinsongs,
      ritvizsongs,
      rocksongs,
      collegesongs,
      sonusongs,
      shreyasongs,
    ];
    // Wrapping all the songs array in one array by Type of songs.
    allsongs = [
      hollywoodsongs,
      bollywoodsongs,
      rocksongs,
      dancesongs,
      collegesongs,
      garbasongs,
      Hits90s,
      patriotic,
      holispecial,
      nehasongs,
      arijitsongs,
      ritvizsongs,
      jubinsongs,
      atifsongs,
      sonusongs,
      shreyasongs,
    ];
  } catch (error) {
    console.error('Error fetching or logging songs:', error);
  }
};
fetchAndLogSongs();

let likedSongs = [];
function toastMessage(msg) {
  var x = document.getElementById('snackbar');
  x.className = 'show';
  x.innerHTML = msg;
  setTimeout(function () {
    x.className = x.className.replace('show', '');
  }, 3000);
}
//code for dynamic table
const refreshLikedList = () => {
  // console.log("refreshLikedList function called");
  const container_liked_list = document.getElementById('container-liked-list');
  let count = 0;
  // for(var i in localStorage){
  // console.log(i,"   ",localStorage.getItem(i))
  // }
  for (var i in localStorage) {
    if (localStorage.getItem(i)) count++;
  }
  // console.log("count: "+count);
  if (count !== 0) {
    container_liked_list.remove();
    // if (container_liked_list)
    //   container_liked_list.remove();
    let no = 1;
    var containerLL = document.createElement('div');
    containerLL.id = 'container-liked-list';
    containerLL.className = 'container-liked-list';
    var containerScroll = document.createElement('div');
    containerScroll.className = 'container-scroll';
    var table = document.createElement('table');
    var headerRow = table.insertRow();
    headerRow.className = 'headT';
    var headers = ['#', 'Title', 'Artist'];
    headers.forEach(function (headerText) {
      var th = document.createElement('th');
      th.appendChild(document.createTextNode(headerText));
      headerRow.appendChild(th);
    });
    for (var i in localStorage) {
      if (localStorage.getItem(i) !== false) {
        var searchTerm = i;
        // console.log(i)
        if (
          globalSong.flat().find((song) => song.title === searchTerm) ===
          undefined
        ) {
          localStorage.removeItem(i);
          count--;
          // console.log("Removing: "+i+" from local storage");
          continue;
        }
        var results = globalSong
          .flat()
          .find((song) => song.title === searchTerm);
        // console.log("Results: "+results);
        var name = results.name;
        var title = i;
        var artist = results.artist;
        var newSong = { name, title, artist };
        likedSongs.push(newSong);
        // console.log(newSong);
        var row = table.insertRow();
        row.setAttribute('id', 'likelist');
        row.setAttribute('onclick', 'loadlikedsong(this)');
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = no;
        cell2.innerHTML = i;
        cell3.innerHTML = results.artist;
        no++;
      }
    }
    containerScroll.appendChild(table);
    containerLL.appendChild(containerScroll);
    favlist.appendChild(containerLL);
  }
};

changeimagewidth(); // calling the function to change the width of the images according to the screen size.
function changeimagewidth() {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth; // getting the width of the screen.
  if (w < 480) {
    // console.log("Y");
    for (let i = 0; i < cat_images.length; i++) {
      cat_images[i].width = '300'; // changing the width of the images.
      cat_images[i].height = '300'; // changing the height of the images.
      category_title[i].style.width = '300px'; // changing the width of the category title.
      category_title[i].style.height = '300px'; // changing the height of the category title.
    }
  }
}
const hidevisible = () => {
  // function to hide the homepage content and show the main content.
  homepage_content.classList.remove('hidden'); // removing the hidden class from the homepage content.
  main_div.classList.add('hidden');
};

// Wrapping all the categories in one array.
const allcategories = [
  'TopHollywoodHits',
  'TopBollywoodHits',
  'RockOn',
  'DanceHits',
  'CollegeDeYaar',
  'GujjuGarba',
  "90'sHits",
  'PatrioticBollywood',
  'HoliSpecial',
  'NehaKakkar',
  'ArijitSingh',
  'Ritviz',
  'JubinNautiyal',
  'AtifAslam',
  'SonuNigam',
  'ShreyaGhosal',
];
let songs = [];
let category;
let islikedplaying = false;
const loadfirstsong = (
  arrno // function to load the first song of the category.
) => {
  // console.log("loadfirstsong function called");
  songs = allsongs[arrno];
  category = allcategories[arrno];
  loadSong(songs[0]);
  homepage_content.classList.add('hidden');
  main_div.classList.remove('hidden');
  // console.log(title)
  playmusic();
};
function findSongCategory(songTitle) {
  // Loop through each category in the globalSongs array
  for (var i = 0; i < allsongs.length; i++) {
    for (const song of allsongs[i]) {
      if (song.title === songTitle) {
        return allcategories[i];
      }
    }
  }
}
const loadlikedsong = (obj, i = 0) => {
  // console.log(obj);
  var index = obj.children[0].innerHTML;
  category = findSongCategory(obj.children[1].innerHTML);
  islikedplaying = true;
  loadSong(likedSongs[index - 1]);
  homepage_content.classList.add('hidden');
  main_div.classList.remove('hidden');
  playmusic();
};
let isplaying = false; // variable to check if the song is playing or not.
const playmusic = () => {
  // function to play the song.
  isplaying = true;
  music.play();
  play.classList.replace('fa-play', 'fa-pause'); // replacing the play icon with pause icon.
  //songimg.classList.add("anime");
};
const pausemusic = () => {
  // function to pause the song.
  isplaying = false;
  music.pause();
  play.classList.replace('fa-pause', 'fa-play'); // replacing the pause icon with play icon.
  //songimg.classList.remove("anime");
};
currSong = 0; // variable to store the current song number.
const loadSong = (song) => {
  // function to load the song.
  // console.log("loadSong function called");
  title.textContent = song.title;
  category = findSongCategory(title.innerHTML);
  // console.log(title.textContent); // changing the title of the song.
  artist.innerHTML = `<marquee>${song.artist}</marquee>`; // changing the artist of the song.
  music.src = 'songs-images/' + category + '/' + song.name + '.mp3';
  // console.log(music.src); // changing the source of the song.
  songimg.src = 'songs-images/' + category + '/' + song.name + '.jpg';
  // console.log(songimg.src); // changing the source of the image.
  const likedState = localStorage.getItem(song.title);
  if (likedState === null) {
    likeToggle.checked = false;
  } else if (likedState === 'true') {
    likeToggle.checked = true;
  }
};

const nextSong = (e) => {
  // function to play the next song.
  if (loopActive && e.type === 'ended') {
    loadSong(songs[currSong]);
    playmusic();
  } else if (islikedplaying) {
    currSong = (currSong + 1) % likedSongs.length;
    category = findSongCategory(title.innerHTML);
    // console.log(category);
    loadSong(likedSongs[currSong]);
    playmusic();
  } else {
    currSong = (currSong + 1) % songs.length; // changing the current song number.
    loadSong(songs[currSong]); // calling the loadSong function to load the next song.
    playmusic(); // calling the playmusic function to play the next song.
  }
  // console.log("hii")
};
const prevSong = () => {
  // function to play the previous song.
  // console.log(songs[currSong]);
  if (islikedplaying) {
    currSong = (currSong - 1 + likedSongs.length) % likedSongs.length;
    category = findSongCategory(title.innerHTML);
    loadSong(likedSongs[currSong]);
    playmusic();
  } else {
    currSong = (currSong - 1 + songs.length) % songs.length; // changing the current song number.
    loadSong(songs[currSong]); // calling the loadSong function to load the previous song.
    playmusic();
  }
};
const shuffleSong = () => {
  // console.log("shuffleSong function called");
  prevsong = currSong;
  if (islikedplaying) {
    currSong =
      (currSong + Math.floor((Math.random() + 1) * (likedSongs.length + 1))) %
      likedSongs.length;
    if (currSong == prevsong) {
      shuffleSong();
    }
    // console.log(currSong);
    category = findSongCategory(title.innerHTML);
    loadSong(likedSongs[currSong]);
    playmusic();
  } else {
    currSong =
      (currSong + Math.floor((Math.random() + 1) * (songs.length + 1))) %
      songs.length;
    if (currSong == prevsong) {
      shuffleSong();
    }
    // console.log(currSong);
    loadSong(songs[currSong]);
    playmusic();
  }
};

let loopActive = false;
const loopSong = () => {
  // console.log("Inside loopSong");
  // function to check if the song is looping or not.
  if (loopActive) {
    loopActive = false;
    loop.style.color = '#3333ff';
  } else {
    loopActive = true;
    loop.style.color = 'white';
  }
};

const downloadCurrentSong = () => {
  const currentSong = songs[currSong];
  const downloadUrl = `songs-images/${category}/${currentSong.name}.mp3`;
  fetch(downloadUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = `${currentSong.title}.mp3`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    })
    .catch((error) => {
      console.error('Error fetching the file:', error);
    });
};
play.addEventListener('click', () => {
  // event listener to play or pause the song.
  if (isplaying) pausemusic();
  else playmusic();
});
home.onclick = function () {
  if (isplaying) pausemusic();
  islikedplaying = false;
};
categories.onclick = function () {
  if (isplaying) pausemusic();
  islikedplaying = false;
};
artists.onclick = function () {
  if (isplaying) pausemusic();
  islikedplaying = false;
};
function skipBack() {
  // console.log("skipback called");
  if (music.currentTime >= 10) {
    music.currentTime -= 10; // Skip back 5 seconds
  } else {
    music.currentTime = 0; // If less than 5 seconds have passed, set currentTime to 0
  }
}

// Update the liked state in local storage
const updateLikedState = () => {
  // console.log("updateLikedState function called");
  song = title.textContent;
  // console.log("Song: "+song);
  if (localStorage.getItem(song) === 'true') {
    localStorage.removeItem(song);
    toastMessage(song + ' removed from Liked list');
  } else {
    localStorage.setItem(song, true);
    toastMessage(song + ' added in Liked list');
  }
  refreshLikedList();
};

// Add event listener for the like toggle button
likeToggle.addEventListener('change', updateLikedState);

function updateDuration() {
  // updating duration time for each song
  const min_duration = Math.floor(music.duration / 60); // calculating the minutes of the song.
  const sec_duration = Math.floor(music.duration % 60)
    .toString()
    .padStart(2, '0'); // calculating the seconds of the song.

  if (min_duration && sec_duration) {
    song_duration.innerHTML = `${min_duration}:${sec_duration}`;
    // console.log(`${min_duration}:${sec_duration}`);
  } // changing the duration of the song.
}

music.addEventListener('timeupdate', () => {
  // console.log("timeupdate event fired");
  // event listener to update the progress bar of the song.
  // const { currentTime, duration } = event.target; // getting the current time and duration of the song.
  // const progress_time = (currentTime / duration) * 100; // calculating the progress time of the song.
  // progress.style.width = `${progress_time}%`; // changing the width of the progress bar.

  /*
    Updating duration of song is not needed when updating the progress bar
    because the duration of the song is fixed and the progress bar is updated

    // updating duration time for each song
    const min_duration = Math.floor(duration / 60); // calculating the minutes of the song.
    const sec_duration = Math.floor(duration % 60).toString().padStart(2, '0'); // calculating the seconds of the song.
   
    if (duration) {
      song_duration.innerHTML = `${min_duration}:${sec_duration}`;
    } // changing the duration of the song.
  */
  let time = parseInt((music.currentTime / music.duration) * 100);
  progress.value = time;

  // updating current time for a song currently playing
  const min_currtime = Math.floor(music.currentTime / 60); // calculating the minutes of the song.
  const sec_currtime = Math.floor(music.currentTime % 60)
    .toString()
    .padStart(2, '0'); // calculating the seconds of the song.
  current_time.textContent = `${min_currtime}:${sec_currtime}`; // changing the current time of the song.
  updateDuration();
});

// window.addEventListener("load", () => {
//   refreshLikedList();
// });
// Modify the window event listener to use async/await
window.addEventListener('load', async () => {
  await fetchAndLogSongs();
  refreshLikedList();
});

progress.addEventListener('change', () => {
  // console.log("progress_div click event fired");
  // event listener to change the progress bar of the song.

  music.currentTime = (progress.value * music.duration) / 100;

  // const { duration } = music.duration; // getting the duration of the song.
  // let move_progress = (event.offsetX / event.target.clientWidth) * duration;
  // console.log(move_progress);
  // music.currentTime = move_progress; // changing the current time of the song.
});
music.addEventListener('ended', nextSong); // Event listener to play the next song when the current song ends.
next.addEventListener('click', nextSong); // Event listener to play the next song when the next button is clicked.
prev.addEventListener('click', prevSong); // Event listener to play the previous song when the previous button is clicked.

shuffle.addEventListener('click', shuffleSong);

loop.addEventListener('click', loopSong);

back.addEventListener('click', skipBack);

download.addEventListener('click', downloadCurrentSong); // Adding an event listener to the download button
// spotify functionality
//var redirect_uri = "https://deploy-preview-40--swetify.netlify.app/";
var redirect_uri = 'https://swetify.netlify.app/';
//var redirect_uri= 'http://localhost:5501/';
var client_id = 'e5a392471667465499be5e9bc54c24dc';
var client_secret = '3a7df71fe8554b5faaa1bd69c11265c9';
var stateKey = 'spotify_auth_state';
function generateRandomString(length) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
function authorize() {
  var params = getHashParams();
  var access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);
  if (access_token && (state == null || state !== storedState)) {
    alert('There was an error during the authentication');
  } else {
    console.log('access token recieved');
  }
  var state = generateRandomString(16);
  localStorage.setItem(stateKey, state);
  var scope = 'user-read-private user-read-email user-top-read';
  var url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(client_id);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&state=' + encodeURIComponent(state);
  window.location = url;
}
function scrollToTarget() {
  var element = document.getElementById('your spotify music');
  element.scrollIntoView({ behavior: 'smooth' });
}
function toggleVisibility() {
  var login_container = document.getElementById('login_container');
  login_container.style.display =
    login_container.style.display === 'none' ? 'block' : 'none';
  var spotify_window = document.getElementById('spotify-window');
  spotify_window.style.display =
    spotify_window.style.display === 'none' ||
    spotify_window.style.display === ''
      ? 'block'
      : 'none';
}
if (window.location.href.includes('access_token')) {
  // If it does, call the scrollToTarget function
  scrollToTarget();
  toggleVisibility();
  getProfile();
  getTopSongs();
}
async function getProfile() {
  var params = getHashParams();
  var access_token = params.access_token;
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  });
  const data = await response.json();
  // console.log(data)
  setProfileData(data);
}
async function getTopSongs() {
  var params = getHashParams();
  var access_token = params.access_token;
  const response = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=10&time_range=long_term',
    {
      headers: {
        Authorization: 'Bearer ' + access_token,
      },
    }
  );
  const data = await response.json();
  renderTopSongs(data);
}
async function getTopArtists() {
  var params = getHashParams();
  var access_token = params.access_token;
  const response = await fetch(
    'https://api.spotify.com/v1/me/top/artists?offset=0&limit=10&time_range=long_term',
    {
      headers: {
        Authorization: 'Bearer ' + access_token,
      },
    }
  );
  const data = await response.json();
  renderTopArtists(data);
}
function setProfileData(data) {
  const display_name = document.getElementById('display_name');
  display_name.innerHTML = data.display_name;
  const user_email = document.getElementById('user-email');
  user_email.innerHTML = data.email;
  const user_country = document.getElementById('user-country');
  user_country.innerHTML = data.country;
  const user_external_uri = document.getElementById('user-external-uri');
  user_external_uri.innerHTML = `<a href="${data.external_urls.spotify}" target="_blank">${data.external_urls.spotify}</a>`;
}
function renderTopArtists(data) {
  //hide top songs list
  var topSongsListElement = document.getElementById('top_songs_list');
  // Remove all child elements (songs) from the top songs list
  while (topSongsListElement.firstChild) {
    topSongsListElement.removeChild(topSongsListElement.firstChild);
  }
  var topSongsListElement = document.getElementById('top_artists_list');
  // Loop through the top songs data and create HTML elements for each song
  data.items.forEach(function (song) {
    var songItemElement = document.createElement('div');
    songItemElement.classList.add('song-item');
    // Add song information to the HTML
    songItemElement.innerHTML = `
                       <div class="list-displayer">
                       <div class="innerimage" >
                       <img src="${song.images[0].url}" alt="${song.name}" width="200" height="100" >
                       </div>
                       <div class="textdiv" >
                       <label>Artist name: ${song.name}</label>
                       <label>Popularity: ${song.popularity}</label>
                       <label>URI: <a href="${song.uri}" target="_blank">${song.uri}</a></label>
                       </div> 
                       </div>
                   `;
    // Append the song item to the top songs list
    topSongsListElement.appendChild(songItemElement);
  });
}
function renderTopSongs(data) {
  //hide top artists list
  var topSongsListElement = document.getElementById('top_artists_list');
  // Remove all child elements (songs) from the top songs list
  while (topSongsListElement.firstChild) {
    topSongsListElement.removeChild(topSongsListElement.firstChild);
  }
  var topSongsListElement = document.getElementById('top_songs_list');
  // Loop through the top songs data and create HTML elements for each song
  data.items.forEach(function (song) {
    var songItemElement = document.createElement('div');
    songItemElement.classList.add('song-item');
    // Add song information to the HTML
    songItemElement.innerHTML = `
                       <div class="list-displayer">
                       <div class="innerimage" >
                       <img src="${song.album.images[0].url}" alt="${song.name}" width="200" height="100" >
                       </div>
                       <div class="textdiv" >
                       <label><ran>Song name:</ran> ${song.name}</label>
                       <label><ran>Popularity:</ran> ${song.popularity}</label>
                       <label><ran>URI:</ran> <a href="${song.uri}" target="_blank">${song.uri}</a></label>
                       </div>
                       </div>  
                   `;
    topSongsListElement.appendChild(songItemElement);
  });
}
function userLogout() {
  let comfirm = confirm('logout??');
  if (comfirm) {
    // Redirect the user to the login page or perform any other necessary actions
    window.location.href = '/';
  }
}
function toggleProfile() {
  var profileData = document.getElementById('profile-data');
  profileData.style.display =
    profileData.style.display === 'none' ? 'flex' : 'none';
}
