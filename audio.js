var data = {

    title: [
        "Michael Bublé - Feeling Good",
        "Billie Eilish - Happier Than Ever",
        "Bill Withers - Ain't No Sunshine",
        "Sam Smith - I'm Not The Only One",
        "Kaleo - Save Yourself",
        "Stevie Wonder -Isn't she lovely",
        "Tatev Ohanjanyan - My own music",
        "Ludovico Einaudi - Una Mattina ",
        "Frank Sinatra - Blue Moon"
    ],

    song: [

        "music/Feeling good.mp3",
        "music/Happier than ever.mp3",
        "music/Ain_t no sunshine.mp3",
        "music/I_m not the only one.mp3",
        "music/Save yourself.mp3",
        "music/Isn_t she lovely.mp3",
        "music/Tatev15.mp3",
        "music/Una Mattina.mp3",
        "music/Blue Moon.mp3"
    ],

    poster: [

        "https://i.gifer.com/OSOD.gif",
        "https://www.udiscovermusic.com/wp-content/uploads/2021/05/Billie-Eilish-Happier-Than-Ever-Tour.jpg",
        "https://djpteaching.com/wp-content/uploads/2018/09/Aint-No-Sunshine-Bill-Withers.jpg",
        "https://i.pinimg.com/originals/bd/ba/20/bdba20d60c6323820fc96bd26102a678.jpg",
        "https://cdns-images.dzcdn.net/images/cover/294bbdc3f67ae550c40830185b529873/350x350.jpg",
        "https://upload.wikimedia.org/wikipedia/en/2/25/Isn%27t_She_Lovely_-_Stevie_Wonder.jpg",
        "https://images.pexels.com/photos/3048527/pexels-photo-3048527.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i.ytimg.com/vi/ymMYzb2HBsg/maxresdefault.jpg",
        "https://i.ytimg.com/vi/gj8nYpnceuc/hqdefault.jpg",
    ],

}

var song = new Audio()

var currentSong = 0

window.onload = function () {
    playSong()
}




function playSong() {
    song.src = data.song[currentSong];

    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");


    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}

function playOrPauseSong() {
    let play = document.getElementById('play')

    if (song.paused) {
        song.play();
        play.src = "Images/pause.png"

    } else {
        song.pause();
        play.src = "Images/play-button-arrowhead.png"
    }
}


song.addEventListener("timeupdate", function () {

    let fill = document.getElementById("fill")

    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)

    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {

    let currentTime = document.getElementById("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
};

function totalTime(seconds) {

    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    if(isNaN(min) || isNaN(sec)){
        return false
}else{

    currentTime.textContent += "/" + min + ":" + sec
}


}


//     updateProgress = (x) => {
//         let { duration, currentTime } = x.srcElement
//         let progressProcent = (currentTime / duration) * 100
//     progress.style.width = `${progressProcent}%`
// }
// song.addEventListener("timeupdate", updateProgress)

//     setProgress = (e) => {
//         let clickX = e.offsetX
//         let duration = audio.duration
//     song.currentTime = (clickX / 329) * duration
// }
// progressContainer.addEventListener('click', setProgress)



function next(){
    currentSong++;
    if(currentSong>=data.song.length){
        currentSong=0
    }

    playSong();
    play.src = "images/pause.png";
}

function pre(){
    currentSong--;
    if(currentSong<0){
        currentSong= data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png";
}

function muted() {
    var mute = document.getElementById ("mute")
    if (song.muted) {
    song.muted = false
    mute.src = "images/volume.png" 
    } else {
    song.muted = true
    mute.src = "images/volume-mute.png"

    }
    }


    function increase() {
        song.volume += 0.2;
        }
        
        function decrease() {
        song.volume -= 0.2;
        }