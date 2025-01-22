<script>
    // @ts-nocheck

    import DragButton from './DragButton.svelte';

    import { components, components_raw } from '$lib/js/components';

    let { dragEvent_ } = $props();

    // $effect(() => {

    // });
</script>

<aside class="flex flex-col p-4 w-[20%] border-r">
    <div class="">
        <h3 class="my-4 text-gray-500 font-bold">Layout section</h3>
        <div class=" flex flex-wrap gap-2">
            {#each $components.layouts as lt}
                <DragButton {lt} on:dragEvent={dragEvent_}></DragButton>
            {/each}
        </div>
    </div>

    <div class="mt-4">
        <h3 class="my-4 text-gray-500 font-bold">Texts</h3>
        <div class=" flex flex-wrap gap-2">
            {#each $components.texts as lt}
                <DragButton {lt} on:dragEvent={dragEvent_}></DragButton>
            {/each}
        </div>
    </div>

    <div class="mt-4">
        <h3 class="my-4 text-gray-500 font-bold">Inputs</h3>
        <div class=" flex flex-wrap gap-2">
            {#each $components.input as lt}
                <DragButton {lt} on:dragEvent={dragEvent_}></DragButton>
            {/each}
        </div>
    </div>

    <div class="mt-4">
        <h3 class="my-4 text-gray-500 font-bold">Multi Element</h3>
        <div class=" flex flex-wrap gap-2">
            {#each $components.multi_element as lt}
                <DragButton {lt} on:dragEvent={dragEvent_}></DragButton>
            {/each}
        </div>
    </div>

    <div class="mt-4">
        <h3 class="my-4 text-gray-500 font-bold">Other</h3>
        <div class=" flex flex-wrap gap-2">
            {#each $components.others as lt}
                <DragButton {lt} on:dragEvent={dragEvent_}></DragButton>
            {/each}
        </div>
    </div>
</aside>
