<script>
  // @ts-nocheck
  let { ...all } = $props();

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
        component: "Button",
        styles: all.data.state.styles,
        value: all.data.state.value,
      });
    });

    styles_ = `
        background-color: ${all.data.state.styles.background_color};
        border-width: ${all.data.state.styles.border_width};
        border-color: ${all.data.state.styles.border_color};
        border-radius: ${all.data.state.styles.border_radius};
        padding: ${all.data.state.styles.padding};
        color: ${all.data.state.styles.color};
        width: ${all.data.state.styles.width};
        margin: ${all.data.state.styles.margin};

        `;
    //   console.log(drag_enter);
  });
</script>

<button
  style={styles_}
  {...all.data.state}
  class={all.draggable && drag_enter && "component"}
  id={tag}
  type="submit"
  draggable={all.draggable}
  on:drag={() => all.dispatch("dragEventOnBoard", { ...all.data })}
  on:dragenter={() => (drag_enter = true)}
  on:dragleave={() => (drag_enter = false)}
  class:border-t={all.draggable && drag_enter}
  class:border-t-blue-400={all.draggable && drag_enter}
  data-type="component">{all.data.state.value}</button
>
