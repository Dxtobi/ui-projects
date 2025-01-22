<script>
  // @ts-nocheck

  // const { htm } = $props();
  import { is_draggable } from "$lib/utils/current_comp_store";

  console.log($is_draggable);
  /**
   * @type {HTMLElement}
   */
  let dx;
  let {
    added_comp,
    call_on_dropped,
    call_when_component_on_focus,
    save_progress,
    // draggable,
    // switch_draggable,
  } = $props();
</script>

<section class="w-full h-full flex flex-col gap-2 md:w-[70%] m-auto">
  <form class="bg-white p-4 w-[100%] md:w-[70%] m-auto">
    {#if added_comp}
      {@const added_comp_filtered = added_comp.filter(
        (/** @type {{ section_tag: any; }} */ e) => !e.section_tag
      )}
      <!-- {@const section_components = added_comp.filter((e) => e.section_tag != undefined)} -->
      {#each added_comp_filtered as data}
        <!-- SECTIONS -->
        <svelte:component
          this={data.Component}
          {call_when_component_on_focus}
          {data}
          section_components={added_comp}
          draggable={false}
        />

        <!-- <Comp.comp {handle_} id={'id'} /> -->
      {/each}
    {/if}
  </form>
  <!-- {@html htm} -->
</section>
