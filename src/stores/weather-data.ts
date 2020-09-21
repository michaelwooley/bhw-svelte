import { STORAGE_KEYS } from "@app/common/constants";
import { weatherHistorical, weatherLatest } from "@app/services/weather";
import localForage from "localforage";
import type {
  WeatherApiStationObservationLatest,
  WeatherApiStationObservations,
} from "src/types/weather-api";
import { writable } from "svelte/store";

export type WeatherDataStore = {
  name: string;
  stationId: string;

  historical: WeatherApiStationObservations;
  latest: WeatherApiStationObservationLatest;

  lastUpdated: Date;
};

const LIMIT = 10;

/**
 * NOTE Use localForage to store: https://github.com/localForage/localForage
 *
 */
function createWeatherData() {
  const storage = localForage.createInstance({ name: STORAGE_KEYS.WEATHER });
  const store = writable<WeatherDataStore[]>([]);

  const init = (stationIds: string[]) => {
    Promise.all(stationIds.map((s) => storage.getItem<WeatherDataStore>(s)))
      .then((items: (null | WeatherDataStore)[]) => {
        // TODO Update if lastUpdate > n seconds
        store.set(items.filter((item): item is WeatherDataStore => !!item));
      })
      .catch((e) => {
        throw new Error(e);
      });
  };

  // const _initOneStation = async (
  //   stationId: string
  // ): Promise<WeatherDataStore> => {
  //   const item = await storage.getItem<WeatherDataStore>(s);

  //   if (item) {
  //     return item;
  //   } else {
  //   }
  // };

  const add = (name: string, stationId: string): void => {
    Promise.all([weatherLatest(stationId), weatherHistorical(stationId, LIMIT)])
      .then(([latest, historical]) =>
        store.update((d) => {
          const lastUpdated = new Date();
          const item = { name, stationId, latest, historical, lastUpdated };

          storage.setItem(stationId, item);
          return d.filter((item) => item.stationId !== stationId).concat(item);
        })
      )
      .catch((e) => {
        throw new Error(e);
      });
  };

  const remove = (stationId: string) =>
    store.update((d) => {
      storage.removeItem(stationId);
      return d.filter((item) => item.stationId !== stationId);
    });

  const removeAll = () => {
    storage.clear();
    store.update((d) => []);
  };

  return {
    subscribe: store.subscribe,
    init,
    // refresh,
    add,
    remove,
    removeAll,
  };
}

export const weatherDataStore = createWeatherData();
