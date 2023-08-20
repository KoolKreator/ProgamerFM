const TrackLabel = document.getElementById("nowPlaying");
const recentTracks = document.getElementById("recentlyPlayedList");
const PlayBtn = document.getElementById("playButton");
const volumeBtn = document.getElementById("volumeButton");
const stream = new Audio();
const eventSource = new EventSource(
  "https://api.zeno.fm/mounts/metadata/subscribe/y6wzijajoeptv"
);
const display = 8;
let currDisplay = 0;

// * https://stream.zeno.fm/swlbzqhjzu3uv

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

function updateBar(status) {
  if (status == "playing") {
    document
      .getElementById("streamProgress")
      .classList.add("progress-bar-striped");
    document.getElementById("streamStatus").innerHTML =
      "ProGammer FM Streaming Live From Zenofm.";
  } else if (status == "stopped") {
    document
      .getElementById("streamProgress")
      .classList.remove("progress-bar-striped");
    document.getElementById("streamStatus").innerHTML = "Stream Is Paused";
  } else {
    document
      .getElementById("streamProgress")
      .classList.remove("progress-bar-striped");
    document.getElementById("streamStatus").innerHTML = "Stream Is Stopped";
  }
}

function addToRecent(track) {
  if (currDisplay >= display) {
    recentTracks.innerHTML = "";
    currDisplay = 0;
    let item = document.createElement("li");
    item.classList.add("list-group-item");
    item.innerHTML = track;
    recentTracks.prepend(item);
    currDisplay += 1;
  } else {
    currDisplay += 1;
    let item = document.createElement("li");
    item.classList.add("list-group-item");
    item.innerHTML = track;
    recentTracks.prepend(item);
  }
}

eventSource.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  // Process the received data here
  //// console.log(data.streamTitle);
  updateTrackLabel(data.streamTitle);
  setTimeout(() => {
    addToRecent(data.streamTitle);
  }, 60000);
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
    updateBar("playing");
  } else {
    PlayBtn.querySelector("i").classList.remove("bi-stop-fill");
    PlayBtn.querySelector("i").classList.add("bi-play-fill");
    stopRadioStream();
    updateBar("stopped");
  }
});
