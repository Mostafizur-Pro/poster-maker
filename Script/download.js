// const downloadButton = document.getElementById("btn-download");
// downloadButton.addEventListener("click", () => {
//   const pageContent = document.getElementById("download-content");
//   console.log("pageContent", pageContent);
//   const canvas = document.createElement("canvas");
//   // console.log("canvas", canvas);
//   canvas.width = pageContent.scrollWidth;
//   canvas.height = pageContent.scrollHeight;
//   const context = canvas.getContext("2d");

//   // Draw the contents of the div on the canvas
//   //   const imageData = new Image();
//   const img = document.getElementById("img");
//   // console.log("img", img);
//   const svgData = new XMLSerializer().serializeToString(pageContent);
//   const svgBlob = new Blob([svgData], {
//     type: "data:image/svg+xml;charset=utf-8",
//   });
//   console.log("svgBlog", svgBlob);
//   const url = URL.createObjectURL(svgBlob);
//   img.src = url;
//   console.log(url);
//   context.drawImage(img, 0, 0, canvas.width, canvas.height);

//   canvas.toBlob(function (blob) {
//     const file = new File([blob], "Poster.png", { type: "image/png" });
//     const downloadLink = document.createElement("a");
//     downloadLink.href = URL.createObjectURL(file);
//     downloadLink.download = "Poster.png";
//     downloadLink.click();
//   }, "image/png");
// });

const downloadButton = document.getElementById("btn-download");
downloadButton.addEventListener("click", () => {
  const header = document.getElementById("header-container");
  const imagePreview = document.getElementById("imagePreview");
  const des = document.getElementById("description-container");

  // Create a container div to hold the content
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <h1>Header: ${header.innerHTML}</h1>
    <p>Description: ${des.innerHTML}</p>
    <img src="${imagePreview.src}" alt="Image Preview">
  `;
  domtoimage
    .toPng(newDiv)
    .then(function (dataUrl) {
      // Create a new anchor element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "downloaded_image.png"; // Specify the filename for the download

      // Trigger a click on the download link to initiate the download
      downloadLink.click();
    })
    .catch(function (error) {
      console.error("Error while converting the element to PNG:", error);
    });

  // // Create a Blob with the content
  // const contentBlob = new Blob([newDiv.innerHTML], { type: "text/html" });
  // console.log(contentBlob);

  // // Create a temporary URL for the Blob
  // const url = URL.createObjectURL(contentBlob);

  // // Create a download link
  // const downloadLink = document.createElement("a");
  // downloadLink.href = url;
  // downloadLink.download = "downloaded_content.text"; // Specify the filename for the download

  // // Trigger a click on the download link to initiate the download
  // downloadLink.click();

  // // Clean up the temporary URL
  // URL.revokeObjectURL(url);
});

// const downloadButton = document.getElementById("btn-download");
// downloadButton.addEventListener("click", () => {
//   const header = document.getElementById("header-container");
//   const imagePreview = document.getElementById("imagePreview");
//   const des = document.getElementById("description-container");

//   // Create a container div to hold the content
//   const newDiv = document.createElement("div");
//   newDiv.innerHTML = `
//     <h1>Header: ${header.innerHTML}</h1>
//     <p>Description: ${des.innerHTML}</p>
//     <img src="${imagePreview.src}" alt="Image Preview">
//   `;

//   // Use html2canvas to render the content as an image on a canvas

//     // Convert canvas to a data URL representing a PNG image
//     const imageUrl = newDiv.toDataURL("image/png");
//     console.log(object);

//     // Create a download link
//     const downloadLink = document.createElement("a");
//     downloadLink.href = imageUrl;
//     downloadLink.download = "downloaded_content.png"; // Specify the filename for the download

//     // Trigger a click on the download link to initiate the download
//     downloadLink.click();

// });
