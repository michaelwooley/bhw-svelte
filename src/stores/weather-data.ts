import type { IStationName } from "@app/common/data/stations";
import { WEATHER_API_DATA_INTERVAL } from "@app/common";
import { weatherLatest } from "@app/services/weather";
import type { WeatherApiStationObservationLatest } from "src/types/weather-api";
import { writable } from "svelte/store";

export type WeatherDataStoreStation = {
  station: IStationName;
  id: string;

  lastUpdated: {
    latest: Date;
  };
};

export type LatestObs = {
  [id: string]: WeatherApiStationObservationLatest;
};

export type WeatherDataStore = {
  stations: WeatherDataStoreStation[];
  latest: LatestObs;
};

function createWeatherData() {
  const STORAGE_PREFIX = "BH_SVELTE_WEATHER_DATA";
  const MAIN_LIST_KEY = "LIST";
  const LATEST_DATA_KEY = "LATEST";

  const _getKeyLocalStorage = (key: string) => `${STORAGE_PREFIX}:${key}`;
  const setLocalStorage = (key: string, obj: any) =>
    localStorage.setItem(_getKeyLocalStorage(key), JSON.stringify(obj));
  const getLocalStorage = <T>(key: string, alt: T): T => {
    const str = localStorage.getItem(_getKeyLocalStorage(key));
    if (str) {
      return JSON.parse(str);
    } else {
      return alt;
    }
  };

  const storeInit = {
    stations: getLocalStorage<WeatherDataStoreStation[]>(MAIN_LIST_KEY, []),
    latest: getLocalStorage<LatestObs>(LATEST_DATA_KEY, {}),
  };
  let stations = storeInit.stations;
  let latest = storeInit.latest;

  const store = writable<WeatherDataStore>(storeInit);

  const setAll = () => {
    setLocalStorage(LATEST_DATA_KEY, latest);
    setLocalStorage(MAIN_LIST_KEY, stations);
    store.set({
      stations,
      latest,
    });
  };

  const setStations = () => {
    setLocalStorage(MAIN_LIST_KEY, stations);
    store.update((s) => {
      s.stations = stations;
      return s;
    });
  };

  const setLatest = () => {
    setLocalStorage(LATEST_DATA_KEY, latest);
    store.update((s) => {
      s.latest = latest;
      return s;
    });
  };

  const add = async (station: IStationName): Promise<void> => {
    const id = station.id;
    if (stations.some((s: WeatherDataStoreStation) => s.id === id)) {
      throw new Error(`Station ${station.id} is already in set.`);
    }

    latest[id] = await weatherLatest(station.id);
    stations = stations.concat([
      {
        id,
        station,
        lastUpdated: { latest: new Date() },
      },
    ]);

    setAll();
  };

  const remove = (id: string) => {
    stations = stations.filter((s) => s.id !== id);
    delete latest[id];
    setAll();
  };

  const removeAll = () => {
    stations = [];
    latest = {};
    setAll();
  };

  const _refresh = async (id: string): Promise<boolean> => {
    if (
      !latest[id] ||
      new Date().valueOf() -
        new Date(latest[id].properties.timestamp).valueOf() <
        WEATHER_API_DATA_INTERVAL
    )
      return false;

    latest[id] = await weatherLatest(id);
    return true;
  };

  const refresh = async (id: string): Promise<void> => {
    if (!(await _refresh(id))) return;

    stations = stations.map((s) =>
      s.id === id
        ? { ...s, lastUpdated: { ...s.lastUpdated, latest: new Date() } }
        : s
    );
    setAll();
    return;
  };

  const refreshAll = async (): Promise<void> => {
    const isUpdated = await Promise.all(stations.map((s) => _refresh(s.id)));
    stations = stations.map((s, i) =>
      isUpdated[i]
        ? { ...s, lastUpdated: { ...s.lastUpdated, latest: new Date() } }
        : s
    );
    setAll();
  };

  const move = (from: number, to: number) => {
    const s = stations[from];
    stations = stations.filter((s, i) => i !== from);
    stations = [...stations.slice(0, to), s, ...stations.slice(to)];

    setStations();
  };

  const moveUp = (idx: number) => {
    if (idx === 0) return;

    move(idx, idx - 1);
  };

  const moveDown = (idx: number) => {
    if (idx === stations.length - 1) return;

    move(idx, idx + 1);
  };

  return {
    subscribe: store.subscribe,
    add,
    remove,
    removeAll,
    moveUp,
    moveDown,
    refresh,
    refreshAll,
  };
}

export const weatherDataStore = createWeatherData();
