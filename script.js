// msg.lang = 'en-US';

// -------------------- About -----------------------
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// ---------------- JS for Mobile Menu ------------------
var mobileMenu = document.getElementById("mobile-menu");
function openMenu() {
  mobileMenu.style.right = "0px";
}

function closeMenu() {
  mobileMenu.style.right = "-400px";
}
let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: { gradient: ["#a445b2", "#fa4299"] },
};
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.7,
});
$(".react .bar").circleProgress({
  value: 0.6,
});

let date = new Date();
let hours = date.getHours();
let greating = document.getElementById("greating");
if (hours >= 5 && hours < 12) {
  greating.innerHTML = "Good Morning";
} else if (hours >= 12 && hours < 18) {
  greating.innerHTML = "Good Afternoon";
} else if (hours >= 18 && hours < 20) {
  greating.innerHTML = "Good Evening";
} else {
  greating.innerHTML = "Good Night";
}

let typeText = ["Youtuber", "Devloper", "Blogger"];
let i = 0;
let type = document.getElementById("type");
setInterval(() => {
  i = i + 1;
  if (i == 3) {
    i = 0;
  }
  type.innerHTML = typeText[i];
}, 3000);
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
