const TrackLabel = document.getElementById("nowPlaying");
const PlayBtn = document.getElementById("playButton");
const volumeBtn = document.getElementById("volumeButton");
const stream = new Audio();
const eventSource = new EventSource(
  "https://api.zeno.fm/mounts/metadata/subscribe/y6wzijajoeptv"
);

//https://stream.zeno.fm/swlbzqhjzu3uv

// let trackData = await response.json();
function getPlayingTrack() {
  console.log("code");
}

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

function updateTrackLabel(data) {
  if (data != "" || data != null || data != undefined) {
    TrackLabel.innerHTML = data;
  } else {
    TrackLabel.innerHTML = "Unavailable";
  }
}

eventSource.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  // Process the received data here
  // console.log(data.streamTitle);
  updateTrackLabel(data.streamTitle);
});

eventSource.addEventListener("error", (error) => {
  // Handle any errors that occur during the connection
  console.error(error);
});

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
