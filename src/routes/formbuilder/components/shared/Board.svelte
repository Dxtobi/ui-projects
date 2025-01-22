<script>
  //   import { draggable } from "$lib/js/dnd";
  import { createEventDispatcher, mount } from "svelte";
  import { is_draggable } from "$lib/utils/current_comp_store";

  const dispatch = createEventDispatcher();
  /**@type {any}**/
  let {
    added_comp,
    call_on_dropped,
    call_when_component_on_focus,
    save_progress,
    // draggable,
    // switch_draggable,
  } = $props();
  let isDraggedOver = $state(false);
  // @ts-ignore
  function call_drag_enter(e) {
    e.preventDefault();
    isDraggedOver = true;
  }

  // @ts-ignore
  function call_drag_leave(e) {
    e.preventDefault();
    isDraggedOver = false;
  }

  // @ts-ignore
  function call_drag_over(e) {
    e.preventDefault();
  }
  // @ts-ignore
  function handle_drop(e) {
    //console.log(e);
    call_on_dropped(e, ref);
    isDraggedOver = false;
  }

  // @ts-ignore
  function handle_(e) {
    // console.log(e);
    // dragging_item(e);
    // call_on_dropped(e, ref);
    // isDraggedOver = false;
  }

  /**@type {any}**/
  let ref;
</script>

<div bind:this={ref} class="w-full h-full p-8 flex flex-col gap-2">
  <div
    class="w-full h-full p-8 border-2 m-auto md:w-[80%] bg-white flex flex-col gap-4 justify-start"
    tabindex="-1"
    role="region"
    data-type="board"
    on:dragenter={call_drag_enter}
    on:dragleave={call_drag_leave}
    on:dragover={call_drag_over}
    on:drop={handle_drop}
    class:ring={isDraggedOver}
    class:ring-yellow-400={isDraggedOver}
  >
    {#if added_comp}
      {@const added_comp_filtered = added_comp.filter(
        (/** @type {{ section_tag: any; }} */ e) => !e.section_tag
      )}
      <!-- {@const section_components = added_comp.filter((e) => e.section_tag != undefined)} -->
      {#each added_comp_filtered as data}
        <!-- SECTIONS -->
        <svelte:component
          this={data.Component}
          {dispatch}
          {call_when_component_on_focus}
          {data}
          section_components={added_comp}
          draggable={$is_draggable}
        />

        <!-- <Comp.comp {handle_} id={'id'} /> -->
      {/each}
    {/if}
  </div>
</div>
<button
  on:click={() => {
    is_draggable.reset(false);
    save_progress(ref.innerHTML);
  }}
  class=" bg-blue-500 text-white rounded w-fit p-5 fixed bottom-6 right-3 cursor-pointer hover:border-2 border-blue-500"
  >View</button
>
