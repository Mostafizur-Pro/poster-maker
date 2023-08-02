document.getElementById("description-close").addEventListener("click", () => {
  const descriptionSection = document.getElementById("description");
  const descriptionButton = document.getElementById("btn-description");
  descriptionSection.classList.remove("block");
  descriptionSection.classList.add("hidden");
  descriptionButton.classList.remove("hidden");
  descriptionButton.classList.add("block");
});

document.getElementById("btn-description").addEventListener("click", () => {
  const descriptionSection = document.getElementById("description");
  const descriptionButton = document.getElementById("btn-description");
  descriptionButton.classList.remove("block");
  descriptionButton.classList.add("hidden");
  descriptionSection.classList.remove("hidden");
  descriptionSection.classList.add("block");
});

function getDescription() {
  const descriptionContent = document.getElementById("description-input");
  const descriptionText = descriptionContent.value;
  const descriptionContainer = document.getElementById("description-container");
  descriptionContainer.innerText = descriptionText;
  descriptionContainer.appendChild(header);
}

const inputField = document.getElementById("description-input");
const loader = document.getElementById("loader");

let typingTimer;
const typingDelay = 2000;

inputField.addEventListener("input", () => {
  clearTimeout(typingTimer);
  loader.classList.add("hidden");
  if (inputField.focus) {
    loader.classList.remove("hidden");
    typingTimer = setTimeout(() => {
      loader.classList.add("hidden");
    }, typingDelay);
  }
});
