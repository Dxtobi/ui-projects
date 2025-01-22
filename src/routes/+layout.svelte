<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "iconify-icon";
</script>

<div class="app overflow-x-hidden">
  <!-- <Header /> -->

  <main>
    <slot />
  </main>

  <footer></footer>
</div>
