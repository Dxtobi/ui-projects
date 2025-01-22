<script>
  // @ts-nocheck

  import { fade, fly } from "svelte/transition";
  import { is_draggable } from "$lib/utils/current_comp_store";

  // @ts-nocheck
  let { ...all } = $props();

  // let styles_option = $derived(all.lt.props.data);

  // // @ts-ignore
  let styles_ = $state(``);
  let drag_enter = $state(false);
  // @ts-ignore
  function setSelected(value) {
    //console.log(value);
    callBackFun(value);
    active = !active;
  }
  /**@type {HTMLInputElement}*/
  // @ts-ignore
  let select = $state(null);
  let active = $state(false);
  // @ts-ignore
  const { tag } = all.data;
  $effect(() => {
    console.log(tag);
    // @ts-ignore
    // @ts-ignore
    document.getElementById(tag).addEventListener("click", (e) => {
      // @ts-ignore
      all.call_when_component_on_focus({
        id: tag,
        component: "Dropdown",
        // @ts-ignore
        styles: all.data.state.styles,
        // @ts-ignore
        value: all?.data?.state?.value || "",
      });
    });
    styles_ = `
        background-color: ${
          // @ts-ignore
          all.data.state.styles.background_color
        };
        border-width: ${
          // @ts-ignore
          all.data.state.styles.border_width
        };
        border-color: ${
          // @ts-ignore
          all.data.state.styles.border_color
        };
        border-radius: ${
          // @ts-ignore
          all.data.state.styles.border_radius
        };
        padding: ${
          // @ts-ignore
          all.data.state.styles.padding
        };
        color: ${
          // @ts-ignore
          all.data.state.styles.color
        };
        width: ${
          // @ts-ignore
          all.data.state.styles.width
        };
        `;
  });

  // @ts-ignore
  let value = $state(all?.data?.state?.value);
  // @ts-ignore
  let options = $state(all?.data?.state?.props?.options);
  // @ts-ignore
  let callBackFun = (value) => {};
</script>

<div
  style={styles_}
  {...all.data.state}
  class="component"
  id={tag}
  tabindex="-1"
  role="button"
  type="button"
  draggable={all.draggable}
  on:drag={() => all.dispatch("dragEventOnBoard", { ...all.data })}
  on:dragenter={() => (drag_enter = true)}
  on:dragleave={() => (drag_enter = false)}
  class:border-t={drag_enter}
  class:border-t-blue-400={drag_enter}
  data-type="component"
>
  <div class="relative">
    <div
      class="border rounded px-4 py-1 relative flex items-center cursor-pointer justify-between"
    >
      <input
        bind:this={select}
        class=" bg-transparent outline-none min-w-[100px] py-4"
        placeholder={value ? value : "Select"}
        style=""
        {value}
        readonly
        type=""
        on:click={() => (active = !active)}
      />
      <button
        class=""
        tabindex="-1"
        on:click={() => (active = !active)}
        type="button"
        >{#if active}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
            /></svg
          >{:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              fill-rule="evenodd"
              d="m5 8l7 8l7-8z"
            /></svg
          >
        {/if}
      </button>
    </div>

    {#if active}
      <div
        class=" w-full left-0 bottom-[-260px] rounded backdrop-blur-md shadow-2xl absolute h-[250px] z-[10] bg-[#ffffffeb]"
        in:fly={{ y: 100, duration: 200 }}
        out:fade={{ duration: 200 }}
      >
        {#each options as ops}
          <button
            class="w-full text-start border-b py-2 text-sm backdrop-blur-lg px-3"
            role="option"
            type="button"
            aria-selected="false"
            on:click={() => setSelected(ops)}
          >
            <span>{ops} </span>
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>
