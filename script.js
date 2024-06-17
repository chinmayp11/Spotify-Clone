console.log("welcome to javascript");
//initializing variables
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
//audioElement.play();
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

let songs=[{songName:"Ncs",filepath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"BGM1-English",filepath:"song/2.mp3",coverPath:"covers/2.jpg"},
{songName:"BGM2-English",filepath:"song/3.mp3",coverPath:"covers/3.jpg"},
{songName:"BGM3-English",filepath:"song/4.mp3",coverPath:"covers/4.jpg"},
{songName:"BGM4-English",filepath:"song/5.mp3",coverPath:"covers/5.jpg"},
{songName:"BGM5-English",filepath:"song/6.mp3",coverPath:"covers/6.jpg"},
{songName:"BGM6-English",filepath:"song/7.mp3",coverPath:"covers/7.jpg"},
{songName:"BGM7-English",filepath:"song/8.mp3",coverPath:"covers/8.jpg"},
{songName:"BGM8-English",filepath:"song/9.mp3",coverPath:"covers/9.jpg"},
{songName:"BGM9-English",filepath:"song/10.mp3",coverPath:"covers/10.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
// songItems.forEach((element,i) =>{
//     console.log(element,i);
//     element.getElementByTagName("img")[0].src=songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
// });
//audioElement.play();
//event Listener
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
       gif.style.opacity=0;
    }
})
 audioElement.addEventListener('timeupdate' , ()=>{
    
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
 })
 myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
       console.log(e.target);
       makeAllPlays()
       songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
}) 
document.getElementById('next').addEventListener('click', ()=>{
if(songIndex>9)
{
    songIndex=0;
}
else{
    songIndex +=1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})