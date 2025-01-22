<script>
  // @ts-nocheck
  import { fade, fly } from "svelte/transition";
  const { options, callBackFun, value } = $props();
  /**
   * @param {string} value
   */
  function setSelected(value) {
    //console.log(value);
    callBackFun(value);
    active = !active;
  }
  /**@type {HTMLInputElement}*/
  let select = $state(null);
  let active = $state(false);
</script>

<div class="flex-col flex gap-3 backdrop-blur-md bg-[#ffffff8c]">
  <div class="relative">
    <div
      class=" rounded px-4 py-1 relative flex items-center cursor-pointer justify-between"
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
      <button class="" tabindex="-1" on:click={() => (active = !active)}
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

<!-- 
  role="option"
  aria-selected="false" -->
