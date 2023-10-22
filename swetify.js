// Below are the variables of JS, which are used in the code for the functionality of the website.
const music = document.querySelector("audio");
const songimg = document.getElementById("songimg");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let progress = document.getElementById("progress");
let song_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");
const homepage_content = document.getElementById("homepage_content");
const main_div = document.getElementById("main_div");
let cat_images = document.getElementsByClassName("image");
let category_title = document.getElementsByClassName("small-category");

// Below is the array of songs by Atif Aslam, in which each song is an object with the name, title and artist properties.
const atifsongs = [
  {
    name: "DekhteDekhte",
    title: "Dekhte Dekhte",
    artist: "Atif Aslam, Nusarat Ali Fateh Khan, Rochak Kohli",
  },
  {
    name: "PehliDafa",
    title: "Pehli Dafa",
    artist: "Atif Aslam, Shiraz Uppal",
  },
  { name: "DilDiyanGallan", title: "Dil Diyan Gallan", artist: "Atif Aslam" },
  {
    name: "PaniyonSa",
    title: "Paniyon Sa",
    artist: "Atif Aslam, Tulsi Kumar, Rochak Kohli",
  },
  { name: "TeresangYaara", title: "Tere Sang Yaara", artist: "Atif Aslam" },
  { name: "JeenaJeena", title: "Jeena Jeena", artist: "Atif Aslam" },
];

// Below is the array of songs by Arijit Singh, in which each song is an object with the name, title and artist properties.
const arijitsongs = [
  { name: "TumHiHo", title: "Tum Hi Ho", artist: "Arijit Singh" },
  { name: "Khairiyat", title: "Khairiyat", artist: "Arijit Singh" },
  { name: "IkVaariAa", title: "Ik Vaari Aa", artist: "Arijit Singh" },
  {
    name: "Qaafirana",
    title: "Qaafirana",
    artist: "Arijit Singh, Nikita Ganndhi",
  },
  {
    name: "TeraYaarHoonMain",
    title: "Tera Yaar Hoon Main",
    artist: "Arijit Singh",
  },
  {
    name: "TujheKitnaChahneLage",
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh",
  },
  { name: "Naina", title: "Naina", artist: "Arijit Singh" },
  { name: "Kesariya", title: "Kesariya", artist: "Arijit Singh" },
];

// Below is the array of songs by Neha Kakkar, in which each song is an object with the name, title and artist properties.
const nehasongs = [
  {
    name: "Dilbar",
    title: "Dilbar",
    artist: "Neha Kakkar, Dhvani Bhanushali, Ikka, Tanishk Bagchi",
  },
  {
    name: "TuHiYaarMera",
    title: "Tu Hi Yaar Mera",
    artist: "Neha Kakkar, Arijit Singh, Rochak Kohli",
  },
  {
    name: "YaadPiyaKiAaneLagi",
    title: "Yaad Piya Ki Aane Lagi",
    artist: "Neha Kakkar, Tanishk Bagchi, Lalit Sen",
  },
  { name: "Garmi", title: "Garmi", artist: "Neha Kakkar, Badshah" },
  { name: "LaLaLa", title: "La La La", artist: "Neha Kakkar, Arjun Kanungo" },
  {
    name: "GaliGali",
    title: "Gali Gali",
    artist: "Neha Kakkar, Tanishk Bagchi",
  },
];

// Below is the array of songs by Jubin Nautiyal, in which each song is an object with the name, title and artist properties.
const jubinsongs = [
  {
    name: "GazabKaHaiDin",
    title: "Gazab Ka Hai Din",
    artist: "Jubin Nautiyal, Prakriti Kakkar, Tanishk Bagchi",
  },
  {
    name: "TujheKitnaChaheinAur",
    title: "Tujhe Kitna Chahein Aur",
    artist: "Jubin Nautiyal",
  },
  {
    name: "Manike",
    title: "Manike",
    artist: "Jubin Nautiyal, Yohani, Surya Ragunnathan",
  },
  {
    name: "TumHiAana",
    title: "Tum Hi Aana",
    artist: "Jubin Nautiyal, Payal Dev",
  },
  { name: "LoSafar", title: "Lo Safar", artist: "Jubin Nautiyal, Mithoon" },
  {
    name: "ZindagiKuchTohBata",
    title: "Zindagi Kuch Toh Bata",
    artist: "Jubin Nautiyal",
  },
];

