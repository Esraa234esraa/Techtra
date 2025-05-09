// about
// JS Animation on Load
window.addEventListener("load", () => {
  document.getElementById("about-img").classList.add("show");
  document.getElementById("about-text").classList.add("show");
});

// Read More Function
function handleReadMore() {
  alert("More about us coming soon!");
}

// feedback+footer

let currentPosition = 0;

function moveRight() {
  currentPosition -= 310;
  document.getElementById(
    "track"
  ).style.transform = `translateX(${currentPosition}px)`;
}

function moveLeft() {
  currentPosition += 310;
  document.getElementById(
    "track"
  ).style.transform = `translateX(${currentPosition}px)`;
}
// console.log("assssssssssssssss");
// navMove
function scrollToAbout() {
  document
    .getElementById("about-section")
    .scrollIntoView({ behavior: "smooth" });
}

function scrollToOur() {
  document.getElementById("root").scrollIntoView({ behavior: "smooth" });
}
function scrollToHome() {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}
function scrollToContt() {
  document.getElementById("cont").scrollIntoView({ behavior: "smooth" });
}
// function scrollToCont() {
//   document.getElementsById("cont").scrollIntoView({ behavior: "smooth" });
// }


window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const track = document.getElementById("track");
const cardWidth = document.querySelector(".card").offsetWidth + 16; // 16 for margin

function moveLeft() {
  track.scrollBy({ left: -cardWidth, behavior: "smooth" });
}

function moveRight() {
  track.scrollBy({ left: cardWidth, behavior: "smooth" });
}


function toggleMenu() {
  document.querySelector('.nav').classList.toggle('show-menu');
}

let currentIndex = 0;

function moveLeft() {
  const track = document.getElementById('track');
  const cards = track.querySelectorAll('.card');
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

function moveRight() {
  const track = document.getElementById('track');
  const cards = track.querySelectorAll('.card');
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}


  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const icon = document.getElementById("toggleIcon");

    // Toggle the class that shows/hides menu (you need to define .show in CSS)
    navLinks.classList.toggle("show");

    // Toggle icon
    if (icon.classList.contains("bi-list")) {
      icon.classList.remove("bi-list");
      icon.classList.add("bi-x");
    } else {
      icon.classList.remove("bi-x");
      icon.classList.add("bi-list");
    }
  }


  