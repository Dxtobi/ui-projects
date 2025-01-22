<script>
    import { fly } from "svelte/transition";
    // import { onMount } from "svelte";
    const genres = [
      "Sci-Fi",
      " Drama",
      "Romance",
      "Comedy",
      "Family",
      "Animation",
      "Fantasy",
      "Thriller",
      "Horror",
      "Action",
      "Adventure",
      "Mystery",
      "War",
      "Documentary",
      "Western",
      "History",
      "Biography",
      "Crime",
    ];
    const genreEmojis = [
      "👽",
      "🎭",
      "❤️",
      "😂",
      "👪",
      "🐭",
      "🧚",
      "🔪",
      "👻",
      "💥",
      "🏔️",
      "🕵️‍♂️",
      "⚔️",
      "🎥",
      "🤠",
      "🏛️",
      "👤",
      "🕵️‍♀️",
    ];

    const categories = [
      "Hollywood Movie",
      "Hollywood Tv series",
      "Nollywood Movie",
      "Nollywood Tv Series",
      "Other Foreign Series",
      "Foreign Movies",
    ];
    let isCollapsed = false;
    let classesOpen = false;
    let category = false;
    function toggleSidebar() {
      isCollapsed = !isCollapsed;
    }
  </script>
  
  <div class="flex min-h-screen shadow-lg relative py-4 bg-white">
    <button
      on:click={toggleSidebar}
      class={` absolute z-40 grid place-content-center -right-8 trans-delay-longer ${isCollapsed ? " rotate-180" : "  top-4"} bg-red-500 text-red-100 w-10 h-10 rounded-lg`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
        /></svg
      >
    </button>
    <div
      class={` ${isCollapsed ? "sidebar-collapsed" : "sidebar-expanded"} transition-all duration-300 w-full`}
    >
      <div class="flex items-center justify-between p-4">
        <h1 class="text-[30px] font-bold">9x</h1>
      </div>
      <nav class="flex flex-col p-4 space-y-4 relative w-full">
        <div>
          <button
            class="flex items-center gap-3 justify-between cursor-pointer"
            on:click={() => {
              classesOpen = !classesOpen;
              category = false;
            }}
          >
            {#if isCollapsed}
              <img
                alt=""
                in:fly={{ duration: 600, x: -300 }}
                src="/romance.png"
                class="w-[32px]"
              />
            {:else}
              <img alt="" src="/romance.png" class="w-[32px]" />
              <span class={``}>Genre</span>
            {/if}
          </button>
          {#if classesOpen}
            <ul
              class="flex flex-wrap gap-1 bg-[#ffffff9a] rounded-lg p-3 border absolute right-[-360px] w-[350px] backdrop-blur-2xl"
              in:fly={{ duration: 600, x: -300 }}
              out:fly={{ duration: 600, x: -300 }}
            >
              {#each genres as gen, i}
                <li
                  class="p-2 hover:bg-[#b8b8b837] hover:backdrop-blur-lg rounded-md"
                >
                  <a href="#som">{genreEmojis[i]} {gen}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
  
        <div class="relative">
          <button
            class="flex items-center gap-3 justify-between cursor-pointer"
            on:click={() => {
              category = !category;
              classesOpen = false;
            }}
          >
            {#if isCollapsed}
              <img
                alt=""
                class="w-[32px]"
                in:fly={{ duration: 600, x: -300 }}
                src="/thrill.png"
              />
            {:else}
              <img alt="" src="/thrill.png" class="w-[32px]" />
              <span class={``}>Category</span>
            {/if}
          </button>
          {#if category}
            <ul
              class="flex flex-wrap gap-1 bg-[#ffffff9a] rounded-lg p-3 border absolute right-[-360px] w-[350px] backdrop-blur-2xl"
              in:fly={{ duration: 600, x: -300 }}
              out:fly={{ duration: 600, x: -300 }}
            >
              {#each categories as cat}
                <li
                  class="p-2 hover:bg-[#b8b8b878] hover:backdrop-blur-lg rounded-md"
                >
                  <a href="#som"> {cat}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </nav>
    </div>
  </div>
  
  <style>
    .sidebar-collapsed {
      width: 4rem;
    }
  
    .sidebar-expanded {
      width: 10rem;
      transition-duration: 300ms;
    }
  
    .icon {
      width: 1.5rem;
      height: 1.5rem;
    }
    .trans-delay-longer {
      transition-duration: 600ms;
    }
  </style>
  