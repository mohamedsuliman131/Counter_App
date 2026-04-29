const valueEl = document.getElementById("value");
let count = 0;

function update(newVal) {
  count = newVal;
  valueEl.textContent = count;
  valueEl.classList.add("animate");
  setTimeout(() => valueEl.classList.remove("animate"), 150);
}

// button handlers
document
  .getElementById("increment")
  .addEventListener("click", () => update(count + 1));
document
  .getElementById("decrement")
  .addEventListener("click", () => update(count - 1));
document.getElementById("reset").addEventListener("click", () => update(0));
