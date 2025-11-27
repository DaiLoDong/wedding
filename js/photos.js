const API_ENDPOINT = "https://cgas.edward-ce5.workers.dev/"; 

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById("photoInput");
  const statusEl  = document.getElementById("uploadStatus");
  const files     = fileInput.files;

  if (!files.length) {
    statusEl.textContent = "Please choose at least one photo.";
    return;
  }

  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      statusEl.textContent = "Uploading...";
      const res  = await fetch(API_ENDPOINT, { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        addImage(data.url);
      } else {
        console.error(data);
        statusEl.textContent = "Upload failed.";
      }
    } catch (err) {
      console.error(err);
      statusEl.textContent = "Upload error.";
    }
  }

  statusEl.textContent = "Upload complete!";
  fileInput.value = "";
});

window.addEventListener("DOMContentLoaded", loadGallery);

async function loadGallery() {
  try {
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    if (Array.isArray(data)) {
      document.getElementById("photoGallery").innerHTML = "";
      data.forEach(url => addImage(url));
    }
  } catch (err) {
    console.error(err);
  }
}

function addImage(url) {
  const gallery = document.getElementById("photoGallery");
  const col = document.createElement("div");
  col.className = "col-xs-6 col-sm-4 col-md-3";
  const img = document.createElement("img");
  img.src = url;
  img.className = "img-responsive img-thumbnail";
  col.appendChild(img);
  gallery.appendChild(col);
}