import { STORAGE_KEYS } from "@app/common/constants";
import { weatherHistorical, weatherLatest } from "@app/services/weather";
import localForage from "localforage";
import type {
  WeatherApiStationObservationLatest,
  WeatherApiStationObservations,
} from "src/types/weather-api";
import { writable } from "svelte/store";
import type { IStationName } from "@app/common/data/stations";

export type WeatherDataStore = {
  station: IStationName;
  id: string;

  // historical: WeatherApiStationObservations;
  // latest: WeatherApiStationObservationLatest;

  lastUpdated: {
    latest: Date;
  };
};

const LIMIT = 10;

const REFRESH_INTERVAL = 480000; // 8 minutes

/**
 * NOTE Use localForage to store: https://github.com/localForage/localForage
 */
function createWeatherData() {
  const STORAGE_PREFIX = "BH_SVELTE_WEATHER_DATA";
  const MAIN_LIST_KEY = "LIST";
  const LATEST_DATA_KEY = "LATEST";

  const _getKeyLocalStorage = (key: string) => `${STORAGE_PREFIX}:${key}`;
  const setLocalStorage = (key: string, obj: any) =>
    localStorage.setItem(_getKeyLocalStorage(key), JSON.stringify(obj));
  const getLocalStorage = (key: string, alt: any = null) => {
    const str = localStorage.getItem(_getKeyLocalStorage(key));
    if (str) {
      return JSON.parse(str);
    } else {
      return alt;
    }
  };

  const storage = localForage.createInstance({ name: STORAGE_KEYS.WEATHER });
  const store = writable<WeatherDataStore[]>(
    getLocalStorage(MAIN_LIST_KEY, [])
  );
  const latestDataStore = writable<{
    [id: string]: WeatherApiStationObservationLatest;
  }>(getLocalStorage(LATEST_DATA_KEY, []));

  const fetchLatest = (id: string) =>
    weatherLatest(id).then((d) => {
      store.update((items) => {});
    });

  const add = (station: IStationName, id: string): void => {
    Promise.all([weatherLatest(id)])
      .then(([latest]) =>
        store.update((d) => {
          const lastUpdated = new Date();
          const item = { station, id, latest, lastUpdated };

          storage.setItem(id, item);
          return d.filter((item) => item.id !== id).concat(item);
        })
      )
      .catch((e) => {
        throw new Error(e);
      });
  };

  const remove = (id: string) =>
    store.update((d) => {
      storage.removeItem(id);
      return d.filter((item) => item.id !== id);
    });

  const removeAll = () => {
    storage.clear();
    store.set([]);
  };

  const moveUp = (id: string) => {
    console.log("will move up");
  };

  const moveDown = (id: string) => {
    console.log("will move down");
  };

  const refresh = (id: string) => {
    store.update((items) => {
      const idx = items.findIndex((item) => item.id === id);
      if (!!!idx) {
        return items;
      }
      const item = items[idx];

      if (
        new Date().valueOf() - item.lastUpdated.valueOf() <
        REFRESH_INTERVAL * 0.75
      ) {
        return items;
      }

      return items;
    });
  };
  const refreshAll = () => {
    console.log("will refresh all data");
  };

  return {
    subscribe: store.subscribe,
    init,
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
