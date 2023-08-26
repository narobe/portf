const ul = document.querySelector("nav ul");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
 ul.classList.toggle("ulres");
});