import { readable } from "svelte/store";
import Input from "../../routes/formbuilder/components/inputs/input.svelte";
import Button from "../../routes/formbuilder/components/inputs/button.svelte";
import Dropdown from "../../routes/formbuilder/components/inputs/dropdown.svelte";
import Textarea from "../../routes/formbuilder/components/inputs/textarea.svelte";
import Switch from "../../routes/formbuilder/components/inputs/switch.svelte";
import Sections from "../../routes/formbuilder/components/sections/Sections.svelte";
import Text from "../../routes/formbuilder/components/texts/Text.svelte";
import Multiline from "../../routes/formbuilder/components/texts/Multiline.svelte";
import Small from "../../routes/formbuilder/components/texts/Small.svelte";
import Checkbox from "../../routes/formbuilder/components/inputs/checkbox.svelte";

export const components = readable({
    layouts: [
        {
            name: 'Sections',
            icon: 'fluent:poll-horizontal-16-regular',
            Component:Sections,
            state: {
                id: '',
                styles: {
                    display: 'flex',
                    justify_content: 'space-between',
                    border_radius: '',
                    border_width: '1px',
                    padding: '',
                    background_color: '#fcff00',
                    border_color: '',
                    color: '',
                    width: '100%',
                    min_height: '100px'
                }
            }
        },
    ],
    texts: [
        {
            name: 'Text',
            icon: 'mingcute:text-line',
            Component:Text,
            state: {
                id: 'none',
                component: '',
                value: 'Text',
                styles: {
                    border_width: '',
                    border_radius: '',
                    text_align: 'start',
                    font_size: '24px',
                    padding: '',
                    border_color: '',
                    background_color: '',
                    color: '',
                    margin:'5px'

                },
            }
        },
        {
            name: 'Multiline',
            icon: 'majesticons:text',
            Component:Multiline,
            state: {
                id: '',
                component: '',
                value: 'A Lot of texts and more',
                styles: {
                    border_width: '',
                    border_radius: '',
                    text_align: 'start',
                    padding: '',
                    border_color: '',
                    background_color: '',
                    color: '',
                    //text: 'center',
                     margin:'5px'
                },
            }
        }, {
            name: 'Label',
            icon: 'material-symbols:label-sharp',
            Component:Small,
            state: {
                id: '',
                component: '',
                value: 'Small text',
                styles: {
                    border_width: '',
                    border_radius: '',
                    padding: '',
                    text_align: 'start',
                    border_color: '',
                    background_color: '',
                    color: '',
                    font_size: '13px',
                    text: 'center',
                    margin:'5px'
                },
            }
        },
        // {
        //     name: 'multiline',
        //     icon: 'tabler:number-123',
        // },
    ],

    multi_element: [
        {
            name: 'switch',
            icon: 'iconoir:switch-on',
        },
        {
            name: 'dropdown',
            icon: 'radix-icons:dropdown-menu',
        },
        {
            name: 'checkbox',
            icon: "mingcute:checkbox-fill",
        },
        {
            name: 'checklist',
            icon: 'line-md:check-list-3',
        },
        // {
        //     name: 'profile',
        //     icon: 'carbon:user-profile-alt',
        // },
    ],
    others: [
        {
            name: 'pole',
            icon: 'fluent:poll-32-filled',
        },
        {
            name: 'Test',
            icon: 'healthicons:i-exam-multiple-choice-outline',
        },
    ],
    input: [
        {
            name: 'Button',
            icon: 'teenyicons:button-outline',
            Component:Button,
            state: {
                value: 'Button',
                type: 'submit',
                func: () => null,
                styles: {
                    border_width: '0px',
                    border_radius: '5px',
                    width: '200px',
                    padding: '10px',
                    background_color: '#020b24',
                    border_color: '#fcff00',
                    color: '#ffffff',
                    margin:'5px'
                },
            }
        },
        {
            name: 'Input',
            icon: 'streamline:input-box',
            Component:Input,
            state: {
                name: 'text',
                type: 'text',
                id: '',
                value: '',
                placeholder: 'Type Something',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: '#e3e3e3',
                    border_radius: '5px',
                    padding: '10px',
                    color: 'inherit',
                    width: 'auto',
                    margin:'5px'
                },
            }
        },
        {
            name: 'Phone',
            icon: 'streamline:input-box',
            Component:Input,
            state: {
                name: 'phone    ',
                type: 'tel',
                id: '',
                value: '',
                placeholder: '+432',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: '#e3e3e3',
                    border_radius: '5px',
                    padding: '10px',
                    color: 'inherit',
                    width: 'auto',
                    margin:'5px'
                },
            }
        },
        {
            name: 'Number',
            icon: 'tabler:number-123',
            Component:Input,
            state: {
                name: 'number',
                type: 'text',
                id: '',
                value: '',
                placeholder: '123',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: '#e3e3e3',
                    border_radius: '5px',
                    padding: '10px',
                    color: 'inherit',
                     width: 'auto',
                    margin:'5px'
                },
            }
        },
        {
            name: 'Switch',
            Component:Switch,
            icon: 'iconoir:switch-on',
            state: {
                name: 'switch',
                type: 'switch',
                id: '',
                value: '',
                styles: {

                },
            }
        },
        {
            name: 'Dropdown',
            icon: 'radix-icons:dropdown-menu',
            Component:Dropdown,
            state: {
                name: 'dropdown',
                type: 'text',
                id: '',
                value: '',
                placeholder: '123',
                required: true,
                props: {
                    options: ['Option 1', 'Option 2', 'Option 3'],
                    selected: 'Option 1',
                    label: 'Choose a value'
                  },
                styles: {
                    background_color: 'transparent',
                    border_width: '0px',
                    border_color: '#e3e3e3',
                    border_radius: '5px',
                    padding: '10px',
                    color: 'inherit',
                    width: 'auto',
                    margin:'5px'
                },
            }
        },
        {
            name: 'checkbox',
            icon: "mingcute:checkbox-fill",
            Component:Checkbox,
            state: {
                name: 'checkbox',
                type: 'checkbox',
                id: '',
                value: true,
                placeholder: 'Test',
                required: true,
                styles: {
                    background_color: '#ffffff00',
                    border_width: '0px',
                    border_color: '#fcff00',
                    border_radius: '5px',
                    padding: '10px',
                    color: 'inherit',
                    width: 'auto',
                    height: 'auto',
                    label:'Check Me Out'

                },
            }
        },
        // {
        //     name: 'checklist',
        //     icon: 'line-md:check-list-3',
        // },
        {
            name: 'Textarea',
            icon: 'bi:textarea-resize',
            Component:Textarea,
            state: {
                name: 'textarea',
                type: 'text',
                id: '',
                placeholder: 'Type Something',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: '#e3e3e3',
                    border_radius: '5px',
                    padding: '10px',
                    color: 'inherit',
                    margin:'5px'

                },
            }
        },
        {
            name: 'Date',
            icon: 'fluent-mdl2:date-time',
            Component:Input,
            state: {
                name: 'date',
                type: 'date',
                id: '',
                placeholder: 'Type Something',
                required: true,
                styles: {
                    background_color: 'transparent',
                    border_width: '2px',
                    border_color: '#e3e3e3',
                    border_radius: '10px',
                    padding: '10px',
                    color: 'inherit',
                     width: 'auto',
                    margin:'5px'

                },
            }
        },
        // {
        //     name: 'Date time',
        //     icon: 'fluent-mdl2:date-time',
        // //     state: {
        // label: 'Button',
        // type: 'submit',
        // func: () => null,
        // styles: {
        //     background_color: 'yellow',
        //     border_width: '2px',
        //     border_color: 'black',
        //     border_radius: '10px',
        //     padding: '10px',
        //     color: 'black',
        // },
        //     }
        // },
    ],
});



