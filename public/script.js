document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const elements = {
  div1: document.getElementById("first"),
  div2: document.getElementById("second"), 
  div3: document.getElementById("third"),
  div1dot: document.getElementById("first-dot"),
  div2dot: document.getElementById("second-dot"), 
  div3dot: document.getElementById("third-dot"),
  myWebsite: document.getElementById("my-website"),
  myWebsiteDialog: document.getElementById("my-website-dialog"),
  closeButton: document.getElementById("close-my-website-dialog")
};

const handleKeyPress = (key, div, dot, isKeyDown) => {
  const colors = {
    active: "#40E660",
    inactive: "#090913"
  };
  
  div.style.backgroundColor = isKeyDown ? colors.active : colors.inactive;
  dot.style.backgroundColor = isKeyDown ? colors.inactive : colors.active;
};

document.addEventListener("keydown", (event) => {
  switch(event.key) {
    case "1": handleKeyPress("1", elements.div1, elements.div1dot, true); break;
    case "2": handleKeyPress("2", elements.div2, elements.div2dot, true); break;
    case "3": handleKeyPress("3", elements.div3, elements.div3dot, true); break;
  }
});

document.addEventListener("keyup", (event) => {
  switch(event.key) {
    case "1": handleKeyPress("1", elements.div1, elements.div1dot, false); break;
    case "2": handleKeyPress("2", elements.div2, elements.div2dot, false); break;
    case "3": handleKeyPress("3", elements.div3, elements.div3dot, false); break;
  }
});

if (elements.myWebsite) {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

  elements.myWebsite.addEventListener("click", () => {
    elements.myWebsiteDialog.classList.remove("hidden", "hide");
    elements.myWebsiteDialog.classList.add("show");
    document.body.classList.add("dialog-mute-all");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  });

  elements.closeButton.addEventListener("click", () => {
    elements.myWebsiteDialog.classList.remove("show");
    elements.myWebsiteDialog.classList.add("hide");
    document.body.classList.remove("dialog-mute-all");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    setTimeout(() => elements.myWebsiteDialog.classList.add("hidden"), 300);
  });
}