let $ = document;

const rangeInput = $.getElementById("range");
const container = $.getElementsByClassName("container")[0];

rangeInput.addEventListener("change", () => {
  container.style.filter = "brightness(" + rangeInput.value + "%)";
});
