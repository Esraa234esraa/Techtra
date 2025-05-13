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
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('show');
}

document.addEventListener('click', function (e) {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('navLinks');
  const insideMenu = navLinks.contains(e.target);
  const clickedToggle = toggle.contains(e.target);
  if (!insideMenu && !clickedToggle) {
    closeMenu();
  }
});
function scrollToHome() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
  document.getElementById('about-text').scrollIntoView({ behavior: 'smooth' });
}

function scrollToOur() {
  document.getElementById('root').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContt() {
  document.getElementById('cont').scrollIntoView({ behavior: 'smooth' });
}
// window.addEventListener('scroll', function () {
//   const nav = document.querySelector('.nav');
//   if (window.scrollY > 50) { // عندما ينزل المستخدم 50px أو أكثر
//     nav.classList.add('scrolled');
//   } else {
//     nav.classList.remove('scrolled');
//   }
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const nav = document.querySelector(".nav");
//   const menuIcon = document.querySelector(".menu-icon");
//   const ul = document.querySelector(".nav ul");

//   // window.addEventListener("scroll", () => {
//   //   if (window.scrollY > 50) {
//   //     nav.classList.add("scrolled");
//   //   } else {
//   //     nav.classList.remove("scrolled");
//   //   }
//   // });

  
// });
  