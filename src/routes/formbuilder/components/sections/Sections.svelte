<script>
    // @ts-nocheck
    import { all_comps } from '$lib/utils/current_comp_store';

    import Button from '../inputs/button.svelte';
    import Input from '../inputs/input.svelte';
    import Number from '../inputs/number.svelte';
    import Phone from '../inputs/phone.svelte';
    import Switch from '../inputs/switch.svelte';
    import Multiline from '../texts/Multiline.svelte';
    import Small from '../texts/Small.svelte';
    import Text from '../texts/Text.svelte';

    // @ts-nocheck
    let { ...all } = $props();

    // let styles_option = $derived(all.lt.props.data);

    // // @ts-ignore
    let styles_ = $state(``);
    let drag_enter = $state(false);
    //let isDraggedOver =$state(true)
    const { tag } = all.data;
    const { dispatch, call_when_component_on_focus } = all;
    $effect(() => {
        console.log(all.section_components);
        // @ts-ignore
        document.getElementById(tag).addEventListener('click', (e) => {
            // @ts-ignore
            call_when_component_on_focus({
                id: tag,
                component: 'Section',
                styles: all.data.state.styles,
                value: all.data.state.value,
            });
        });

        styles_ = `
        display: ${all.data.state.styles.display};
        justify-content: ${all.data.state.styles.justify_content};
        border-color: ${all.data.state.styles.border_color};
        border-width: ${all.data.state.styles.border_width};
        border-radius: ${all.data.state.styles.border_radius};
        padding: ${all.data.state.styles.padding};
        color: ${all.data.state.styles.color};
        width: ${all.data.state.styles.width};
        min-height:${all.data.state.styles.min_height};
        
        `;
    });

    // @ts-ignore
    function call_drag_over(e) {
        e.preventDefault();
    }
    // @ts-ignore
    function handle_drop(e) {
        console.log(e, 'dropped on section');
        // call_on_dropped(e, ref);
        //  isDraggedOver = true;
        console.log(all.section_components);
    }
</script>

<div
    style={styles_}
    class="component"
    id={tag}
    tabindex="-1"
    role="button"
    type="button"
    draggable="true"
    on:drag={() => all.dispatch('dragEventOnBoard', { ...all.data })}
    on:dragenter={() => (drag_enter = true)}
    on:dragleave={() => (drag_enter = false)}
    on:dragover={call_drag_over}
    on:drop={handle_drop}
    class:bg={drag_enter}
    class:border-gray-400={drag_enter}
    data-type="droppable"
>
    {#each $all_comps as data}
        <!-- SECTIONS -->
        {console.log(data.section_tag, tag, data)}
        {#if data.section_tag === tag}
            {#if data.name == 'Label'}
                <Small {dispatch} {call_when_component_on_focus} {data} />
            {/if}

            <!-- TEXTS -->
            {#if data.name == 'Text'}
                <Text {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Multiline'}
                <Multiline {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Phone'}
                <Phone {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Number'}
                <Number {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Switch'}
                <Switch {dispatch} {call_when_component_on_focus} {data} />
            {/if}

            <!-- INPUT -->
            {#if data.name == 'Date'}
                <Input {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Button'}
                <Button {dispatch} {call_when_component_on_focus} {data} />
            {/if}
            {#if data.name == 'Input'}
                <Input {dispatch} {call_when_component_on_focus} {data} />
            {/if}
        {/if}
        <!-- <Comp.comp {handle_} id={'id'} /> -->
    {/each}
</div>
