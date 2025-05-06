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
