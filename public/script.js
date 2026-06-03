const enterBtn = document.getElementById("enterBtn");
const video = document.getElementById("introVideo");
const ui = document.getElementById("ui");
const video1 = "lao1.mp4";
const video2 = "lao2.mp4";
let stage = 1;

enterBtn.onclick = () => {
  enterBtn.style.display = "none";
  document.querySelector(".video-wrapper").style.display = "block";
  stage = 1;
  ui.innerHTML = "";
  video.src = video1;
  video.load();
  video.play().catch(err => console.error("Video play failed:", err));
};

video.addEventListener("ended", () => {
  console.log("ended fired, stage =", stage);
  if (stage === 1) {
    ui.innerHTML = `
  <div class="btn-row" style="display:flex; justify-content: center; gap: 300%;">
    <button class="btn" onClick="window.location.reload();">
      <p class="no">no</p>
    </button>
    <button class="btn" id="nextBtn">
      <p class="yes">yes</p>
    </button>
  </div>
`;
    document.getElementById("nextBtn").onclick = () => {
      ui.innerHTML = "";
      stage = 2;
      video.src = video2;
      video.load();
      video.play().catch(err => console.error("Video play failed:", err));
    };
  } else if (stage === 2) {
    window.location.href = "laoPage.html";
  }
});