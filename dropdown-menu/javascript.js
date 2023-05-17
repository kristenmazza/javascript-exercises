let currentSelection;

document.addEventListener("click", (e) => {
  let isDropdownButton = e.target.matches("button");
  const visible = document.querySelectorAll(".visible");

  if (isDropdownButton) {
    e.target.nextElementSibling.classList.toggle("visible");
    currentSelection = e.target;
  } else if (!isDropdownButton) {
    visible.forEach((item) => {
      item.classList.remove("visible");
    });
  }

  visible.forEach((item) => {
    if (item.previousElementSibling === currentSelection) return;
    else {
      item.classList.remove("visible");
    }
  });
});