// Below is the array of songs by Ritviz, in which each song is an object with the name, title and artist properties.
const ritvizsongs = [
  { name: "UddGaye", title: "Udd Gaye", artist: "Ritviz" },
  { name: "Sage", title: "Sage", artist: "Ritviz" },
  { name: "ChaloChalein", title: "Chalo Chalein", artist: "Ritviz" },
  { name: "Jeet", title: "Jeet", artist: "Ritviz" },
  { name: "ThandiHawa", title: "Thandi Hawa", artist: "Ritviz" },
  { name: "Jeet2.0", title: "Jeet 2.0", artist: "Ritviz" },
];

// Below is the array of songs in Rock genre, in which each song is an object with the name, title and artist properties.
const rocksongs = [
  { name: "Beliver", title: "Beliver", artist: "Imagine Dragon" },
  { name: "CrazyTrain", title: "Crazy Train", artist: "Ozzy Osbourne" },
  { name: "DanceDance", title: "Dance Dance", artist: "Toners" },
  {
    name: "RockYouLikeAHarricane",
    title: "Rock You Like A Harricane",
    artist: "Scorpions",
  },
];

// Below is the array of songs for dance, in which each song is an object with the name, title and artist properties.
const dancesongs = [
  { name: "PostMalone", title: "Post Malone", artist: "Sam Feldt" },
  { name: "TechnoPrank", title: "Techno Prank", artist: "Dubdogz" },
  { name: "BoomZubarecki", title: "Boom Zubarecki", artist: "Tiesto, Seven" },
  {
    name: "WhatUWaitingFo",
    title: "What U Waiting Fo",
    artist: "Moti x Bodyworx",
  },
  { name: "ThereForYou", title: "There For You", artist: "Alex Hart" },
];

// Below is the array of songs for college, in which each song is an object with the name, title and artist properties.
const collegesongs = [
  {
    name: "TeriYaari",
    title: "Teri Yaari",
    artist: "Milind Gaba, Aparshakti Khurana, King Kaazi",
  },
  { name: "Yaari", title: "Yaari", artist: "Nikk feat. Avneet Kaur" },
  {
    name: "AtrangiYaari",
    title: "Atrangi Yaari",
    artist: "Amitabh Bachchan, Farhan Akhtar",
  },
  { name: "WohDin", title: "Woh Din", artist: "Arijit Singh" },
  {
    name: "Hostel",
    title: "Hostel",
    artist: "Sharry Mann, Parmish Verma, Mista Baaz",
  },
  {
    name: "YaaraTeriYaari",
    title: "Yaara Teri Yaari",
    artist: "Darshan Raval",
  },
];

// Below is the array of songs for garba, in which each song is an object with the name, title and artist properties.
const garbasongs = [
  {
    name: "Dholida",
    title: "Dholida",
    artist: "Udit Narayan, Neha Kakkar, Palak Muchhal, Raja Hasan",
  },
  { name: "Chogada", title: "Chogada", artist: "Darshan Raval, Asees Kaur" },
  {
    name: "AtulPurohit3Tali",
    title: "Atul Purohit 3 Tali",
    artist: "Atul Purohit and mandal",
  },
  {
    name: "AtulPurohit2Tali",
    title: "Atul Purohit 2 Tali",
    artist: "Atul Purohit and mandal",
  },
  {
    name: "AtulbhaiFinalSteps",
    title: "Atulbhai Final Steps",
    artist: "Atul Purohit",
  },
  { name: "FullNightTrack", title: "Full Night Track", artist: "Ae Halo" },
];

