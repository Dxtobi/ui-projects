// @ts-nocheck
import { createRoot, mount } from 'svelte';

/**
 * @param {{ addEventListener: (arg0: string, arg1: { (e: any): void; (e: any): void; }) => void; getBoundingClientRect: () => any; insertBefore: (arg0: any, arg1: any) => void; firstChild: any; appendChild: (arg0: any) => void; }} node
 * @param {any[]} components
 */
export function dropZoneSection(node, options) {

    let state = {
        dropEffect: "move",
        dragover_class: 'droppable',
        ...options
    }





    // @ts-ignore
    function handle_dragover_class(e) {
        e.target.classList.add(state.dragover_class)
    }
    // @ts-ignore
    function handle_dragleave_class(e) {
        e.target.classList.remove(state.dragover_class)
    }
    // @ts-ignore
    function handle_dragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = state.dropEffect;
        //  handle_dragleave_class(e)
    }

    // @ts-ignore
    function handle_drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        e.target.classList.remove(state.dragover_class)
        state.on_dropzone(data, e);
    }
    node.addEventListener("dragenter", handle_dragover_class)
    node.addEventListener("dragleave", handle_dragleave_class)
    node.addEventListener("dragover", handle_dragover)
    node.addEventListener("drop", handle_drop)


    return {
        // @ts-ignore
        update(options) {
            state = {
                dropEffect: "move",
                dragover_class: 'droppable',
                ...options
            }
        },
        destroy() {
            node.removeEventListener("dragenter", handle_dragover_class)
            node.removeEventListener("dragleave", handle_dragleave_class)
            node.removeEventListener("dragover", handle_dragover)
            node.removeEventListener("drop", handle_drop)
        }
    }
}