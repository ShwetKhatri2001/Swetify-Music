var redirect = "http://localhost:5501/spotify-login.html";

var client_id = "e5a392471667465499be5e9bc54c24dc";
var client_secret = "3a7df71fe8554b5faaa1bd69c11265c9";

const AUTHORIZE = "https://accounts.spotify.com/authorize?";

const TOKEN = "https://accounts.spotify.com/api/token";
const ARTISTS = "https://api.spotify.com/v1/me/top/artists?offset=0&limit=10&time_range=long_term";
const TRACKS = "https://api.spotify.com/v1/me/top/tracks?offset=0&limit=10&time_range=long_term";

const list = document.getElementById('spotify-list');
const cover = document.getElementById('cover');
cover.classList.add("hide");


function onPageLoad() {
   getProfile();
   getTopSongs();
   renderTopSongs();
}

function getHashParams() {
   var hashParams = {};
   var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
   while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
   }
   return hashParams;
}

async function getProfile() {
   var params = getHashParams();

   var access_token = params.access_token;
   const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
         Authorization: 'Bearer ' + access_token
      }
   });
   const data = await response.json();
   setProfileData(data);
}

async function getTopSongs() {
   var params = getHashParams();

   var access_token = params.access_token;
   const response = await fetch('https://api.spotify.com/v1/me/top/tracks?offset=0&limit=10&time_range=long_term', {
      headers: {
         Authorization: 'Bearer ' + access_token
      }
   });
   const data = await response.json();
   renderTopSongs(data);
}

async function getTopArtists() {
   var params = getHashParams();

   var access_token = params.access_token;
   const response = await fetch('https://api.spotify.com/v1/me/top/artists?offset=0&limit=10&time_range=long_term', {
      headers: {
         Authorization: 'Bearer ' + access_token
      }
   });
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

      // Create an image element
      // var img = document.createElement('img');
      // img.src = song.album.images[0].url;
      // img.alt = song.name;

      // img.width = 200;
      // img.height = 100;

      // Append the image element to the song item
      // songItemElement.appendChild(img);

      // Append the song item to the top songs list
      topSongsListElement.appendChild(songItemElement);
   });
}

function userLogout() {
   let comfirm=confirm("logout??")
   if(comfirm){
      // Redirect the user to the login page or perform any other necessary actions
      window.location.href = '/';
   }
   
}

function toggleProfile() {
   
   var profileData = document.getElementById("profile-data");
   profileData.style.display = (profileData.style.display === "none") ? "flex" : "none";

}