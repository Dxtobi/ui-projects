<script>
    import { move_on_scroll } from '$lib/js/move_on_scroll';
    import { tiltCard } from '../../lib/js/card_hover';

    $effect(() => {
        tiltCard('.tilt', { max: 20, perspective: 1000, scale: 1, speed: 150, easing: 'ease-in' });
        move_on_scroll('#banner_2');
    });
</script>

<section class="main overflow-x-hidden">
    <header class="text-gray-600 body-font absolute top-0 left-0 w-full">
        <div class="container mx-auto flex flex-wrap p-5 items-center">
            <a href="/" class="flex title-font items-center text-gray-900 mb-4 md:mb-0 font-bold text-4xl"> AGENCY </a>
            <nav class="md:ml-auto md:mr-auto hidden md:flex flex-wrap items-center text-base justify-center">
                <a href="/" class="mr-5 hover:text-gray-900">First Link</a>
                <a href="/" class="mr-5 hover:text-gray-900">Second Link</a>
                <a href="/" class="mr-5 hover:text-gray-900">Third Link</a>
                <a href="/" class="mr-5 hover:text-gray-900">Fourth Link</a>
            </nav>
        </div>
    </header>
    <section class="text-gray-600 body-font">
        <div class="container px-5 md:px-20 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div class="w-full sm:p-4 px-4 mb-6">
                    <h1 class="title-font font-medium text-5xl mb-2 text-gray-900">
                        Navigating the digital landscape for success
                    </h1>
                    <div class="leading-relaxed">
                        Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable
                        fingerstache kickstarter.
                    </div>
                    <button
                        class="w-fit py-3 px-6 bg-green-600 shadow-2xl hover:shadow-none text-white my-10 rounded-lg"
                        >Book a consultation</button
                    >
                </div>
            </div>
            <div class="lg:w-1/2 sm:w-1/3 w-full h-[60vh] rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img class="object-contain object-center w-full h-full tilt" src="/SVG/sit1.svg" alt="stats" />
            </div>
        </div>

        <div>
            <div class="w-[150%] flex gap-3 -translate-x-[20%]" id="banner_2">
                {#each [1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7] as tf}
                    <div
                        class="py-3 px-6 font-bold overflow-visible whitespace-nowrap text-3xl hover:scale-125 transition cursor-pointer"
                    >
                        Company <span>&oast;</span>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap md:px-20">
            <div class="flex gap-4 items-start md:items-center mb-10 flex-col md:flex-row">
                <h2 class="font-bold text-3xl bg-green-500 text-white px-6 rounded-lg">Services</h2>
                <p class="md:w-1/2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus libero cupiditate voluptatem
                    impedit soluta suscipit.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 w-full overflow-visible">
                {#each ['search engin optimization', 'social media marketing', 'E-mail marketing', 'Pay per click advertising'] as tf, i}
                    <div
                        class={`flex justify-between  hover:shadow-none rounded-3xl overflow-visible p-4 min-h-60 ${
                            i === 1 || i === 2 ? ' bg-gray-900 text-white' : 'border shadow-custom'
                        }`}
                    >
                        <div class="flex flex-col justify-between">
                            <h2 class="text-2xl font-bold capitalize">{tf}</h2>
                            <a href="/" class="flex items-center gap-2">
                                <span
                                    class="text-3xl bg-gray-800 text-white rounded-full w-10 h-10 grid place-content-center"
                                    >&nearr;</span
                                >
                                <span class="font-bold">Learn More</span>
                            </a>
                        </div>
                        <div class="w-20">
                            <img src="/SVG/sit2.svg" alt="" class="w-full" />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section class="grid place-content-center">
        <div
            class="container px-5 md:px-20 py-24 mx-auto flex flex-wrap bg-gray-200 rounded-xl justify-between w-full items-center"
        >
            <div class=" overflow-visible md:w-1/2 w-full">
                <h2 class="text-3xl md:text-5xl font-bold">Lets make thing happen</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui nobis veritatis est eos id
                    deserunt ullam a. Dignissimos, repellat.
                </p>
                <button class="w-fit py-3 px-6 bg-green-600 shadow-2xl hover:shadow-none text-white my-10 rounded-lg"
                    >Get your free proposal</button
                >
            </div>
            <div class=" overflow-visible">
                <img class="object-contain object-center w-full h-full tilt" src="/SVG/sit1.svg" alt="stats" />
            </div>
        </div>
    </section>
    <section class="grid place-content-center">
        <div
            class="container px-5 md:px-20 py-24 mx-auto flex flex-wrap rounded-xl justify-between w-full items-center"
        >
            <div class="flex gap-4 items-start md:items-center mb-10 flex-col md:flex-row">
                <h2 class="font-bold text-3xl bg-green-500 text-white px-6 rounded-lg">Case sturdy</h2>
                <p class="md:w-1/2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus libero cupiditate voluptatem
                    impedit soluta suscipit.
                </p>
            </div>
            <div
                class="bg-gray-800 text-white grid grid-cols-1 md:grid-cols-3 rounded-xl justify-between w-full items-center px-5 md:px-10 py-14"
            >
                {#each [1, 1, 1] as tf}
                    <div class="flex gap-4 flex-col">
                        <p class=" line-clamp-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quas ex illum quibusdam
                            maiores at voluptates laborum odio cumque similique, ducimus illo laboriosam! Odio tempore
                            aut repellat modi doloribus nulla!
                        </p>
                        <a href="/" class="flex gap-2 items-center"
                            ><span class="text-green-500">Learn more</span> <span>&nearr;</span>
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</section>

<style>
    .shadow-custom {
        box-shadow: 0px 5px 0px #000000;
        transition: 150ms;
    }

    .shadow-custom:hover {
        box-shadow: none;
    }
</style>
