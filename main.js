// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

const player = document.querySelector(".player");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Night Owl",
	artist: "Broke For Free",
	image: "Image URL",
	path: "Night_Owl.mp3"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "Image URL",
	path: "Enthusiast.mp3"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "Image URL",
	path: "Shipping_Lanes.mp3",
},
];

playpause_btn.addEventListener("click", playMusic);
playpause_btn.addEventListener("click", playpauseTrack);
playpause_btn.addEventListener("click", resetTime)
next_btn.addEventListener("click", onClick);
prev_btn.addEventListener("click", backgroundChanger);
next_btn.addEventListener("click", resetTime);
prev_btn.addEventListener("click", resetTime);
next_btn.addEventListener("click", nextTrack);
prev_btn.addEventListener("click", nextTrack);


//mutassa alapból az elsőt 

if(track_index == 0) {
	track_name.textContent = "Night Owl";
	track_artist.textContent ="Broke For Free";
}

//lépjen

function nextTrack() {
	if (track_index == 0) {
		track_name.textContent = "Enthusiast";
		track_artist.textContent = "Tours";
		track_index = 1
	} else if (track_index == 1) {
		track_name.textContent = "Shipping Lanes";
		track_artist.textContent = "Chad Crouch";
		track_index = 2
	} else if (track_index == 2 ) {
		track_name.textContent = "Night Owl";
	track_artist.textContent ="Broke For Free";
	}
}

//számláló

function playMusic(){
	setTimeout(incrementCurrentTime, 1000);
}

function incrementCurrentTime() {
	const currentTime = document.getElementsByClassName("current-time")[0];
	const currentTimeNumber = currentTime.innerText.replace(":","");
	const nextTime = parseInt(currentTimeNumber) + 1;
	
	if (nextTime < 10) {
		currentTime.innerText = "00:0" + nextTime;
	} else if (nextTime < 60) {
		currentTime.innerText = "00:" + nextTime;
	}	
	setTimeout(incrementCurrentTime, 1000);
}

//állítsa meg 

function resetTime() {
    if (isPlaying) {
		curr_time.textContent = "00:00";
	}
}

function playpauseTrack() {
	if (!isPlaying) playTrack();
	else pauseTrack();
  }
   
  function playTrack() {
	isPlaying = true
	playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
   
  function pauseTrack() {
	isPlaying = false;
	playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  }


let counter = 0; 

function onClick(event) {
	if (counter == 0) {
		next_btn.classList.add("next-track1");
		counter = 1
	} else if (counter == 1){
		next_btn.classList.remove("next-track1");
		next_btn.classList.add("next-track2");
		counter = 2
	} else if (counter == 2){
		next_btn.classList.remove("next-track2");
		next_btn.classList.add("next-track3");
		counter = 0
	}
}

function backgroundChanger(event) {
	if (counter == 0) {
		player.classList.add("player-bg1");
		counter = 1;
	} else if (counter == 1) {
		player.classList.remove("player-bg1");
		player.classList.add("player-bg2");
		counter = 2;
	} else if (counter == 2) {
		player.classList.remove("player-bg2");
		player.classList.add("player-bg3");

	}
}


volume_slider.addEventListener("input", function(){
	const rangevalue = volume_slider.value;
	track_name.style.fontSize = rangevalue + "px";
})


/* mikor megnyomom a jobbra/balra gombot, akkor a jobbra zöldről váltson kékre,kékről pirosra,megint zöldre  kész
ha balra, akkor visszafele "minden számnak saját háttér" kész
jobbra/balra, akkor a current time reset kész
jobbra/balra alapértelmezettbe az elsőt írja ki, amúgy meg lépjen 
hangerő slider hatására változzon a track name mérete (10 és 72 px között)
*/

