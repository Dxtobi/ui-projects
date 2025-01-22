// @ts-ignore
import { updated } from "$app/stores";

/**
 * 
 * @param {HTMLElement} node 
 * @param {*} data 
 */
export function draggable(node, data) {

    let state = data

    node.draggable = true;
    node.style.cursor = "grab";


    /**
     * @param {{ dataTransfer: { setData: (arg0: string, arg1: any) => void; }; target: { classList: { add: (arg0: any) => void; }; }; }} e
     */
    function handle_dragstart(e) {
        e.dataTransfer.setData("text/plain", state);
        e.target.classList.add('on_drag')

    }

    // @ts-ignore
    function handle_ov_drag(e) {
        e.target.classList.remove('on_drag')
        e.target.style.left = 'unset';
        e.target.style.top = 'unset';
        e.target.style.position = 'unset'
    }

    // @ts-ignore
    function dragging(e) {
        e.preventDefault()
        e.target.style.left = e.x + 50 + "px";
        e.target.style.top = e.y + 50 + "px";
        e.target.style.position = 'absolute'

        // e.target.style.setProperty('y_pos', )
        // elem.style.left = x - 20 + "px";
        // elem.style.top = y - 20 + "px";
    }

    // @ts-ignore
    node.addEventListener('dragstart', handle_dragstart);
    node.addEventListener('dragend', handle_ov_drag);
    node.addEventListener('drop', handle_ov_drag);
    node.addEventListener('drag', dragging);


    return {
        /**
         * @param {string} data
         */
        update(data) {
            state = data
        },
        destroy() {
            // @ts-ignore
            node.removeEventListener("dragstart", handle_dragstart)
            node.removeEventListener("dragend", handle_ov_drag)
            node.removeEventListener('drop', handle_ov_drag);
            node.removeEventListener('drag', dragging);
        }

    }

}

/**
 * 
 * @param {HTMLElement} node 
 * @param {*} options 
 */
export function dropzone(node, options) {

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


/**
 * 
 * @param {HTMLElement} node 
 * @param {*} data 
 */
export function draggable_form(node, data) {

    let state = data

    node.draggable = true;
    node.style.cursor = "grab";




    /**
     * @param {{ dataTransfer: { setData: (arg0: string, arg1: any) => void; }; target: { classList: { add: (arg0: any) => void; }; }; }} e
     */
    function handle_dragstart(e) {
        e.dataTransfer.setData("text/plain", state);
        e.target.classList.add('on_drag')

    }

    let draggedComponent = null; // Track the currently dragged component


    // @ts-ignore
    function handle_drag_end(e) {

    }

    // @ts-ignore
    function dragging(e) {
        e.preventDefault()


        // e.target.style.setProperty('y_pos', )
        // elem.style.left = x - 20 + "px";
        // elem.style.top = y - 20 + "px";
    }

    // @ts-ignore
    node.addEventListener('dragstart', handle_dragstart);
    node.addEventListener('dragend', handle_drag_end);
    node.addEventListener('drop', handle_drag_end);
    node.addEventListener('drag', dragging);


    return {
        /**
         * @param {string} data
         */
        update(data) {
            state = data
        },
        destroy() {
            // @ts-ignore
            node.removeEventListener("dragstart", handle_dragstart)
            node.removeEventListener("dragend", handle_drag_end)
            node.removeEventListener('drop', handle_drag_end);
            node.removeEventListener('drag', dragging);
        }

    }

}


/**
 * 
 * @param {HTMLElement} node 
 * @param {*} options 
 */
export function dropzone_form(node, options) {

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

