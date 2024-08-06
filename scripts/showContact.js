document.addEventListener("DOMContentLoaded", () => {
  const contactActing = document.getElementById("contactActing");
  const linkActing = document.getElementById("linkActing");
  const iconActing = document.getElementById("iconActing");

  const contactVoice = document.getElementById("contactVoice");
  const linkVoice = document.getElementById("linkVoice");
  const iconVoice = document.getElementById("iconVoice");

  const contactCameo = document.getElementById("contactCameo");
  const linkCameo = document.getElementById("linkCameo");
  const iconCameo = document.getElementById("iconCameo");

  const contactOther = document.getElementById("contactOther");
  const linkOther = document.getElementById("linkOther");
  const iconOther = document.getElementById("iconOther");

  contactActing.addEventListener("click", () => {
    if (iconActing.classList.contains("rotated")) {
      iconActing.classList.remove("rotated");
    } else {
      iconActing.classList.add("rotated");
    }
  });

  contactActing.addEventListener("click", () => {
    if (linkActing.classList.contains("visible")) {
      linkActing.classList.remove("visible");
    } else {
      linkActing.classList.add("visible");
    }
  });

  contactVoice.addEventListener("click", () => {
    if (iconVoice.classList.contains("rotated")) {
      iconVoice.classList.remove("rotated");
    } else {
      iconVoice.classList.add("rotated");
    }
  });

  contactVoice.addEventListener("click", () => {
    if (linkVoice.classList.contains("visible")) {
      linkVoice.classList.remove("visible");
    } else {
      linkVoice.classList.add("visible");
    }
  });

  contactCameo.addEventListener("click", () => {
    if (iconCameo.classList.contains("rotated")) {
      iconCameo.classList.remove("rotated");
    } else {
      iconCameo.classList.add("rotated");
    }
  });

  contactCameo.addEventListener("click", () => {
    if (linkCameo.classList.contains("visible")) {
      linkCameo.classList.remove("visible");
    } else {
      linkCameo.classList.add("visible");
    }
  });

  contactOther.addEventListener("click", () => {
    if (iconOther.classList.contains("rotated")) {
      iconOther.classList.remove("rotated");
    } else {
      iconOther.classList.add("rotated");
    }
  });

  contactOther.addEventListener("click", () => {
    if (linkOther.classList.contains("visible")) {
      linkOther.classList.remove("visible");
    } else {
      linkOther.classList.add("visible");
    }
  });
});
