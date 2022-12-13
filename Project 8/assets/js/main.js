//toggle menu button
const bars = document.querySelector(".toggleMenu .bar");
const bar = document.querySelector(".toggleMenu");
const menu = document.querySelector(".leftSide .links ul");

bars.addEventListener("click", () => {
  console.log("it's working");
  menu.classList.toggle("active");
});

bar.addEventListener("click", () => {
  console.log("it's working");
  menu.classList.toggle("active");
});
