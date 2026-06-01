const enterBtn = document.getElementById("enterBtn");
const video = document.getElementById("introVideo");
const ui = document.getElementById("ui");

const video1 = "lao1.mp4";
const video2 = "lao2.mp4";

let stage = 1;

async function playVideo(src) {
  video.pause();
  video.removeAttribute("src");
  video.load();

  video.src = src;

  try {
    await video.play();
  } catch (err) {
    console.error("Video play failed:", err);
  }
}

enterBtn.onclick = async () => {
  enterBtn.style.display = "none";

  video.style.display = "block";

  stage = 1;
  ui.innerHTML = "";

  await playVideo(video1);
};

video.addEventListener("ended", () => {
  console.log("ended fired, stage =", stage);

  if (stage === 1) {
    ui.innerHTML = `
      <div style="display:flex; gap:15px;">
        <button class="btn" id="nextBtn">
          <img src="images/yes.png" alt="Yes">
        </button>

        <button class="btn" onclick="alert('Other option')">
          <img src="images/no.png" alt="No">
        </button>
      </div>
    `;

    document.getElementById("nextBtn").onclick = async () => {
      ui.innerHTML = "";

      stage = 2;

      await playVideo(video2);
    };

  } else if (stage === 2) {
    window.location.href = "laoPage.html";
  }
});