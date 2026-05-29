const enterBtn = document.getElementById("enterBtn");
const video = document.getElementById("introVideo");
const ui = document.getElementById("ui");

const video1 = "video1.mp4";
const video2 = "video2.mp4";

let stage = 1;

enterBtn.onclick = async () => {
  enterBtn.style.display = "none";

  video.style.display = "block";
  video.src = video1;

  await video.play();
};

video.addEventListener("ended", () => {

  if (stage === 1) {
    // 👇 Inject buttons ONLY after video 1 ends
    ui.innerHTML = `
      <div style="display:flex; gap:15px;">
        <button class="btn" id="nextBtn">Yes</button>
        <button class="btn" onclick="alert('Other option')">No</button>
      </div>
    `;

    document.getElementById("nextBtn").onclick = async () => {
      ui.innerHTML = ""; // remove buttons

      stage = 2;
      video.src = video2;
      await video.play();
    };

  } else {
    window.location.href = "laoPage.html";
  }
});