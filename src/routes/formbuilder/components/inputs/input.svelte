<script>
  // @ts-nocheck
  let { ...all } = $props();
  import { is_draggable, all_comps } from "$lib/utils/current_comp_store";
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
        component: "Input",
        styles: all.data.state.styles,
        value: all.data.state.value,
        name: all.data.state.name,
        placeholder: all.data.state.placeholder,
        required: all.data.state.required,
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

<div
  style={styles_}
  {...all.data.state}
  class={all.draggable && "component"}
  id={tag}
  tabindex="0"
  role="textbox"
  draggable={all.draggable}
  on:drag={() => all.dispatch("dragEventOnBoard", { ...all.data })}
  on:dragenter={() => (drag_enter = true)}
  on:dragleave={() => (drag_enter = false)}
  class:border-t={drag_enter && all.draggable}
  class:border-t-blue-400={drag_enter && all.draggable}
  data-type="component"
>
  <label for={all.data.state.name} class=" pointer-events-none"> </label>
  <input
    {...all.data.state}
    style=" width:100%; padding:2px;  background:none  "
    class=" "
    value={all.data.state.value}
    on:focus={() => console.log("feeling it..")}
    onchange={(e) => all_comps.update_value(e.target.value, tag)}
  />
</div>
