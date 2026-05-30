const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");

const shareText = "LAO 🟨:";
const shareUrl = "https://laoart.printify.me/";

let menuOpen = false;

// toggle menu
shareBtn.onclick = async () => {

  const message = `${shareText} ${shareUrl}`;

  // 📱 MOBILE / MODERN BROWSERS: native share sheet
  if (navigator.share) {
    try {
      await navigator.share({
        title: "LAO 🟨",
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

  const message = `${shareText} ${shareUrl}`;

  const xLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  if (type === "x") {
    window.open(xLink, "_blank");
  }

  if (type === "fb") {
    window.open(fbLink, "_blank");
  }

  if (type === "copy") {
    await navigator.clipboard.writeText(message);
    alert("Copied!");
  }

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