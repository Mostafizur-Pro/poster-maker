const dropZone = document.getElementById("dropZone");
const imageInput = document.getElementById("imageInput");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imagePreview = document.getElementById("imagePreview");

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("border-blue-500");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("border-blue-500");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("border-blue-500");
  const file = event.dataTransfer.files[0];
  handleFileUpload(file);
});

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  handleFileUpload(file);
});

function handleFileUpload(file) {
  if (file) {
    const reader = new FileReader();

    if (/\.(jpe?g|png|gif|svg)$/i.test(file.name) && file.size <= 800 * 400) {
      reader.onload = function () {
        imagePreview.src = reader.result;
        imagePreviewContainer.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    } else {
      alert(
        "Invalid file format or size. Supported formats: SVG, JPG, PNG, GIF. Max size: 800x400 px."
      );
    }
  }
}

document.getElementById("image-close").addEventListener("click", () => {
  const imageSection = document.getElementById("image");
  const imageButton = document.getElementById("btn-image");
  imageSection.classList.remove("block");
  imageSection.classList.add("hidden");
  imageButton.classList.remove("hidden");
  imageButton.classList.add("block");
});

document.getElementById("btn-image").addEventListener("click", () => {
  const imageSection = document.getElementById("image");
  const imageButton = document.getElementById("btn-image");
  imageButton.classList.remove("block");
  imageButton.classList.add("hidden");
  imageSection.classList.remove("hidden");
  imageSection.classList.add("block");
});
