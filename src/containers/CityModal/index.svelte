<script>
  import { onDestroy } from "svelte";

  import { modalStore, weatherDataStore } from "@app/stores";
  import { STATIONS } from "@app/common/data";

  import BaseModal from "@app/components/BaseModal/index.svelte";
  import CityModal from "@app/components/CityModal/index.svelte";
  import CityAdd from "@app/components/CityAdd/index.svelte";
  import CityList from "@app/components/CityList/index.svelte";

  import type { IStationName } from "@app/common/data";

  let addableStations: IStationName[];

  const unsubscribe = weatherDataStore.subscribe((data) => {
    addableStations = STATIONS.filter(
      (s) => !data.stations.some((ds) => ds.id === s.id)
    );
  });

  onDestroy(() => unsubscribe());
</script>

<BaseModal isOpen={$modalStore.city} on:close={() => modalStore.toggle('city')}>
  <CityModal>
    <div slot="add" class="column is-one-quarter">
      <CityAdd
        stations={addableStations}
        on:add={(e) => weatherDataStore.add(e.detail)} />
    </div>

    <div slot="current" class="column">
      <CityList
        stations={$weatherDataStore.stations}
        on:refresh-all={() => weatherDataStore.refreshAll()}
        on:remove-all={() => weatherDataStore.removeAll()}
        on:refresh={(e) => weatherDataStore.refresh(e.detail.station.id)}
        on:remove={(e) => weatherDataStore.remove(e.detail.station.id)}
        on:move-up={(e) => weatherDataStore.moveUp(e.detail.idx)}
        on:move-down={(e) => weatherDataStore.moveDown(e.detail.idx)} />
    </div>
  </CityModal>
</BaseModal>
