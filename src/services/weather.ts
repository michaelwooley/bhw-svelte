import { CONTACT_EMAIL, URL } from "@app/common/constants";
import type {
  WeatherApiStationObservationLatest,
  WeatherApiStationObservations,
} from "src/types/weather-api";

const BASE_URL = "https://api.weather.gov";

var HEADERS = new Headers();
HEADERS.append("Accept", "application/geo+json");
HEADERS.append("User-Agent", `(${URL},${CONTACT_EMAIL})`);
HEADERS.append("Origin", URL);

const REQUEST_INIT = {
  method: "GET",
  headers: HEADERS,
} as RequestInit;

/**
 * Common weather API request
 *
 * NOTE Cannot request https resources from localhost in firefox. See https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default
 *
 * @param url
 */
const _callWeatherStation = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, REQUEST_INIT);

  if (!res.ok) {
    const r = await res.json();
    throw new Error(r.detail || "Station not found");
  }

  return await res.json();
};

export const weatherLatest = async (
  stationId: string
): Promise<WeatherApiStationObservationLatest> => {
  const url = `${BASE_URL}/stations/${stationId}/observations/latest`;

  return _callWeatherStation<WeatherApiStationObservationLatest>(url);
};

export const weatherHistorical = async (
  stationId: string,
  limit = 50
): Promise<WeatherApiStationObservations> => {
  const url = `${BASE_URL}/stations/${stationId}/observations?limit=${limit}`;

  const data = await _callWeatherStation<WeatherApiStationObservations>(url);

  // Will return "ok" even if stationId is bad
  if (data.features.length === 0) {
    throw new Error("Station not found");
  }

  return data;
};
