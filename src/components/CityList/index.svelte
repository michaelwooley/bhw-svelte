<script>
  import type { IStationName } from "@app/common/data";

  export let stations: IStationName[];
</script>

<label for="add-station">Add a city</label>
<input list="stations" type="text" id="add-station" name="add-station" />
<datalist id="stations">
  {#each stations as { id, name, city }}
    <option value={id}>{city} ({name})</option>
  {/each}
</datalist>
