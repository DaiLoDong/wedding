document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("bookFlightBtn");
  if (!btn) return; // button must exist

  // constants
  const DEST = "YYJ";
  const DEPART_DATE = "2027-10-09";
  const RETURN_DATE = "2027-10-11";
  const API_KEY = "j3vcH1rMbrvHYwDMLIRCUg==uUD7392RpH05rkOA";


async function getGeoByIP() {
  const res = await fetch("https://ipapi.co/json/");
  const data = await res.json();
  return { lat: data.latitude, lon: data.longitude };
}


async function getNearestAirport(lat, lon) {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/airports?lat=${lat}&lon=${lon}`,
      { headers: { "X-Api-Key": API_KEY } }
    );
    const airports = await res.json();
    return airports[0]?.iata;
  }

// button click
  btn.addEventListener("click", async () => {
    console.log("clicked button");

    const { lat, lon } = await getGeoByIP();
    const origin = await getNearestAirport(lat, lon);

    const url = origin
      ? `https://www.google.com/flights?hl=en#flt=${origin}.${DEST}.${DEPART_DATE}*${DEST}.${origin}.${RETURN_DATE}`
      : `https://www.google.com/flights?hl=en#dest=${DEST}.${DEPART_DATE}`;

    window.open(url, "_blank");
  });
});