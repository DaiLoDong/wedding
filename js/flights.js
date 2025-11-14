async function getGeoByIP() {
  const res = await fetch("https://ipapi.co/json/");
  const data = await res.json();
  return { lat: data.latitude, lon: data.longitude };
}


async function getNearestAirport(lat, lon) {
  const res = await fetch(`https://api.api-ninjas.com/v1/airports?lat=${lat}&lon=${lon}`, {
    headers: { 'X-Api-Key': 'j3vcH1rMbrvHYwDMLIRCUg==uUD7392RpH05rkOA' }
  });
  const airports = await res.json();
  return airports[0]?.iata; // first result = nearest
}

const DEST = "YYJ";
const DEPART_DATE = "2024-10-09"; // Oct 9 – flight in
const RETURN_DATE = "2024-10-11"; // Oct 11 – flight out

// 3️⃣ Open Google Flights with fixed dates
        const url = origin
          ? `https://www.google.com/flights?hl=en#flt=${origin}.${DEST}.${DEPART_DATE}*${DEST}.${origin}.${RETURN_DATE}`
          : `https://www.google.com/flights?hl=en#dest=${DEST}.${DEPART_DATE}`;
        window.open(url, "_blank");
      } catch (err) {
        console.error(err);
        // fallback — no origin found
        window.open(`https://www.google.com/flights?hl=en#dest=${DEST}.${DEPART_DATE}`, "_blank");
      }
    });