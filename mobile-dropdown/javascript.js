hamburgerToggle = document.getElementById("hamburger-toggle");
pageContent = document.querySelector(".page-content");

console.log(hamburgerToggle);

document.addEventListener("click", (e) => {
  if (hamburgerToggle.checked) {
    if (e.target.closest(".page-content") === pageContent) {
      hamburgerToggle.checked = false;
    }
  }
});