// Below is the array of songs for 90's Bollywood songs, in which each song is an object with the name, title and artist properties.
const Hits90s = [
  {
    name: "ChuraKeDilMera",
    title: "Chura Ke Dil Mera",
    artist: "Alka Yagnik and Kumar Sanu",
  },
  { name: "BaazigarOBaazigar", title: "Baazigar O Baazigar", artist: "Alka Yagnik and Kumar Sanu" },
  {
    name: "ChandChhupaBadalMein",
    title: "Chand Chhupa Badal Mein",
    artist: "Udit Narayan and Alka Yagnik",
  },
  {
    name: "AeMereHumsafar",
    title: "Ae Mere Humsafar",
    artist: "Udit Narayan and Alka Yagnik",
  },
  {
    name: "AisiDeewangi",
    title: "Aisi Deewangi",
    artist: "Alka Yagnik and Vinod Rathod",
  },
  { name: "ChhupanaBhiNahinAata", title: "Chhupana Bhi Nahin Aata", artist: "Pankaj Udhas" },
];

// Below is the array of Bollywood patriotic songs , in which each song is an object with the name, title and artist properties.
const patriotic = [
  {
    name: "SareJahanSeAchha",
    title: "Sare Jahan Se Achha",
    artist: "Seema Mishra",
  },
  { name: "SarfaroshiKiTamanna", title: "Sarfaroshi Ki Tamanna", artist: "Sonu Nigam" },
  {
    name: "DesMereDes",
    title: "Des Mere Des",
    artist: "A.R. Rahman, Sukhwinder Singh",
  },
  { name: "MaaTujheSalaam", title: "Maa Tujhe Salaam", artist: "A.R. Rahman" },
  {
    name: "MeraRangDeBasanti",
    title: "Mera Rang De Basanti",
    artist: "Sonu Nigam, Manmohan Waris",
  },
  
];

// Below is the array of Holi special songs , in which each song is an object with the name, title and artist properties.
const holispecial = [
  {
    name: "BalamPichkari",
    title: "Balam Pichkari",
    artist: "Pritam, Vishal Dadlani, Shalmali Kholgade",
  },
  { name: "HoliKeDin", title: "Holi Ke Din", artist: "Lata Mangeshkar, Kishore Kumar, R. D. Burman" },
  {
    name: "BadriKiDulhaniya",
    title: "Badri Ki Dulhaniya",
    artist: "Dev Negi, Neha Kakkar, Monali Thakur, Ikka",
  },
  { name: "AngSeAngLagana", title: "Ang Se Ang Lagana", artist: "Alka Yagnik, Sudesh Bhosle, Vinod Rathod" },
  {
    name: "RangBaraseBheegeChunarwali",
    title: "Rang Barase Bheege Chunarwali",
    artist: "Amitabh Bachchan",
  },
];

// Array of Bollywood songs, in which each song is an object with the name, title and artist properties.
const bollywoodsongs = [
  { name: "Bekhayali", title: "Bekhayali", artist: "Sachet Tandon" },
  {
    name: "OSakiSaki",
    title: "O Saki Saki",
    artist: "Neha Kakkar, Tulai Kumar, B Praak, Tanishk Bagchi",
  },
  {
    name: "Aashiqui2Mashup",
    title: "Aashiqui 2 Mashup",
    artist: "Aashiqui 2 Music-Cast",
  },
  {
    name: "RockOn",
    title: "Rock On",
    artist: "Farhan Akhtar, Shraddha Kapoor",
  },
  { name: "CocaCola", title: "Coca Cola", artist: "Tony Kakkar, Neha Kakkar" },
  { name: "SaddaHaq", title: "Sadda Haq", artist: "Mohit Chauhan" },
];

// Array of Hollywood songs, in which each song is an object with the name, title and artist properties.
const hollywoodsongs = [
  { name: "Faded", title: "Faded", artist: "Alan Walker" },
  { name: "Closer", title: "Closer", artist: "The Chainsmokers, Halsey" },
  { name: "CheapThrills", title: "Cheap Thrills", artist: "Sia" },
  { name: "Friends", title: "Friends", artist: "Marshmello, Anne-Marie" },
  {
    name: "Senorita",
    title: "Senorita",
    artist: "Shawn Mendes, Camila Cabello",
  },
  { name: "I'mMess", title: "I'm a Mess", artist: "Bebe Rexha" },
];

