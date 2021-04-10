"use strict";
const videoElement = document.getElementById("video");
const btnStart = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("Error: ", error);
  }
}

btnStart.addEventListener("click", async () => {
  try {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
  } catch (error) {
    console.log("RequestPictureInPicture error: ", error);
  }
});

// Check browser support for Picture in Picture API
if ("pictureInPictureEnabled" in document) {
  // On Load
  selectMediaStream();
} else {
  btnStart.disabled = true;
  alert("Picture-in-Picture API is not supported in this browser.");
}
