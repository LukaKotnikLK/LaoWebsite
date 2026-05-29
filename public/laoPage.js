const box = document.getElementById("box");
const proceedBtn = document.getElementById("proceedBtn");
const inside = document.getElementById("inside");
const video = document.getElementById("video");
const agreeBtn = document.getElementById("agreeBtn");

proceedBtn.onclick = async () => {

  // hide front UI
  document.querySelector(".front").style.display = "none";

  // expand box (blinds effect)
  box.classList.add("open");

  // show inside
  inside.style.display = "flex";

  // play video
  await video.play();
};

agreeBtn.onclick = () => {
  window.location.href = "download.html";
};