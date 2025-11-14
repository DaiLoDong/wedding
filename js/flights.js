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
      const url = `https://www.google.com/flights?hl=en#flt=.${DEST}.${DEPART_DATE}*${DEST}..${RETURN_DATE}`;
    window.open(url, "_blank");
  });
});