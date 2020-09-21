import { writable } from "svelte/store";

export type ModalStore = {
  city: boolean;
};

function createModals() {
  const { subscribe, update } = writable<ModalStore>({ city: false });

  return {
    subscribe,
    toggle: (k: keyof ModalStore) =>
      update((m) => {
        m[k] = !m[k];
        return m;
      }),
  };
}

export const modalStore = createModals();
