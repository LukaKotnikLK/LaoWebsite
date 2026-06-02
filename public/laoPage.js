const playBtn = document.getElementById("playBtn");

const inside = document.getElementById("inside");
const video = document.getElementById("video");

const loadingImage = document.getElementById("loadingImage");

const tos = document.getElementById("tos");
const agreeBtn = document.getElementById("agreeBtn");

playBtn.onclick = () => {
  document.querySelector(".front").style.display = "none";
  inside.style.display = "flex";

  // reset UI state (safe)
  tos.classList.add("hidden");
  agreeBtn.classList.add("hidden");

  loadingImage.style.display = "block";
  loadingImage.style.opacity = "1";

  video.classList.remove("show");

  video.load();
};

video.addEventListener("canplay", async () => {
  try {
    await video.play();
  } catch (err) {
    console.error(err);
  }
});

video.addEventListener("playing", () => {
  video.classList.add("show");

  loadingImage.style.transition = "opacity 0.4s ease";
  loadingImage.style.opacity = "0";

  setTimeout(() => {
    loadingImage.style.display = "none";
  }, 400);
});

video.addEventListener("ended", () => {
  document.querySelector(".video-container").classList.add("collapsed");

  tos.classList.remove("hidden");
  agreeBtn.classList.remove("hidden");
});

agreeBtn.onclick = () => {
  window.location.href = "download.html";
};