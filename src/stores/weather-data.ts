import { writable } from "svelte/store";

export type WeatherDataStore = {
  city: boolean;
};

/**
 * NOTE Use localForage to store: https://github.com/localForage/localForage
 *
 */
function createWeatherData() {
  const { subscribe, update } = writable<WeatherDataStore>({ city: false });

  const init = () => null;
  const refresh = () => null;
  const add = () => null;
  const remove = () => null;

  return {
    subscribe,
    refresh,
    add,
    remove,
  };
}

export const modalStore = createWeatherData();
