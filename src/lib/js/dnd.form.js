
// @ts-ignore
import { createRoot, mount } from 'svelte';


// @ts-ignore
export function dropZone(node, options) {

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