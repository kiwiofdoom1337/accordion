
  let drops = document.querySelectorAll(".drop-down");
  let whiteBoxes = document.querySelectorAll(".white-box");

drops.forEach((span, index) => {
  let box = whiteBoxes[index];

  span.addEventListener("click", () => {
    span.classList.toggle("rotate");
    box.classList.toggle("hidden");
  })
})