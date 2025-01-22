<script>
    import { draggable, dropzone } from '$lib/js/dnd';
    export let data;
    let per = 20;
</script>

<section class="main overflow-x-hidden bg-gray-50">
    <header class="text-gray-600 body-font absolute top-0 left-0 w-full">
        <div class=" mx-auto w-full flex flex-wrap p-5 items-center justify-between">
            <a href="/" class="flex title-font items-center text-gray-900 mb-4 md:mb-0 font-bold text-4xl"> Drags </a>
            <nav class=" hidden md:flex flex-wrap items-center text-base justify-center">
                <a href="/" class="mr-5 hover:text-gray-900">First Link</a>
                <a href="/" class="mr-5 hover:text-gray-900">Second Link</a>
            </nav>
        </div>
    </header>

    <section class=" my-[100px]">
        <div class="p-6 container m-auto">
            <h1 class=" capitalize font-bold text-4xl">E-commerce Project</h1>
            <div class="rounded-full h-2 w-1/2 border my-4 overflow-hidden">
                <span class={` bg-green-500 h-full block transition-all`} style={`width:${per}%`}></span>
            </div>
            <div><span>{per}%</span> <span>Completed</span></div>
        </div>
        <section class=" container m-auto py-4 overflow-x-scroll">
            <div class="flex gap-4 overflow-x-visible min-h-[60vh] px-4">
                {#each data.columns as cols}
                    {@const card = data.cards.filter((e) => e.column === cols.id)}
                    <span class=" hidden"
                        >{(per = Math.floor(
                            (data.cards.filter((e) => e.column === cols.id).length / data.cards.length) * 100,
                        ))}</span
                    >
                    <div
                        use:dropzone={{
                            /**
                             * @param {number} card_id
                             */
                            on_dropzone(card_id) {
                                const card = data.cards.find((c) => c.id == card_id);
                                //console.log(card?.column, cols.id, card_id);
                                //@ts-ignore
                                card.column = cols.id;
                                data = data;
                            },
                        }}
                        class="flex flex-col gap-2 p-3 min-w-[300px] h-fit pb-32 cols"
                    >
                        <div class={`mb-4 border-b pb-4 ${cols.bg} p-3 ${cols.text} rounded-md`}>
                            <div class="flex justify-between">
                                <h2 class=" font-bold capitalize">{cols.label}</h2>
                                <span>{card.length} tasks</span>
                            </div>
                            <p class=" font-extralight text-sm">{cols.details}</p>
                        </div>
                        {#if card.length > 0}
                            <div>
                                {#each card as cd}
                                    <div
                                        use:draggable={cd.id}
                                        class={`rounded-b-lg border-t-4 px-3 my-2 bg-white pb-3 can-drag lex flex-col ${cols.label === 'completed' && `${cols.bg} ${cols.text}`}`}
                                        style={`border-color:${cols.label === 'completed' ? `white` : cols.color}; background:${cols.label === 'completed' ? cols.color : ''}`}
                                    >
                                        <div>
                                            <h3
                                                class={`  w-fit px-4 py-1 rounded-b shadow-lg mb-3 ${cols.label === 'completed' ? `bg-white` : `${cols.text} ${cols.bg}`}`}
                                            >
                                                {cd.label}
                                            </h3>
                                            <p>{cd.details}</p>
                                        </div>

                                        <div class="flex gap-1 mt-8">
                                            {#each cd.assigned_to as users}
                                                <a href={`/${users.id}`}>
                                                    <img
                                                        src={users.avatar}
                                                        alt=""
                                                        class="rounded-full w-[30px] h-[30px]"
                                                    />
                                                </a>
                                            {/each}
                                        </div>
                                        <div class=" border-t flex justify-between pt-3 mt-3">
                                            <span>{cd.tags.length} tags</span>
                                            <span>{cd.expected_time}</span>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        {:else}
                            <div>No Cards..</div>
                        {/if}
                    </div>
                {/each}
            </div>
        </section>
    </section>
</section>

<!-- <div class=" fixed left-0 top-0 min-h-screen w-full">
    <button class="absolute w-full h-full bg-[#0000004d] backdrop-blur-sm"></button>
</div> -->
