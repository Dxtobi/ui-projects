<script>
    // @ts-nocheck

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let { lt } = $props();

    function callDisp(event) {
        dispatch('dragEvent', { ...lt });
        //   console.log(event);
        followMouseElement.style.position = 'fixed';
        followMouseElement.style.display = 'block';

        followMouseElement.style.top = `${event.y + 20}px`;
        followMouseElement.style.left = `${event.x + 20}px`;
    }

    let draggedElement = null;
    /**@type {HTMLElement} */
    let followMouseElement;

    function handleDragStart(event) {
        console.log(lt.name);
        if (followMouseElement) {
            followMouseElement.classList.add('show');
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
        // console.log('dragging');
    }

    function handleDragEnd(event) {
        followMouseElement.style.position = 'absolute';
        followMouseElement.style.display = 'none';
        followMouseElement.style.top = `0px`;
        followMouseElement.style.left = `0px`;
    }
</script>

<div class="relative">
    <button
        class="border rounded-md flex gap-2 pl-2 pr-4 p-1 items-center cursor-grab grabable relative"
        draggable={lt.name === 'Sections' ? 'false' : 'true'}
        on:drag={callDisp}
        on:dragstart={handleDragStart}
        on:dragover={handleDragOver}
        on:dragend={handleDragEnd}
    >
        <iconify-icon class="" icon={lt.icon}></iconify-icon>
        <span class="  capitalize p">{lt.name}</span>
    </button>
    <div class="hidding transition-all" bind:this={followMouseElement}>
        <div class="border rounded-md flex gap-2 pl-2 pr-4 p-1 items-center cursor-grab grabable relative">
            <iconify-icon class="" icon={lt.icon}></iconify-icon>
            <span class="  capitalize p">{lt.name}</span>
        </div>
    </div>
</div>

<style>
    .hidding {
        display: none;
        background-color: bisque;
        position: absolute;
        border-radius: 10px;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .hidding.show {
        display: block;
        position: fixed;
    }
</style>
