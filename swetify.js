
const music = document.querySelector('audio');
const songimg = document.getElementById('songimg')
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let progress = document.getElementById('progress');
let song_duration = document.getElementById('duration');
let current_time = document.getElementById('current_time');
const progress_div = document.getElementById('progress_div');
const homepage_content = document.getElementById('homepage_content');
const main_div = document.getElementById('main_div');
let cat_images = document.getElementsByClassName('image');
let category_title = document.getElementsByClassName('small-category');

const atifsongs=[
{ name : "DekhteDekhte", title : "Dekhte Dekhte", artist : "Atif Aslam, Nusarat Ali Fateh Khan, Rochak Kohli"},
{name: "PehliDafa",title : "Pehli Dafa",artist : "Atif Aslam, Shiraz Uppal"},
{name: "DilDiyanGallan",title : "Dil Diyan Gallan",artist : "Atif Aslam"},
{name: "PaniyonSa",title : "Paniyon Sa",artist : "Atif Aslam, Tulsi Kumar, Rochak Kohli"},
{name: "TeresangYaara",title : "Tere Sang Yaara",artist : "Atif Aslam"},
{name: "JeenaJeena",title : "Jeena Jeena",artist : "Atif Aslam"}];

const arijitsongs=[
{name : "TumHiHo",title : "Tum Hi Ho",artist : "Arijit Singh"},
{name: "Khairiyat",title : "Khairiyat",artist : "Arijit Singh"},
{name: "IkVaariAa",title : "Ik Vaari Aa",artist : "Arijit Singh"},
{name: "Qaafirana",title : "Qaafirana",artist : "Arijit Singh, Nikita Ganndhi"},
{name: "TeraYaarHoonMain",title : "Tera Yaar Hoon Main",artist : "Arijit Singh"},
{name: "TujheKitnaChahneLage",title : "Tujhe Kitna Chahne Lage",artist : "Arijit Singh"},
{name: "Naina",title : "Naina",artist : "Arijit Singh"}];

const nehasongs=[
{name : "Dilbar",title : "Dilbar",artist : "Neha Kakkar, Dhvani Bhanushali, Ikka, Tanishk Bagchi"},
{name: "TuHiYaarMera",title : "Tu Hi Yaar Mera",artist : "Neha Kakkar, Arijit Singh, Rochak Kohli"},
{name: "YaadPiyaKiAaneLagi",title : "Yaad Piya Ki Aane Lagi",artist : "Neha Kakkar, Tanishk Bagchi, Lalit Sen"},
{name: "Garmi",title : "Garmi",artist : "Neha Kakkar, Badshah"},
{name: "LaLaLa",title : "La La La",artist : "Neha Kakkar, Arjun Kanungo"},
{name: "GaliGali",title : "Gali Gali",artist : "Neha Kakkar, Tanishk Bagchi"}];

const jubinsongs=[
{name : "GazabKaHaiDin",title : "Gazab Ka Hai Din",artist : "Jubin Nautiyal, Prakriti Kakkar, Tanishk Bagchi"},
{name: "TujheKitnaChaheinAur",title : "Tujhe Kitna Chahein Aur",artist : "Jubin Nautiyal"},
{name: "TumHiAana",title : "Tum Hi Aana",artist : "Jubin Nautiyal, Payal Dev"},
{name: "LoSafar",title : "Lo Safar",artist : "Jubin Nautiyal, Mithoon"},
{name: "ZindagiKuchTohBata",title : "Zindagi Kuch Toh Bata",artist : "Jubin Nautiyal"}];

const ritvizsongs=[
{name : "UddGaye",title : "Udd Gaye",artist : "Ritviz"},
{name: "Sage",title : "Sage",artist : "Ritviz"},
{name: "ChaloChalein",title : "Chalo Chalein",artist : "Ritviz"},
{name: "Jeet",title : "Jeet",artist : "Ritviz"},
{name: "ThandiHawa",title : "Thandi Hawa",artist : "Ritviz"},
{name: "Jeet2.0",title : "Jeet 2.0",artist : "Ritviz"}];

const rocksongs=[
{name : "Beliver",title : "Beliver",artist : "Imagine Dragon"},
{name: "CrazyTrain",title : "Crazy Train",artist : "Ozzy Osbourne"},
{name: "DanceDance",title : "Dance Dance",artist : "Toners"},
{name: "RockYouLikeAHarricane",title : "Rock You Like A Harricane",artist : "Scorpions"}];

const dancesongs=[
{name : "PostMalone",title : "Post Malone",artist : "Sam Feldt"},
{name: "TechnoPrank",title : "Techno Prank",artist : "Dubdogz"},
{name: "BoomZubarecki",title : "Boom Zubarecki",artist : "Tiesto, Seven"},
{name: "WhatUWaitingFo",title : "What U Waiting Fo",artist : "Moti x Bodyworx"},
{name: "ThereForYou",title : "There For You",artist : "Alex Hart"}];

const collegesongs=[
{name : "TeriYaari",title : "Teri Yaari",artist : "Milind Gaba, Aparshakti Khurana, King Kaazi"},
{name: "Yaari",title : "Yaari",artist : "Nikk feat. Avneet Kaur"},
{name: "AtrangiYaari",title : "Atrangi Yaari",artist : "Amitabh Bachchan, Farhan Akhtar"},
{name: "WohDin",title : "Woh Din",artist : "Arijit Singh"},
{name: "Hostel",title : "Hostel",artist : "Sharry Mann, Parmish Verma, Mista Baaz"},
{name: "YaaraTeriYaari",title : "Yaara Teri Yaari",artist : "Darshan Raval"}];

