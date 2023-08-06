const volumeRange = document.getElementById("volumeRange1");
const volumeLabel = document.getElementById("volumeLabel");

volumeLabel.innerHTML = "Volume: " + volumeRange.value;

volumeRange.addEventListener("input", () => {
  volumeLabel.innerHTML = "Volume: " + volumeRange.value;
})