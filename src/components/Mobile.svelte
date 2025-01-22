<script>
  import { tiltCard } from "../lib/js/card_hover";

  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const dayOfWeek = now.getDay();
  const dateOfMonth = now.getDate();
  const month = now.getMonth();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayOfWeekW = daysOfWeek[dayOfWeek];

  $effect(() => {
    tiltCard(".movethis", {
      max: 20,
      perspective: 1000,
      scale: 1,
      speed: 150,
      easing: "ease-in",
    });
  });
</script>

<div
  style="background-image: url('/avatars/av4.jpg'); background-position: center;"
  class="text-white movethis w-[95vw] h-[80vh] m-auto shadow-2xl md:w-[320px] md:h-[600px] rounded-xl md:rounded-[45px] border-[4px] relative md:absolute right-2 top-[-20%] overflow-clip border-neutral-900 md:-z-10"
>
  <div class="relative w-full h-full">
    <div class="flex justify-between absolute p-4 w-full">
      <span class=" flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <defs>
            <path
              id="arcticonsHomeNetwork0"
              fill="none"
              stroke="currentColor"
              d="M27.465 34.326L24 37.79l-3.465-3.465c.88-.881 2.102-1.433 3.465-1.433s2.584.552 3.465 1.433"
            />
          </defs>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M24 32.893a4.88 4.88 0 0 1 3.465 1.433L24 37.79l-3.465-3.465A4.88 4.88 0 0 1 24 32.893m-8.552-3.653c2.197-2.186 5.216-3.537 8.552-3.537s6.355 1.351 8.552 3.536M4.5 18.291c4.98-4.992 11.888-8.082 19.5-8.082s14.52 3.09 19.5 8.082"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.535 34.326L24 37.791l3.465-3.465"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M24 32.893a4.88 4.88 0 0 1 3.465 1.433L24 37.79l-3.465-3.465A4.88 4.88 0 0 1 24 32.893m-8.552-3.653c2.197-2.186 5.216-3.537 8.552-3.537s6.355 1.351 8.552 3.536m-22.449-5.345c3.56-3.559 8.47-5.756 13.897-5.756s10.337 2.197 13.897 5.756"
          />
          <use
            href="#arcticonsHomeNetwork0"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <use
            href="#arcticonsHomeNetwork0"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <small class=" flex gap-2">
          <span>MTN</span>
          <span>LIT</span>
        </small>
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zm-.002 1.5H5a1.5 1.5 0 0 0-1.493 1.356L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493zM6.017 9H9a1 1 0 0 1 .993.883L10 10v4a1 1 0 0 1-.883.993L9 15H6.017a1 1 0 0 1-.994-.883L5.017 14v-4a1 1 0 0 1 .883-.993zH9z"
          />
        </svg>
      </span>
    </div>
    <span
      class="top-[15%] left-0 right-0 absolute text-[3rem] m-auto text-center flex-col flex"
    >
      <span>{hour}:{minute}</span>
      <span class="text-sm">{dayOfWeekW} {dateOfMonth} {month}</span>
    </span>

    <!-- Notifications -->
    <span
      class="top-[35%] left-0 absolute w-full px-4 py-2 flex flex-col backdrop-blur-xl shadow-lg"
    >
      <span class=" flex justify-between w-full">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.43em"
            height="1em"
            viewBox="0 0 256 180"
          >
            <path
              fill="#f00"
              d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
            />
            <path
              fill="#fff"
              d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
            />
          </svg></span
        >
        <span class="text-[11px]">1h ago</span>
      </span>
      <span class="text-[11px]">
        <strong>Svelte Society</strong>
        <p>Building custom components</p>
      </span>
    </span>

    <!-- camera -->
    <div
      class="rounded-full w-[30%] p-1 bg-neutral-950 absolute left-0 right-0 m-auto top-3"
    >
      <span
        class=" border-neutral-800 w-4 h-4 rounded-full block inset-3 bg-neutral-900 border-4"
      ></span>
    </div>
  </div>
</div>

<!-- m 40.449219,136.1875 v 1.87305 h 1.216797 v 6.06445 h 1.894531 c 1.079496,0 2.073122,-0.39348 2.845703,-1.03906 0.09525,0.83608 0.276844,1.31345 0.308594,1.37695 l 1.30664,-0.50977 v 0.17188 h 3.841797 v -1.875 h -0.984375 v -4.18945 h 0.439453 0.544922 0.671875 v 6.06445 h 1.894532 c 1.079496,0 2.073122,-0.39348 2.845703,-1.03906 0.09525,0.83608 0.276843,1.31345 0.308593,1.37695 l 1.578125,-0.61719 c -0.0055,0.0967 -0.06055,0.18184 -0.06055,0.2793 h 1.873047 c 0,-0.92075 0.40193,-1.81 1.089844,-2.42383 l 0.318359,-0.28711 0.316407,0.28711 c 0.687914,0.61383 1.080078,1.50308 1.080078,2.42383 h 1.873047 c 0,-1.4605 -0.623628,-2.84861 -1.703125,-3.82227 l -0.169922,-0.14648 0.169922,-0.14844 c 1.079497,-0.97367 1.703125,-2.35981 1.703125,-3.82031 h -1.873047 c 0,0.92075 -0.392164,1.80804 -1.080078,2.42188 l -0.316407,0.2871 -0.318359,-0.2871 c -0.687914,-0.61384 -1.089844,-1.50113 -1.089844,-2.42188 h -1.873047 c 0,1.4605 0.624764,2.84664 1.714844,3.82031 l 0.158203,0.14844 -0.158203,0.14648 c -0.886202,0.79156 -1.361505,1.88389 -1.546875,3.03907 -0.07202,-0.2449 -0.193359,-0.52464 -0.193359,-1.45118 v -5.70312 h -1.875 v 3.50195 c 0,1.40758 -1.142384,2.56055 -2.560547,2.56055 H 54.4082 v -6.0625 h -2.544922 -0.544922 -3.111328 -0.185547 -1.6875 v 3.50195 c 0,1.40758 -1.144338,2.56055 -2.5625,2.56055 h -0.232422 v -6.0625 z m 7.757812,1.87305 h 0.798828 V 142.25 h -0.75 c -0.01412,-0.19028 -0.04883,-0.12985 -0.04883,-0.35938 z -->

<style>
</style>
