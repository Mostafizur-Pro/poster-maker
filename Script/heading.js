function getHeading() {
  const headingContent = document.getElementById("heading-input");
  const headingText = headingContent.value;
  const headerContainer = document.getElementById("header-container");
  headerContainer.innerText = headingText;
  headerContainer.appendChild(header);
}

document.getElementById("btn-left").addEventListener("click", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.classList.remove("text-center");
  headerContainer.classList.remove("text-right");
  headerContainer.classList.add("text-left");
  console.log(headerContainer.classList);
});
document.getElementById("btn-center").addEventListener("click", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.classList.remove("text-right");
  headerContainer.classList.remove("text-left");
  headerContainer.classList.add("text-center");
  console.log(headerContainer.classList);
});
document.getElementById("btn-right").addEventListener("click", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.classList.remove("text-right");
  headerContainer.classList.remove("text-center");
  headerContainer.classList.add("text-right");
  console.log(headerContainer.classList);
});

document.getElementById("btn-blue").addEventListener("click", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.classList.remove("text-black");
  headerContainer.classList.remove("text-green-500");
  headerContainer.classList.add("text-blue-500");
});
document.getElementById("btn-black").addEventListener("click", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.classList.remove("text-blue");
  headerContainer.classList.remove("text-green-500");
  headerContainer.classList.add("text-black");
});
document.getElementById("btn-green").addEventListener("click", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.classList.remove("text-black");
  headerContainer.classList.remove("text-blue-500");
  headerContainer.classList.add("text-green-500");
});

document.getElementById("heading-close").addEventListener("click", () => {
  const headingSection = document.getElementById("heading");
  const headingButton = document.getElementById("btn-heading");
  headingSection.classList.remove("block");
  headingSection.classList.add("hidden");
  headingButton.classList.remove("hidden");
  headingButton.classList.add("block");
});
document.getElementById("btn-heading").addEventListener("click", () => {
  const headingSection = document.getElementById("heading");
  const headingButton = document.getElementById("btn-heading");
  headingButton.classList.remove("block");
  headingButton.classList.add("hidden");
  headingSection.classList.remove("hidden");
  headingSection.classList.add("block");
});
