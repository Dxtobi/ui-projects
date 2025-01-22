<script>
</script>

<div class="">
  <!-- <Header /> -->

  <header
    class="w-full fixed top-0 left-0 px-8 py-3 backdrop-blur-lg z-[60] shadow-lg bg-[#ffffff9a]"
  >
    <div class=" w-full h-full flex justify-between">
      <div class="relative">
        <div class="font-bold bottom-[-100%] z-[70] w-[40px] absolute left-0">
          <img class="w-full" alt="" src="/bitmap.svg" />
        </div>
      </div>
      <div>
        <a
          href="/"
          class="flex gap-3 items-center text-neutral-50 px-6 py-2 rounded-full bg-[#ffae30]"
          >Login <span class="font-bold text-xl"
            ><svg
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
                d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
              /></svg
            ></span
          ></a
        >
      </div>
    </div>
  </header>

  <main class=" pt-20">
    <slot />
  </main>

  <footer class="p-4 py-8 md:px-24">
    <p class="flex items-center gap-4">
      Contact Us Have questions or need support? Reach out to our friendly team
      on
      <a
        href="/"
        class="rounded-full px-6 py-1 flex gap-3 items-center text-neutral-50 bg-[#ffae30]"
        >Titter <iconify-icon class="text-3xl" icon="arcticons:x-twitter"
        ></iconify-icon></a
      > We're here to help!
    </p>
  </footer>
</div>
