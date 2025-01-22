import { writable } from "svelte/store";


/**
 * @param {any} initValue
 */
function current_store(initValue) {
    const { subscribe, set, update } = writable(initValue)

    /**
     * @param {string} value
     */
    function change_value(value) {
        update(prev_state => prev_state.value = value)
    }

    /**
     * @param {any} value
     */
    function change_name(value) {
        update(prev_state => prev_state.name = value)
    }

    /**
   * @param {string} style_value
   * @param {string | number} style_key
   */
    function update_style(style_value, style_key) {
        update(prev_state => prev_state.styles[style_key] = style_value)
    }

    /**
     * @param {any} new_value
     */
    function reset(new_value) {
        set(new_value)
    }

    return { subscribe, update_style, change_value, reset, change_name }

}




/**
 * @param {any} initValue
 */

function components(initValue = [{}]) {
    let innerVal = initValue
    const { subscribe, set, update } = writable(innerVal)




    /**
     * @param {any} element
     * @param {any} index
     */
    function new_element_dropped_on_a_specific_location(index, element) {
        update(prev_state => {
            element.tag = Math.random().toString(36).substr(2, 10)

            // element.state.id = Math.random().toString(36).substr(2, 10) + '-' + Date.now() + '-' + element.name
            prev_state.splice(index, 0, element);
            //@ts-ignore
            //console.log(prev_state.filter((/** @type {{ state: { id: string; }; }} */ item) => item.state.id !== element.state.id))
            return prev_state
        })

    }

    /**
     * @param {any} element
     */

    function new_element_dropped(element) {
        update(prev_state => {
            element.tag = Math.random().toString(36).substr(2, 10)
            // element.state.id = Math.random().toString(36).substr(2, 10) + '-' + Date.now() + '-' + element.name
            prev_state.push(element)
            //console.log(prev_state[0]?.state?.id, element.state.id)
            //prev_state.map(e => console.log('>>>', e.state.id, '<<<< \n'))
            return prev_state// = [...prev_state, element]

        })

    }


      /**
     * @param {any} name
     * @param {any} id
     */
      function change_name(name, id) {
        update(prev_state => {
            console.log(prev_state, id)
            // @ts-ignore
            return prev_state.map(element => {
                if (element.tag === id) {
                    return { ...element,
                        state:{
                            ...element.state,
                            name
                        }
                     }; // Update only matching element
                } else {
                    return element; // Return unchanged element for non-matching ones
                }
            });
        });
    }

      /**
     * @param {any} placeholder
     * @param {any} id
     */
      function change_place_holder(placeholder, id) {
        update(prev_state => {
            console.log(prev_state, id)
            // @ts-ignore
            return prev_state.map(element => {
                if (element.tag === id) {
                    return { ...element,
                        state:{
                            ...element.state,
                            placeholder
                        }
                     }; // Update only matching element
                } else {
                    return element; // Return unchanged element for non-matching ones
                }
            });
        });
    }
    /**
     * @param {string} id
     */

    function element_removed(id) {

        console.log('deleting:::>>>', id)
        update(prev_state => {
            return prev_state.filter((/** @type {any} */ item) => item.tag !== id)

        })
    }

    /**
     * @param {string} style_value
     * @param {string | number} style_key
     * @param {any} id
     */
    function update_style(style_value, style_key, id) {
        update(prev_state => {
            // @ts-ignore
            return prev_state.map(element => {
                if (element.tag === id) {
                    return {
                        ...element,
                        state: {
                            ...element.state,
                            styles: { ...element.state.styles, [style_key]: style_value },
                        },
                    };
                } else {
                    return element;
                }
            });
        });
    }
    /**
    * @param {string} value
    * @param {any} id
    */
    function update_value(value, id) {
        console.log(value, id)
        update(prev_state => {
            // console.log(prev_state, id)
            // @ts-ignore
            return prev_state.map(element => {
                if (element.tag === id) {
                    return { ...element, state: { ...element.state, value } }; // Update only matching element
                } else {
                    return element; // Return unchanged element for non-matching ones
                }
            });
        });

    }
    /**
     * @param {any} new_value
     */
    function reset(new_value) {
        set(new_value)
    }

    // @ts-ignore
    function add_to_section(dropped_on, element) {
        update(prev_state => {
            element.tag = Math.random().toString(36).substr(2, 10)
            element.section_tag = dropped_on
            //element.state.id = Math.random().toString(36).substr(2, 10) + '-' + Date.now() + '-' + element.name
            prev_state.push(element)
            //console.log(prev_state.filter((/** @type {{ state: { id: string; }; }} */ item) => item.state.id !== element.state.id))
            return prev_state
        })



    }
    return { change_place_holder, change_name, add_to_section, update_value, subscribe, update_style, new_element_dropped, reset, element_removed, new_element_dropped_on_a_specific_location, innerVal }
}
// @ts-ignore
export const text = current_store({
    id: '',
    component: '',
    styles: {
        value: 'Text',
        border_width: '',
        border_radius: '',
        padding: '',
        border_color: '',
        background_color: '',
        color: '',
    }
})

// @ts-ignore
export const all_comps = components([])


/**
 * @param {boolean} initValue
 */
function set_draggable(initValue) {
    const { subscribe, set } = writable(initValue)

    /**
     * @param {any} new_value
     */
    function reset(new_value) {
        set(new_value)
    }

    return { subscribe, reset }

}

export  const is_draggable= set_draggable(true)