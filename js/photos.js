
document.addEventListener('DOMContentLoaded', function () {
  const API_ENDPOINT = "https://cgas.io/api/upload";
  const API_KEY = "549f1514109244c0cfea9f8048d443f1c72bc7c6580c1d1b00f45c5b30f8ba2c";                                                         // CGAS key
  const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbwDaLrMhshjGY1TUCM8fcEcKDeSwi0L-i5Em8XmhNQ_eYxmPRkQ2OsqF2OJSDiBCoUQ/exec";   // your web‑app URL

  const form = document.getElementById("uploadForm");
  const fileInput = document.getElementById("photoInput");
  const statusDiv = document.getElementById("uploadStatus");
  const galleryDiv = document.getElementById("photoGallery");

  // Load existing images from the Sheet
  async function loadExistingImages() {
    try {
      const res = await fetch(SHEET_ENDPOINT);
      if (!res.ok) return;
      const data = await res.json();
      if (data.images && data.images.length) data.images.forEach(addImage);
    } catch(e) { console.error(e); }
  }
  loadExistingImages();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const files = fileInput.files;
    if (!files.length) {
      statusDiv.textContent = "Please choose one or more files.";
      return;
    }

    statusDiv.textContent = `Uploading ${files.length} file(s)…`;
    let success = 0;

    for (let file of files) {
      const fd = new FormData();
      fd.append("key", API_KEY);
      fd.append("file", file);
      try {
        const res = await fetch(API_ENDPOINT, {method:"POST", body:fd});
        if (!res.ok) throw new Error(await res.text());
        const result = await res.json();
        const imageUrl = result.url || result.file || result.data?.url;
        if (imageUrl) {
          addImage(imageUrl);
          await saveImageUrl(imageUrl);
          success++;
        }
      } catch(err) { console.error(err); }
    }
    statusDiv.textContent = `Uploaded ${success} of ${files.length}`;
  });

  async function saveImageUrl(url) {
    try {
      await fetch(SHEET_ENDPOINT, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({url})
      });
    } catch(err) { console.error("Save error", err); }
  }

  function addImage(url) {
    const col = document.createElement("div");
    col.className = "col-xs-6 col-sm-4 col-md-3";
    col.innerHTML =
      `<a href="${url}" target="_blank">
         <img src="${url}" class="img-responsive img-thumbnail">
       </a>`;
    galleryDiv.prepend(col);
  }
});
