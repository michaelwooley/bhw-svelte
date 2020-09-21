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
  id: string;

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

  const init = () => {
    storage
      .keys()
      .then((stationIds) =>
        Promise.all(stationIds.map((s) => storage.getItem<WeatherDataStore>(s)))
      )
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

  const add = (name: string, id: string): void => {
    Promise.all([weatherLatest(id), weatherHistorical(id, LIMIT)])
      .then(([latest, historical]) =>
        store.update((d) => {
          const lastUpdated = new Date();
          const item = { name, id, latest, historical, lastUpdated };

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
    console.log(`Will refresh id = ${id}`);
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
