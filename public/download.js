const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");

const shareText = "lao? ";
const shareUrl = "https://lao.info-slajmi.workers.dev/";

let menuOpen = false;

// toggle menu
shareBtn.onclick = async () => {

  const message = `${shareText} ${shareUrl}`;

  // 📱 MOBILE / MODERN BROWSERS: native share sheet
  if (navigator.share) {
    try {
      await navigator.share({
        title: "lao?",
        text: shareText,
        url: shareUrl
      });
    } catch (err) {
      console.log("Share cancelled or failed");
    }
    return;
  }

  // 💻 fallback: show custom menu
  menuOpen = !menuOpen;
  shareMenu.style.display = menuOpen ? "flex" : "none";
};

// handle clicks inside menu (desktop fallback)
shareMenu.addEventListener("click", async (e) => {
  const type = e.target.dataset.type;
  const message = `${shareText}
${shareUrl}`;

  const xLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent("lao?")}&body=${encodeURIComponent(message)}`;
  const instagramLink = `https://www.instagram.com/p/DM2eh6lt8bn/`;

  if (type === "x") window.open(xLink, "_blank");
  if (type === "fb") window.open(fbLink, "_blank");
  if (type === "gmail") window.open(gmailLink, "_blank");
  if (type === "instagram") window.open(instagramLink, "_blank");

  shareMenu.style.display = "none";
  menuOpen = false;
});

// close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".share-wrapper")) {
    shareMenu.style.display = "none";
    menuOpen = false;
  }
});