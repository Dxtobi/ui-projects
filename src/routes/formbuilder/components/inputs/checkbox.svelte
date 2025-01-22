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
        component: "Checkbox",
        styles: all.data.state.styles,
        value: all.data.state.value,
        name: all.data.state.name,
        placeholder: all.data.state.placeholder,
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
        margin:${all.data.state.styles.margin};
        `;
  });
</script>

<label
  for={all.data.state.name}
  style={styles_}
  {...all.data.state}
  class={all.draggable && "component hover:z-30"}
  id={tag}
  draggable={all.draggable}
  on:drag={() => all.dispatch("dragEventOnBoard", { ...all.data })}
  on:dragenter={() => (drag_enter = true)}
  on:dragleave={() => (drag_enter = false)}
  class:border-t={drag_enter && all.draggable}
  class:border-t-blue-400={drag_enter && all.draggable}
  data-type="component"
>
  <input
    {...all.data.state}
    class=" "
    disabled="false"
    value={all.data.state.value}
    
  />
  <span>{all.data.state.styles.label}</span>
</label>
