const TrackLabel = document.getElementById("nowPlaying");
const PlayBtn = document.getElementById("playButton");
const volumeBtn = document.getElementById("volumeButton");
const stream = new Audio();

//https://zenoplay.zenomedia.com/api/zenofm/nowplaying/y6wzijajoeptv
//https://stream.zeno.fm/swlbzqhjzu3uv

function playRadioStream(url) {
  stream.src = url;
  stream.play();
}

function stopRadioStream() {
  //remove audio element
  stream.pause();
  stream.src = "";
}

function setVolume(volume) {
  stream.volume = volume;
}

function muteAudio() {
  stream.muted = true;
}

function unmuteAudio() {
  stream.muted = false;
}

stream.addEventListener("error", (e) => {
  console.log(e);
});

//Autoupdate trackLabel using data from getPlayingTrack()
function updateTrackLabel() {
  console.log("code");
}

PlayBtn.addEventListener("click", (e) => {
  if (stream.paused || stream.src == "") {
    PlayBtn.querySelector("i").classList.remove("bi-play-fill");
    PlayBtn.querySelector("i").classList.add("bi-stop-fill");
    playRadioStream("https://stream.zeno.fm/swlbzqhjzu3uv");
    document
      .getElementById("streamProgress")
      .classList.add("progress-bar-striped");
    document.getElementById("streamStatus").innerHTML =
      "ProGammer FM Streaming Live From Zenofm.";
  } else {
    PlayBtn.querySelector("i").classList.remove("bi-stop-fill");
    PlayBtn.querySelector("i").classList.add("bi-play-fill");
    stopRadioStream();
    document
      .getElementById("streamProgress")
      .classList.remove("progress-bar-striped");
    document.getElementById("streamStatus").innerHTML = "Stream Is Stopped";
  }
});
