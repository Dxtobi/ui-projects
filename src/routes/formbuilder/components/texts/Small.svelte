<script>
  // @ts-nocheck
  let { ...all } = $props();
  import { is_draggable } from "$lib/utils/current_comp_store";

  // let styles_option = $derived(all.lt.props.data);

  // // @ts-ignore
  let styles_ = $state(``);
  let drag_enter = $state(false);

  const { tag } = all.data;
  $effect(() => {
    console.log(tag);
    // @ts-ignore
    document.getElementById(tag).addEventListener("click", (e) => {
      // @ts-ignore
      all.call_when_component_on_focus({
        id: tag,
        component: "Label",
        styles: all.data.state.styles,
        value: all.data.state.value,
      });
    });

    styles_ = `
            border-width: ${all.data.state.styles?.border_width};
            border-radius: ${all.data.state.styles?.border_radius};
            padding: ${all.data.state.styles?.padding};
            font-size:${all.data.state.styles?.font_size};
            color: ${all.data.state.styles?.color};
            border-color: ${all.data.state.styles?.border_color};
            text-align: ${all.data.state.styles?.text_align};
        `;
    //   console.log(drag_enter);
  });
</script>

<small
  style={styles_}
  class={all.draggable && drag_enter && "component"}
  id={tag}
  role="alert"
  draggable={all.draggable}
  on:drag={() => all.dispatch("dragEventOnBoard", { ...all.data })}
  on:dragenter={() => (drag_enter = true)}
  on:dragleave={() => (drag_enter = false)}
  class:border-t={all.draggable && drag_enter}
  class:border-t-blue-400={all.draggable && drag_enter}
  data-type="component"
>
  {all.data.state.value}
</small>
