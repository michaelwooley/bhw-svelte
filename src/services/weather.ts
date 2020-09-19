// import { URL, CONTACT_EMAIL } from "@app/common";
import type { WeatherApiStationObservationLatest } from "src/types/weather-api";

const BASE_URL = "https://api.weather.gov";

var HEADERS = new Headers();
HEADERS.append("Accept", "application/geo+json");
// NOTE User-Agent header is not accepted by server despite their request for this!
// // HEADERS.append("User-Agent", "(test.com,wm.wooley@gmail.com)");

const REQUEST_INIT = {
  method: "GET",
  headers: HEADERS,
} as RequestInit;

export const weatherLatest = async (
  stationId: string
): Promise<WeatherApiStationObservationLatest> => {
  const url = `${BASE_URL}/stations/${stationId}/observations/latest`;

  const res = await fetch(url, REQUEST_INIT);

  if (!res.ok) {
    const r = await res.json();
    throw new Error(r.detail || "Station not found");
  }

  return await res.json();
};