export const components_raw = [
    {
        name: 'sections',
        icon: 'fluent:poll-horizontal-16-regular',
    },
    {
        name: 'table',
        icon: 'mynaui:table',
    },
    {
        name: 'line text',
        icon: 'mingcute:text-line',
    },
    {
        name: 'multiline',
        icon: 'majesticons:text',
    },

    {
        name: 'switch',
        icon: 'iconoir:switch-on',
    },
    {
        name: 'dropdown',
        icon: 'radix-icons:dropdown-menu',
    },
    {
        name: 'checkbox',
        icon: '"mingcute:checkbox-fill',
    },
    {
        name: 'checklist',
        icon: 'line-md:check-list-3',
    },
    {
        name: 'profile',
        icon: 'carbon:user-profile-alt',
    },
    {
        name: 'pole',
        icon: 'fluent:poll-32-filled',
    },
    {
        name: 'Test',
        icon: 'healthicons:i-exam-multiple-choice-outline',
    },
    {
        name: 'button',
        icon: 'teenyicons:button-outline',
        component: Input,
    },
    {
        name: 'text',
        icon: 'streamline:input-box',
        component: Input,
    },
    {
        name: 'number',
        icon: 'tabler:number-123',
        component: Input,
    },
    {
        name: 'big text',
        icon: 'bi:textarea-resize',
        component: Input,
    },
    {
        name: 'date',
        icon: 'bi:calendar-date',
        component: Input,
    },
    {
        name: 'date time',
        icon: 'fluent-mdl2:date-time',
        component: Input,
    },
];