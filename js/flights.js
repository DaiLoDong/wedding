document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("bookFlightBtn");
  if (!btn) return;

  // constants
  const DEST = "YYJ";
  const DEPART_DATE = "2026-10-09";
  const RETURN_DATE = "2026-10-11";

// button click
  btn.addEventListener("click", async () => {
    console.log("clicked button");
      const url = `https://www.google.com/travel/flights?q=flights%20to%20${DEST}%20on%20${DEPART_DATE}%20return%20${RETURN_DATE}`;
    window.open(url, "_blank");
  });
});