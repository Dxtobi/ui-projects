<script>
  // @ts-nocheck
  import { all_comps } from "$lib/utils/current_comp_store";

  let { active_element } = $props();

  //let active_element = $derived(active_element);

  function setStyles(e, k) {
    all_comps.update_style(e.target.value, k, active_element.id);
    // console.log(active_element);
  }

  function setValue(e) {
    // console.log(e.target.value);
    all_comps.update_value(e.target.value, active_element.id);
  }
</script>

{#key active_element.tag}
  <aside class=" flex flex-col p-4 w-[20%] border-l h-[80vh] overflow-y-scroll">
    {#if active_element?.component}
      <div class="flex justify-between items-start">
        <h1 class=" font-bold text-xl uppercase text-600 mb-4">
          {active_element.component}-{active_element.id}
        </h1>
        <button onclick={() => all_comps.element_removed(active_element.id)}
          ><iconify-icon icon="ic:round-delete" class=" text-2xl"
          ></iconify-icon> Delete</button
        >
      </div>
    {/if}
    <div>
      {#if active_element.styles}
        {@const stylesArray = Object.entries(active_element.styles)}

        <div class="flex flex-col gap-2 capitalize">
          {#if active_element.value}
            <label for="value">Text | Label</label>
            <input
              placeholder="Text"
              class="w-full px-2 border rounded mb-3 p-2"
              name="value"
              value={active_element.value}
              on:input={setValue}
            />
          {/if}
          {#if active_element.name}
            <label for="value">Field Name</label>
            <input
              placeholder="Field Name"
              class="w-full px-2 border rounded mb-3 p-2"
              name="name"
              value={active_element.name}
              on:input={(e) =>
                all_comps.change_name(e.target.value, active_element.id)}
            />
          {/if}
          {#if active_element.placeholder}
            <label for="value">Placeholder</label>
            <input
              placeholder="placeholder"
              class="w-full px-2 border rounded mb-3 p-2"
              name="placeholder"
              value={active_element.placeholder}
              on:input={(e) =>
                all_comps.change_place_holder(
                  e.target.value,
                  active_element.id
                )}
            />
          {/if}
          {#each stylesArray as [key, value], i}
            <!-- {console.log(stylesArray[i][1])} -->
            <label for={key}>{key.replace(/_/g, " ")}</label>
            {#if key === "background_color" || key === "border_color" || key === "color"}
              <input
                type="color"
                id={key}
                on:input={(e) => setStyles(e, key)}
                class=" mb-1"
                {value}
              />
            {:else if key === "border_radius" || key === "border_width" || key === "padding" || key === "margin"}
              <div class="flex items-center border rounded px-3 mb-1">
                <input
                  placeholder="10"
                  class=" h-10 w-full"
                  type="text"
                  id={key}
                  on:input={(e) => setStyles(e, key)}
                  {value}
                /><span class="px-3 border-l text-gray-600">PX</span>
              </div>
            {:else if key === "text_align"}
              <small>Center | Start | End</small>
              <input
                {value}
                placeholder="Text"
                id={key}
                class="w-full p-2 border rounded mb-1"
                on:input={(e) => setStyles(e, key)}
              />
            {:else}
              <input
                {value}
                placeholder="Text"
                id={key}
                class="w-full p-2 border rounded mb-1"
                on:input={(e) => setStyles(e, key)}
              />
            {/if}
          {/each}
        </div>
      {:else}
        <p>Click on any element on the board to edit</p>
      {/if}
    </div>
  </aside>
{/key}

<!-- function remove_element(id){
        
} -->
