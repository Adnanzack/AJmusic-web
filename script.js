console.log(Welcome to AJ music player)

//initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');



let songs =[
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "Apna-muje-tu-laga" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
]

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

//lisent to event//
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    //update seekbar
})
