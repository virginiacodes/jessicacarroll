// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const progressBar = document.getElementById("progressBar");
  const currentTimeDisplay = document.getElementById("currentTime");
  const durationDisplay = document.getElementById("duration");
  const volumeControl = document.getElementById("volumeControl");

  playPauseBtn.addEventListener("click", togglePlayPause);
  video.addEventListener("timeupdate", updateProgressBar);
  video.addEventListener("loadedmetadata", initializePlayer);
  progressBar.addEventListener("input", seekVideo);
  volumeControl.addEventListener("input", changeVolume);

  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playPauseBtn.textContent = "Pause";
    } else {
      video.pause();
      playPauseBtn.textContent = "Play";
    }
  }

  function updateProgressBar() {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    updateCurrentTime();
  }

  function initializePlayer() {
    progressBar.max = 100;
    updateDuration();
    updateCurrentTime();
  }

  function updateCurrentTime() {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    currentTimeDisplay.textContent = `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  function updateDuration() {
    const minutes = Math.floor(video.duration / 60);
    const seconds = Math.floor(video.duration % 60);
    durationDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  function seekVideo() {
    const seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime;
  }

  function changeVolume() {
    video.volume = volumeControl.value;
  }
});