const garbasongs=[
{name : "Dholida",title : "Dholida",artist : "Udit Narayan, Neha Kakkar, Palak Muchhal, Raja Hasan"},
{name: "Chogada",title : "Chogada",artist : "Darshan Raval, Asees Kaur"},
{name: "AtulPurohit3Tali",title : "Atul Purohit 3 Tali",artist : "Atul Purohit and mandal"},
{name: "AtulPurohit2Tali",title : "Atul Purohit 2 Tali",artist : "Atul Purohit and mandal"},
{name: "AtulbhaiFinalSteps",title : "Atulbhai Final Steps",artist : "Atul Purohit"},
{name: "FullNightTrack",title : "Full Night Track",artist : "Ae Halo"}];

const bollywoodsongs=[
{name : "Bekhayali",title : "Bekhayali",artist : "Sachet Tandon"},
{name: "OSakiSaki",title : "O Saki Saki",artist : "Neha Kakkar, Tulai Kumar, B Praak, Tanishk Bagchi"},
{name: "Aashiqui2Mashup",title : "Aashiqui 2 Mashup",artist : "Aashiqui 2 Music-Cast"},
{name: "RockOn",title : "Rock On",artist : "Farhan Akhtar, Shraddha Kapoor"},
{name: "CocaCola",title : "Coca Cola",artist : "Tony Kakkar, Neha Kakkar"},
{name: "SaddaHaq",title : "Sadda Haq",artist : "Mohit Chauhan"}];

const hollywoodsongs=[
{name : "Faded",title : "Faded",artist : "Alan Walker"},
{name: "Closer",title : "Closer",artist : "The Chainsmokers, Halsey"},
{name: "CheapThrills",title : "Cheap Thrills",artist : "Sia"},
{name: "Friends",title : "Friends",artist : "Marshmello, Anne-Marie"},
{name: "Senorita",title : "Senorita",artist : "Shawn Mendes, Camila Cabello"},
{name: "I'mMess",title : "I'm a Mess",artist : "Bebe Rexha"}];


changeimagewidth();
function changeimagewidth(){
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
if(w < 480)
{console.log('Y');
for ( let i=0 ; i<cat_images.length ; i++)
{
	cat_images[i].width = '300';
	cat_images[i].height = '300';
	category_title[i].style.width = '300px';
	category_title[i].style.height = '300px';
}
}}

const hidevisible = () =>{
	homepage_content.classList.remove("hidden");
	main_div.classList.add("hidden");
	
}

const allsongs=[hollywoodsongs,bollywoodsongs,rocksongs,dancesongs,collegesongs,garbasongs,nehasongs,arijitsongs,
                ritvizsongs,jubinsongs,atifsongs];
const allcategories = ['TopHollywoodHits','TopBollywoodHits','RockOn','DanceHits','CollegeDeYaar','GujjuGarba',
                'NehaKakkar','ArijitSingh','Ritviz','JubinNautiyal','AtifAslam'];

let songs = [];
let category;

const loadfirstsong = (arrno) =>
{
	songs = allsongs[arrno];
	category = allcategories[arrno];
	loadSong(songs[0]);
	homepage_content.classList.add("hidden");
	main_div.classList.remove("hidden");
	
    playmusic()
}

let isplaying = false;



const playmusic = () =>{
      isplaying = true;
      music.play();
      play.classList.replace("fa-play","fa-pause");
      //songimg.classList.add("anime");
}

const pausemusic = () =>{
      isplaying = false;
      music.pause();
      play.classList.replace("fa-pause","fa-play");
      //songimg.classList.remove("anime");
}

 currSong = 0;

const loadSong = (song) =>{
    
    console.log(song);
	title.textContent = song.title;console.log(title.textContent);
	artist.innerHTML = `<marquee>${song.artist}</marquee>`;
	music.src = "songs-images/" + category + "/" + song.name +".mp3";console.log(music.src);
	songimg.src = "songs-images/" + category + "/" + song.name + ".jpg";console.log(songimg.src);
}

const nextSong = () =>{
	console.log(songs[currSong]);
	currSong = (currSong + 1) % songs.length;
	loadSong(songs[currSong]);
	playmusic();
}

const prevSong = () =>{
	console.log(songs[currSong]);
	currSong = (currSong - 1 + songs.length) % songs.length;
	loadSong(songs[currSong]);
	playmusic();
}



play.addEventListener('click', () =>{

    if(isplaying)
    	pausemusic();
    else
    	playmusic();

});

music.addEventListener('timeupdate',(event) => {
	const {currentTime,duration } = event.srcElement;
	let progress_time = (currentTime / duration ) * 100 ;
    progress.style.width = `${progress_time}%`;

    // updating duration time for each song

    let min_duration = Math.floor(duration / 60 );
    let sec_duration = Math.floor(duration % 60 );

    if(sec_duration < 10){sec_duration = `0${sec_duration}`;}
    if(duration){
    song_duration.textContent = `${min_duration}:${sec_duration}`;}

    // updating current time for a song curretly playing

    let min_currtime = Math.floor(currentTime / 60 );
    let sec_currtime = Math.floor(currentTime % 60 );

    if(sec_currtime < 10 ){sec_currtime = `0${sec_currtime}`;}
    if(currentTime){
    current_time.textContent = `${min_currtime}:${sec_currtime}`;}

});

progress_div.addEventListener('click', (event) =>{
     
   const {duration} = music;
   let move_progress = (event.offsetX / event.srcElement.clientWidth)
                                       * duration;
   console.log(move_progress);
   music.currentTime = move_progress;
});

music.addEventListener('ended', nextSong);

next.addEventListener('click',nextSong);

prev.addEventListener('click',prevSong);
