document.addEventListener("DOMContentLoaded", () => {
  // COMMERCIAL
  const commercialNav = document.getElementById("commercialNav");
  const content = document.getElementById("commercialContent");

  const chevronIcon = document.getElementById("commercialIcon");
  const commercialTitle = document.getElementById("commercialTitle");

  // CARTOON & VIDEO GAMES
  const cartoonNav = document.getElementById("cartoonNav");
  const videos = document.getElementById("video");

  const chevronIconCartoon = document.getElementById("cartoonIcon");
  const cartoonTitle = document.getElementById("cartoonTitle");

  // COMMERCIAL
  commercialNav.addEventListener("click", () => {
    if (content.classList.contains("visible")) {
      content.classList.remove("visible");
    } else {
      content.classList.add("visible");
    }
  });

  chevronIcon.addEventListener("click", () => {
    if (chevronIcon.classList.contains("rotated")) {
      chevronIcon.classList.remove("rotated");
    } else {
      chevronIcon.classList.add("rotated");
    }
  });

  commercialTitle.addEventListener("click", () => {
    if (chevronIcon.classList.contains("rotated")) {
      chevronIcon.classList.remove("rotated");
    } else {
      chevronIcon.classList.add("rotated");
    }
  });

  // CARTOON & VIDEO GAMES
  cartoonNav.addEventListener("click", () => {
    if (videos.classList.contains("visible")) {
      videos.classList.remove("visible");
    } else {
      videos.classList.add("visible");
    }
  });

  chevronIconCartoon.addEventListener("click", () => {
    if (chevronIconCartoon.classList.contains("rotated")) {
      chevronIconCartoon.classList.remove("rotated");
    } else {
      chevronIconCartoon.classList.add("rotated");
    }
  });

  cartoonTitle.addEventListener("click", () => {
    if (chevronIconCartoon.classList.contains("rotated")) {
      chevronIconCartoon.classList.remove("rotated");
    } else {
      chevronIconCartoon.classList.add("rotated");
    }
  });
});
