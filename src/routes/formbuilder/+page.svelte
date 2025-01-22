<script>
  // @ts-nocheck

  import Editor from "./components/shared/Editor.svelte";
  import Board from "./components/shared/Board.svelte";
  import SideBar from "./components/shared/SideBar.svelte";
  // import { createEventDispatcher } from 'svelte';
  import { all_comps, is_draggable } from "$lib/utils/current_comp_store";
  import Preview from "./components/preview/preview.svelte";
  import { draggable } from "$lib/js/dnd";

  /**
   * @type {HTMLElement}
   */
  let convert_to_html = $state(undefined);
  /**
   * @type {any}
   */
  let added_comp = $derived($all_comps);
  let dragging_comp = $state(null);
  let dragging_comp_on_board = $state(null);
  let active_element = $state({});

  //SET THE CURRENT ELEMENT THAT IS BEING DRAGGED FROM SIDE BARE
  function dragging_side_bar_icon(e) {
    e.preventDefault();
    dragging_comp = e.detail;
    dragging_comp.state.id = "";
  }

  function dragging_item_that_is_already_in_board(e) {
    e.preventDefault();
  }

  async function call_on_dropped(e, ref) {
    e.preventDefault();
    //CHECK IF ITS BEEN DROPPED ON A SECTION
    if (e.target.getAttribute("data-type") === "droppable") {
      //IF YES:
      //GET THE ID / TAG:
      const idx = e.target.getAttribute("id");

      all_comps.add_to_section(idx, dragging_comp);

      return;
    }
    //REMOVE THE CURRENT ITEM BEING DRAG
    all_comps.element_removed(dragging_comp_on_board);
    //IF USER IS DROPPING ON TOP OF ANOTHER ELEMENT ADD THE NEW ONW ABOVE
    if (e.target.getAttribute("data-type") === "component") {
      //GET THE ID
      const idx = e.target.getAttribute("id");
      //USE THE ID TO FIND THE CURRENT ELEMENT
      const idxx = $all_comps.find((ev) => ev.tag === idx);
      //GET THE INDEX
      const indexDrop = $all_comps.indexOf(idxx);
      //AD THE NEW COMPONENT ABOVE THE HOVERED COMPONENT
      all_comps.new_element_dropped_on_a_specific_location(
        indexDrop,
        dragging_comp
      );
      dragging_comp = null;
    } else {
      all_comps.new_element_dropped(dragging_comp);
      dragging_comp = null;
    }

    // console.log($all_comps);
  }

  // @ts-ignore
  function handle_board_hovering(e) {
    dragging_comp = e.detail;
    dragging_comp_on_board = e.detail.tag;
  }

  // @ts-ignore
  function call_when_component_on_focus(e) {
    // console.log(e);
    active_element = e;
  }

  function save_progress(e) {
    // switch_draggable();
    console.log(draggable__);
    convert_to_html = e;
  }

  let active_btn = $state("Build");
  let draggable__ = $state(true);
</script>

<header class=" body-font top-0 left-0 w-full">
  <div
    class=" mx-auto w-full flex flex-wrap p-5 items-center justify-between shadow-sm"
  >
    <a
      href="/"
      class="flex title-font items-center text-gray-500 mb-4 md:mb-0 font-bold text-2xl"
    >
      <img src="/SVG/logo.webp" alt="" class=" w-[100px] object-contain" />
    </a>
    <div class="flex gap-4 p-1 bg-gray-200 rounded">
      <button
        class={`rounded  px-6 py-1 ${active_btn === "Build" && "bg-white text-black shadow"}`}
        onclick={() => {
          active_btn = "Build";
        }}>Build</button
      >

      <button
        class={`rounded  px-6 py-1 ${active_btn === "Functions" && "bg-white text-black shadow"}`}
        onclick={() => {
          active_btn = "Functions";
        }}>Functions</button
      >
    </div>
    <button
      onclick={() => save_progress("htmll")}
      class=" hidden md:flex flex-wrap items-center text-base justify-center gap-4"
    >
      <small>Changes saved 2min ago </small><span
        href="/"
        class="mr-5 hover:text-gray-900 px-4 rounded bg-blue-200 text-blue-500 flex items-center gap-3"
        >Preview <iconify-icon icon="heroicons:eye-16-solid"
        ></iconify-icon></span
      >
    </button>
  </div>
</header>
<section class="w-full bg-green flex gap-4">
  <SideBar dragEvent_={dragging_side_bar_icon}></SideBar>
  <section class="w-[60%] min-h-screen p-4">
    <Board
      {added_comp}
      {call_on_dropped}
      {dragging_item_that_is_already_in_board}
      {call_when_component_on_focus}
      on:dragEventOnBoard={handle_board_hovering}
      {save_progress}
      draggable={draggable__}
    ></Board>
  </section>
  <Editor {active_element} />
</section>

{#if convert_to_html}
  <div
    class="fixed w-full min-h-screen left-0 top-0 p-4 bg-[#ffffff58] backdrop-blur"
  >
    <button
      class=" text-2xl"
      on:click={() => {
        convert_to_html = undefined;
        is_draggable.reset(true);
      }}>&times;</button
    >
    <Preview htm={convert_to_html} {added_comp} />
  </div>
{/if}