changeimagewidth(); // calling the function to change the width of the images according to the screen size.
function changeimagewidth() {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth; // getting the width of the screen.
  if (w < 480) {
    console.log("Y");
    for (let i = 0; i < cat_images.length; i++) {
      cat_images[i].width = "300"; // changing the width of the images.
      cat_images[i].height = "300"; // changing the height of the images.
      category_title[i].style.width = "300px"; // changing the width of the category title.
      category_title[i].style.height = "300px"; // changing the height of the category title.
    }
  }
}

const hidevisible = () => {
  // function to hide the homepage content and show the main content.
  homepage_content.classList.remove("hidden"); // removing the hidden class from the homepage content.
  main_div.classList.add("hidden");
};

// Wrapping all the songs array in one array by Type of songs.
const allsongs = [
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
];
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

let songs = [];
let category;

const loadfirstsong = (
  arrno // function to load the first song of the category.
) => {
  songs = allsongs[arrno];
  category = allcategories[arrno];
  loadSong(songs[0]);
  homepage_content.classList.add("hidden");
  main_div.classList.remove("hidden");

  playmusic();
};

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

currSong = 0; // variable to store the current song number.

const loadSong = (song) => {
  // function to load the song.
  console.log(song);
  title.textContent = song.title;
  console.log(title.textContent); // changing the title of the song.
  artist.innerHTML = `<marquee>${song.artist}</marquee>`; // changing the artist of the song.
  music.src = "songs-images/" + category + "/" + song.name + ".mp3";
  console.log(music.src); // changing the source of the song.
  songimg.src = "songs-images/" + category + "/" + song.name + ".jpg";
  console.log(songimg.src); // changing the source of the image.
};

const nextSong = () => {
  // function to play the next song.
  console.log(songs[currSong]);
  currSong = (currSong + 1) % songs.length; // changing the current song number.
  loadSong(songs[currSong]); // calling the loadSong function to load the next song.
  playmusic(); // calling the playmusic function to play the next song.
};

const prevSong = () => {
  // function to play the previous song.
  console.log(songs[currSong]);
  currSong = (currSong - 1 + songs.length) % songs.length; // changing the current song number.
  loadSong(songs[currSong]); // calling the loadSong function to load the previous song.
  playmusic();
};

play.addEventListener("click", () => {
  // event listener to play or pause the song.

  if (isplaying) pausemusic();
  else playmusic();
});

music.addEventListener("timeupdate", (event) => {
  // event listener to update the progress bar of the song.
  const { currentTime, duration } = event.srcElement; // getting the current time and duration of the song.
  let progress_time = (currentTime / duration) * 100; // calculating the progress time of the song.
  progress.style.width = `${progress_time}%`; // changing the width of the progress bar.

  // updating duration time for each song

  let min_duration = Math.floor(duration / 60); // calculating the minutes of the song.
  let sec_duration = Math.floor(duration % 60); // calculating the seconds of the song.

  if (sec_duration < 10) {
    sec_duration = `0${sec_duration}`;
  } // adding 0 before the seconds if the seconds are less than 10.
  if (duration) {
    song_duration.textContent = `${min_duration}:${sec_duration}`;
  } // changing the duration of the song.

  // updating current time for a song curretly playing

  let min_currtime = Math.floor(currentTime / 60); // calculating the minutes of the song.
  let sec_currtime = Math.floor(currentTime % 60); // calculating the seconds of the song.

  if (sec_currtime < 10) {
    sec_currtime = `0${sec_currtime}`;
  } // adding 0 before the seconds if the seconds are less than 10.
  if (currentTime) {
    current_time.textContent = `${min_currtime}:${sec_currtime}`;
  } // changing the current time of the song.
});

progress_div.addEventListener("click", (event) => {
  // event listener to change the progress bar of the song.

  const { duration } = music; // getting the duration of the song.
  let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
  console.log(move_progress);
  music.currentTime = move_progress; // changing the current time of the song.
});

music.addEventListener("ended", nextSong); // Event listener to play the next song when the current song ends.

next.addEventListener("click", nextSong); // Event listener to play the next song when the next button is clicked.

prev.addEventListener("click", prevSong); // Event listener to play the previous song when the previous button is clicked.
