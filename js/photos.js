
const API_ENDPOINT = "https://cgas.io/api/upload";
const API_KEY = "549f1514109244c0cfea9f8048d443f1c72bc7c6580c1d1b00f45c5b30f8ba2c"; // replace with yours

const form = document.getElementById("uploadForm");
const fileInput = document.getElementById("photoInput");
const statusDiv = document.getElementById("uploadStatus");
const galleryDiv = document.getElementById("photoGallery");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const files = fileInput.files;
  if (!files.length) {
    statusDiv.textContent = "Please choose at least one file.";
    return;
  }

  statusDiv.textContent = `Uploading ${files.length} image(s)…`;

  let successful = 0;

  for (let file of files) {
    const formData = new FormData();
    formData.append("key", API_KEY);
    formData.append("file", file);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error(await response.text());
      const result = await response.json();
      const imageUrl = result.url || result.file || result.data?.url;

      showImage(imageUrl);
      successful++;

    } catch (err) {
      console.error("Upload failed for:", file.name, err);
    }
  }

  statusDiv.textContent = `Uploaded ${successful} of ${files.length} image(s).`;
});

function showImage(url) {
  if (!url) return;
  const col = document.createElement("div");
  col.className = "col-xs-6 col-sm-4";
  col.innerHTML =
    `<a href="${url}" target="_blank">
       <img src="${url}" class="img-responsive img-thumbnail" style="margin-bottom:10px;">
     </a>`;
  galleryDiv.prepend(col);
}