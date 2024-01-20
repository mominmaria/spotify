console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('hollywoodsong/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songItems1 = Array.from(document.getElementsByClassName('songItem1'));

// let songs = [
//     {songName: "Hua Main [From Animal]", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
//     {songName: "Besharam Rang [From Pathan]", filePath: "songs/2.mp3", coverPath: "covers/2.png"},
//     {songName: "Tere Pyaar Mein", filePath: "songs/3.mp3", coverPath: "covers/3.png"},
//     {songName: "Tum Kya Mile [From Rocky Aur Rani Ki Prem Kahani]", filePath: "songs/4.mp3", coverPath: "covers/4.png"},
//     {songName: "Pehle Bhi Main [From Animal]", filePath: "songs/5.mp3", coverPath: "covers/5.png"},
//     {songName: "Kesariya [From Brahmastra]", filePath: "songs/6.mp3", coverPath: "covers/6.png"},
//     {songName: "Pyaar Hota Kayi Baar Hai [From Tu Jhooti Mai Makkar]", filePath: "songs/7.mp3", coverPath: "covers/7.png"},
//     {songName: "Tere Vaaste [From Zara Hatke Zara Bachke]", filePath: "songs/8.mp3", coverPath: "covers/8.png"},
//     {songName: "Faratta [From Jawaan]", filePath: "songs/9.mp3", coverPath: "covers/9.png"},
//     {songName: "Character Dheela 2.0 [From Shehzada]", filePath: "songs/10.mp3", coverPath: "covers/10.png"},
// ]

let songs = [
    {songName: "Olivia Rodrigo — [Vampire]", filePath: "hollywoodsong/1.mp3", coverPath: "covers/11.png"},
    {songName: "Dua Lipa — [Dance The Night]", filePath: "hollywoodsong/2.mp3", coverPath: "covers/12.png"},
    {songName: "Reneé Rapp — [Snow Angel]", filePath: "hollywoodsong/3.mp3", coverPath: "covers/13.png"},
    {songName: "Conan Gray — [Never Ending Song]", filePath: "hollywoodsong/4.mp3", coverPath: "covers/14.png"},
    {songName: "Kim Petras & Nicki Minaj — [Alone]", filePath: "hollywoodsong/5.mp3", coverPath: "covers/15.png"},
    {songName: "d4vd — [Don't Forget About Me]", filePath: "hollywoodsong/6.mp3", coverPath: "covers/16.png"},
    {songName: "Don Toliver Featuring Kali Uchis — [4 Me]", filePath: "hollywoodsong/7.mp3", coverPath: "covers/17.png"},
    {songName: "The Aces — [I've Loved You For So Long]", filePath: "hollywoodsong/8.mp3", coverPath: "covers/18.png"},
    {songName: "JORDY — [Story of a Boy]", filePath: "hollywoodsong/9.mp3", coverPath: "covers/19.png"},
    {songName: "Icona Pop & Yaeger — [Sh*t We Do For Love]", filePath: "hollywoodsong/10.mp3", coverPath: "covers/20.png"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// songItems1.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs1[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs1[i].songName; 
// })
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `hollywoodsong/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `hollywoodsong/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `hollywoodsong/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})