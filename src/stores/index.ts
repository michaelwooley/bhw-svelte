import { writable } from "svelte/store";

export type ModalStore = {
  cities: boolean;
};

function createModals() {
  const { subscribe, update } = writable<ModalStore>({ cities: false });

  return {
    subscribe,
    toggle: (k: keyof ModalStore) =>
      update((m) => {
        m[k] = !m[k];
        return m;
      }),
  };
}

export const modals = createModals();
