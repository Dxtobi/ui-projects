<script>
  import SpanSwitch from "../components/SpanSwitch.svelte";

  import Cart from "../components/Cart.svelte";

  import { tiltCard } from "$lib/js/card_hover";
  import Select from "../components/Select.svelte";
  import Mobile from "../components/Mobile.svelte";
  import Post from "../components/Post.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "../components/Sidebar.svelte";

  $effect(() => {
    tiltCard(".tilt", {
      max: 25,
      perspective: 1000,
      scale: 1,
      speed: 150,
      easing: "ease-in",
    });
  });

  const pros = $state([
    {
      name: "Creative Agency",
      content: "An agency focused on SEO, Web Dev/Design and Product branding ",
      href: "/agency",
    },
    {
      name: "Advertising Platform",
      content:
        "A platform pined on broadcasting your products or services on all available media.",
      href: "/platform",
    },
    {
      name: "Task Manager UI",
      content: "A simple drag and drop task manager.",
      href: "/drags",
    },
    {
      name: "Form builder UI",
      content: "A simple drag and drop form builder.",
      href: "/formbuilder",
    },
    {
      name: "CBT Landing Page",
      content: "A landing page for a saas cbt website.",
      href: "/cbt",
    },
    {
      name: "SVG TEST",
      content: "An svg test site",
      href: "/svgs",
    },
  ]);
  let input_values = $state({
    select_value: "",
    options: ["Others", "Angular", "React", "Vue", "Svelte"],
  });
</script>

<svelte:head>
  <title>UI-Test</title>
  <meta name="description" content="" />
</svelte:head>

<Header />
<section
  class=" bg-gradient-to-tl main m-auto w-full alternative_bg_box md:px-20 relative"
>
  <section
    class="min-h-screen w-full flex overflow-visible md:justify-between items-center md:px-16 px-4 gap-8 flex-col md:flex-row pt-28 md:pt-2 relative z-50"
  >
    <div class="w-full md:w-1/2 grid place-content-center">
      <h1 class=" font-bold text-5xl">
        Custom components Svelte <span class=" text-[4rem] text-red-500">
          &</span
        >
        HTML<span class=" text-[4rem] text-red-500">.</span>
      </h1>
      <br />
      <p class=" text-3xl">
        This are some useful components used in my past projects.
      </p>
      <a
        href="https://github.com/Dxtobi/test"
        class=" transition-all my-8 p-8 w-24 h-24 text-2xl rounded-full border bg-neutral-900 text-neutral-700 grid place-content-center hover-effect"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          />
        </svg>
      </a>
    </div>
    <div
      class="flex flex-col w-full md:w-1/2 gap-4 justify-between relative min-h-[50vh]"
    >
      <div class="md:absolute right-0 bottom-[6%] z-50">
        <Select
          options={input_values.options}
          callBackFun={(/** @type {any} */ e) => {
            input_values.select_value = e;
            console.log(e);
          }}
          value={input_values.select_value}
        />
      </div>

      <Post />
      <Cart></Cart>
      <SpanSwitch></SpanSwitch>
      <Mobile></Mobile>
      <div class="fixed left-0 top-0">
        <Sidebar />
      </div>
    </div>
  </section>

  <section
    class="min-h-screen w-full grid place-content-center overflow-visible"
    id="projects"
  >
    <div class="p-3 md:p-6 w-full md:w-11/12 m-auto" id="content">
      <p class="text-2xl font-bold md:w-[70%] w-full">
        Still confuse<span class="text-blue-600">?</span>
        <span class="text-gray-400"> This is just a template website</span>
        for some of my
        <span class="text-gray-400"
          ><span class="text-blue-600">UI</span> projects that did not make it to
          production</span
        >
        and also some <span class="text-blue-600">UI designs</span> that i liked
        on
        <span class="text-gray-400">Pinterest</span>.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {#each pros as pro, i}
          <div
            class="min-h-[20vh] relative flex flex-col justify-between p-4 border rounded-md text-white bg-neutral-900"
          >
            <div class="px-4 py-1 w-fit rounded-full border">{pro.name}</div>

            <div class="flex justify-between items-end h-fit gap-10 w-[60%]">
              <p class=" font-bold">{pro.content}</p>
            </div>
            <a
              href={pro.href}
              class=" w-10 h-10 rounded-full border flex justify-center items-center absolute right-4 bottom-4 hover:scale-110 transition-all"
            >
              &rarr;
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
</section>

<style>
  h1 {
    width: 100%;
  }

  div {
    overflow: visible;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
