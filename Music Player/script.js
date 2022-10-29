const tracks=[
    {
        name:"Coming Back To Life",
        artist: "Pink Floyd",
        image: "./assests/coming back to lige.jpg",
        path: " ./assests/ComingBackToLife.mp3"
    },
    {
        name:"Believer",
        artist: "Imagine dragons",
        image: "./assests/beliver.jpg",
        path: " ./assests/Believer.mp3"
    },
    {
        name:"Fade Into Darkness",
        artist: "DJ Avicii",
        image: "./assests/fade into darkness.jpg",
        path: " ./assests/FadeIntoDarkness.mp3"
    },
]








// Select all the elements in the HTML page
// and assign them to a variable
const  now_playing = document.querySelector(".now-playing");
const  track_art = document.querySelector(".track-art");
const  track_name = document.querySelector(".track-name");
const  track_artist = document.querySelector(".track-artist");

const playpause_btn = document.querySelector(".playpause-track");
 const  next_btn = document.querySelector(".next-track");
 const  prev_btn = document.querySelector(".prev-track");

const  seek_slider = document.querySelector(".seek_slider");
 const  volume_slider = document.querySelector(".volume_slider");
 const  curr_time = document.querySelector(".current-time");
 const  total_duration = document.querySelector(".total-duration");

 