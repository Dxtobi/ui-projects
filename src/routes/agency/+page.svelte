<script>
    import { move_on_scroll } from '$lib/js/move_on_scroll';
    import { tiltCard } from '../../lib/js/card_hover';

    $effect(() => {
        tiltCard('.tilt', { max: 20, perspective: 1000, scale: 1, speed: 150, easing: 'ease-in' });
        move_on_scroll('#banner_1', 'right');
        move_on_scroll('#banner_2');
    });


    const project_count = [
        {num:'+15', disc:'Evens'},
        {num:'+135', disc:'Music Videos'},
        {num:'+290', disc:'Evens'},
    ]
</script>

<section class="main overflow-x-hidden">
    <nav
        class="flex justify-between gap-2 md:w-full p-4 items-center w-full m-auto left-0 z-[10000] absolute top-0 backdrop-blur-3xl bg-purple-800"
    >
        <a href="#back_to_top" class="  text-gray-100 font-bold text-3xl">
            DTD<span class="text-gray-250 font-thin">Media</span>
        </a>
        <div class=" gap-4 hidden md:flex">
            <a href="#service" class=" text-gray-200"> Services </a>
            <a href="#service" class=" text-gray-200"> About Us </a>
            <a href="#service" class=" text-gray-200"> Contact </a>
        </div>
        <div class="flex gap-4">
            <span class="w-5 h-5 rounded-lg bg-white"></span>
            <span class="w-5 h-5 rounded-lg bg-white"></span>
            <span class="w-5 h-5 rounded-lg bg-white"></span>
            <span class="w-5 h-5 rounded-lg bg-white"></span>
        </div>
    </nav>
    <!-- HERO SECTION -->
    <section
        class=" justify-center p-4 md:px-[10rem] flex flex-col items-center mt-10 md:py-32 h-fit bg-left-bottom bg-gradient-to-tl to-purple-500 from-purple-900 text-white gap-4 overflow-visible"
    >
        <div class="relative overflow-visible flex-col flex items-center justify-center h-fit w-full">
            <div class="flex flex-col md:flex-row items-center justify-start gap-3 w-full">
                <div class=" w-[30%] hidden">
                    <h2 class="font-bold text-5xl w-full">3,500+</h2>
                    <p class="text-2xl font-thin w-full">Satisfied clients.</p>
                </div>
                <h2
                    class=" overflow-visible transition font-bold text-[4rem] md:text-[9rem] lg:text-[10rem] text-center text-balance line_hight hover:-rotate-6"
                >
                    <span class="">THE DEE</span>
                </h2>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-start gap-3 w-full">
                <div class=" w-[30%] hidden">
                    <p class="text-2xl font-thin text-wrap w-full">
                        Satisfied clients. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia!
                    </p>
                </div>
                <h2
                    class="font-bold text-[5rem] md:text-[9rem] lg:text-[10rem] text-center text-balance line_hight hover:-rotate-6 transition"
                >
                    CREATIVE
                </h2>
                <div class="flex overflow-visible rounded-full p-2 w-fit h-fit">
                    <img
                        src="/SVG/sit1.svg"
                        alt=""
                        class=" rounded-full w-20 h-20 bg-white border-4 border-purple-600 -mr-3 shadow-2xl relative transition hover:scale-150 hover:z-10"
                    /><img
                        src="/tobi.svg"
                        alt=""
                        class=" rounded-full w-20 h-20 bg-white -ml-3 border-4 border-purple-600 shadow-2xl relative transition hover:scale-150 hover:z-10"
                    /><img
                        src="/boyx.svg"
                        alt=""
                        class=" rounded-full w-20 h-20 bg-white -ml-3 border-4 border-purple-600 shadow-2xl relative transition hover:scale-150 hover:z-10"
                    />
                </div>
            </div>
        </div>
        <div class="flex gap-4 w-full md:w-[100%] mx-auto flex-col justify-between md:flex-row overflow-visible ">
            <div
                class="w-full md:w-1/2 rounded-2xl bg-gray-800 flex justify-center items-center h-[200px] shadow-lg tilt"
            >
                <h2 class="text-5xl -rotate-12">CREATIVE</h2>
            </div>
              <div
                class="w-full md:w-1/2 rounded-2xl bg-gray-800 flex justify-center items-center h-[200px] shadow-lg tilt"
            >
                <h2 class="text-5xl -rotate-12">CREATIVE</h2>
            </div>
              <div
                class="w-full md:w-1/2 rounded-2xl bg-gray-800 flex justify-center items-center h-[200px] shadow-lg tilt"
            >
                <h2 class="text-5xl -rotate-12">CREATIVE</h2>
            </div>
            <div
                class="w-full md:w-1/2 rounded-2xl bg-purple-800 flex justify-center items-center shadow-lg h-[200px] tilt"
            >
                <h2 class="text-5xl rotate-12">AGENTS</h2>
            </div>
            <div
                class="w-full md:w-1/2 rounded-2xl bg-purple-800 flex justify-center items-center shadow-lg h-[200px] tilt"
            >
                <h2 class="text-5xl rotate-12">AGENTS</h2>
            </div>
        </div>
    </section>
    <!-- SCROLL BANNER AND ABOUT US SECTION -->
    <section class=" overflow-visible">
        <div
            class="flex gap-2 flex-inline py-3 bg-yellow-100 -rotate-3 w-[150vw] origin-[20%] -translate-x-[10%] shadow-2xl"
        >
            <div class="flex-inline flex banner" id="banner_1">
                {#each ['SEO', 'WEB DEVELOPMENT', 'BRANDING', 'WEB DESIGN', 'SEO', 'WEB DEVELOPMENT', 'BRANDING', 'WEB DESIGN', 'SEO', 'WEB DEVELOPMENT', 'BRANDING', 'WEB DESIGN'] as tips}
                    <div class="font-bold text-[5rem] text-gray-800">
                        {tips} <span class="text-purple-600">&star;</span>
                    </div>
                {/each}
            </div>
        </div>
        <div
            class="flex gap-2 py-3 bg-yellow-100 flex-inline rotate-6 w-[150vw] origin-[50%] -translate-x-[10%] shadow-lg"
        >
            <div class="flex flex-inline banner" id="banner_2">
                {#each ['SEO', 'WEB DEVELOPMENT', 'BRANDING', 'WEB DESIGN', 'SEO', 'WEB DEVELOPMENT', 'BRANDING', 'WEB DESIGN', 'SEO', 'WEB DEVELOPMENT', 'BRANDING', 'WEB DESIGN'] as tips}
                    <div class="font-bold text-[5rem] text-gray-800">
                        {tips} <span class="text-purple-600">&star;</span>
                    </div>
                {/each}
            </div>
        </div>
        <section id="about_us" class="p-4 md:px-[10rem]">
            <div
                class="w-full flex md:gap-3 md:justify-between md:items-center items-start flex-col md:flex-row gap-2 line_hight"
            >
                <h1 class="font-bold text-[5rem]">ABOUT US</h1>
                <div class=" h-1 w-10 bg-gray-500"></div>
                <p class=" text-wrap md:w-[30%] relative z-10">
                    At DDT-MEDIA, we transform moments into unforgettable stories. Our expert videography team crafts cinematic experiences that resonate, whether it’s your dream wedding, a bold brand campaign, or a personal milestone.  

                </p>
            </div>
            <div class="w-full flex md:gap-3 md:justify-between items-start flex-col md:flex-row gap-2 line_hight mt-4">
                <div class="w-full md:w-[60%] h-80 grid place-content-center bg-gray-800 rounded-md">
                    <span class="w-16 h-16 rounded-full border text-white grid place-content-center font-bold text-5xl"
                        >&vartriangleright;</span
                    >
                </div>
                <div class="md:w-[40%] w-full">
                    {#each project_count as num}
                        <div class="flex justify-start gap-2 rounded-md bg-gray-300 w-full mb-2 py-2 items-center px-2">
                            <h2 class="font-bold text-5xl">{num.num}</h2>
                            <p>{num.disc}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </section>
    </section>

    <section
        class=" overflow-visible p-4 md:px-[10rem] text-white bg-left-bottom bg-gradient-to-br to-purple-500 from-purple-900 py-32"
    >
        <div class="flex md:items-center items-start md:gap-3 md:flex-row flex-col gap-2 justify-between">
            <h1 class="">OUR SERVICES</h1>
            <a
                href="#about-us"
                class="font-thine text-2xl py-2 px-4 rounded-full border flex items-center gap-3 w-fit mb-10 md:mb-0"
            >
                <span> Discover more</span> <span class="font-bold text-4xl">&nearr;</span>
            </a>
        </div>

        <div class="w-full flex flex-col gap-4 items-center">
            {#each [' Vidiography', ' Photography', ' Motion Graphics', ' Cinematography'] as tmp}
                <a
                    href="/"
                    class="rounded-full capitalize flex justify-between items-center py-4 px-6 md:p-6 font-bold md:text-5xl text-2xl hover:bg-white hover:text-purple-800 w-full bg-[#ffffff51]"
                >
                    <span>{tmp}</span><span class="rounded-full w-20 h-20 grid place-content-center border shadow-lg"
                        >&nearr;</span
                    >
                </a>
            {/each}
        </div>
    </section>

    <section
        class=" overflow-visible p-4 md:px-[10rem] text-white bg-gradient-to-tl to-gray-600 from-gray-900 py-32 w-full"
    >
        <div class="flex md:items-end items-start gap-3 w-full md:gap-3 md:flex-row flex-col justify-between">
            <div class="md:w-[60%] w-full overflow-visible">
                <h1 class="">OUR PROJECT</h1>
                <br />
                <div class="flex gap-2 md:gap-3 md:flex-row flex-col">
                    <a
                        href="#about-us"
                        class="font-thine text-2xl py-2 px-6 rounded-full bg-left-bottom bg-gradient-to-tl to-purple-500 from-purple-900 text-white flex items-center gap-3 text-nowrap"
                    >
                        <span> Music Videos</span>
                    </a>
                    <a
                        href="#about-us"
                        class="font-thine text-2xl py-2 px-6 rounded-full border flex items-center gap-3 text-nowrap"
                    >
                        <span>Events</span>
                    </a>
                    <a
                        href="#about-us"
                        class="font-thine text-2xl py-2 px-6 rounded-full border flex items-center gap-3 text-nowrap"
                    >
                        <span>Branding / Ads</span>
                    </a>
                </div>
            </div>
            <div class="md:w-[40%] w-full overflow-visible mb-10 md:mb-0">
                <p class=" text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates similique magni
                    beatae nemo aliquam quidem sapiente ad, neque corporis?
                </p>
                <br />
                <a
                    href="#about-us"
                    class="font-thine text-2xl py-2 px-4 rounded-full border flex items-center gap-3 w-fit"
                >
                    <span> Discover more</span> <span class="font-bold text-4xl">&nearr;</span>
                </a>
            </div>
        </div>
        <br />
        <div class="w-full grid grid-col-1 md:grid-cols-2 gap-2">
            {#each ['branding & identity', 'web development', 'ui/ux design', 'consulting & training'] as tmp}
                <a href="/" class="rounded-lg w-full h-60">
                    <img
                        src="/favicon.png"
                        alt=""
                        class="w-full h-full bg-slate-500 rounded-lg object-cover hover:object-contain transition"
                    />
                </a>
            {/each}
        </div>
    </section>

    <section
        class=" overflow-visible p-4 md:px-[10rem] text-white bg-gradient-to-tl from-gray-600 to-gray-900 py-32 w-full"
    >
        <div class="flex md:items-center items-start md:gap-3 md:flex-row flex-col gap-2 justify-between">
            <h1 class="">TESTIMONIALS</h1>
            <a
                href="#about-us"
                class="font-thine text-2xl py-2 px-4 rounded-full border flex items-center gap-3 mb-10 md:mb-0"
            >
                <span> Discover more</span> <span class="font-bold text-4xl">&nearr;</span>
            </a>
        </div>

        <div class="w-full grid grid-col-1 md:grid-cols-2 gap-2">
            {#each ['branding & identity', 'web development', 'ui/ux design', 'consulting & training'] as tmp}
                <div
                    class="transition rounded-3xl w-full h-full flex flex-col gap-4 justify-center items-center p-8 border hover:bg-purple-600 hover:border-purple-600"
                >
                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis adipisci suscipit tempora
                        impedit tenetur sapiente. Earum corporis repellendus deserunt, esse sed maxime, possimus, eaque
                        saepe quidem culpa doloremque commodi.
                    </p>
                    <div class="flex gap-2 justify-start items-start">
                        <img src="/SVG/sit1.svg" alt="" class="w-10 h-10 rounded-full bg-white" />
                        <div class="line_hight">
                            <h2 class="font-bold text-2xl">Marketing Jonny</h2>
                            <p>Starbucks</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>


    <!-- FOOTER -->
    <section class="p-4 md:px-[10rem] py-32 bg-gradient-to-br to-purple-400 from-purple-900 text-white relative">
        <h1>
            READY TO GROW<span class="text-purple-900">?</span>
        </h1>
        <p class="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sapiente eaque beatae ratione qui
            aspernatur, eos vero ipsam repudiandae quidem eligendi, quisquam, cum magni veritatis repellendus ipsa in
            earum tempora!
        </p>
        <form class="my-16" id="contact">
            <div class="border-b flex gap-4 justify-between p-4">
                <input placeholder="ingo@email.com" class=" bg-transparent w-full" />
                <button class="rounded-full px-6 py-2 bg-white text-gray-800 whitespace-nowrap"
                    >Contact us <span class="">&nearr;</span></button
                >
            </div>
        </form>

        <nav
            class="flex justify-between md:flex-row flex-col gap-2 md:w-full p-10 w-10/12 m-auto left-0 z-[10000] absolute bottom-0"
        >
            <a href="#back_to_top" class="  text-gray-100 font-bold text-3xl">
                Dammy <span class="text-gray-250 font-thin">Dee Media</span>
            </a>
            <div class="flex gap-4">
                <a href="#service" class=" text-gray-200"> Services </a>
                <a href="#service" class=" text-gray-200"> About Us </a>
                <a href="#service" class=" text-gray-200"> Contact </a>
            </div>
            <div class="flex gap-4">
                <span class="w-5 h-5 rounded-lg bg-white"></span>
                <span class="w-5 h-5 rounded-lg bg-white"></span>
                <span class="w-5 h-5 rounded-lg bg-white"></span>
                <span class="w-5 h-5 rounded-lg bg-white"></span>
            </div>
        </nav>
    </section>
</section>

<style>
    * {
        transition: 150ms;
    }
    .line_hight {
        line-height: 1;
    }
    .flex-inline {
        inline-size: max-content;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 900;
        line-height: 1;
        margin-bottom: 1rem;
    }

    .tilt {
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }

    .tilt h2:hover {
        transform: translateZ(5000);
    }

    .banner {
        transition: transform 1.5s ease-out;
    }
    @media (min-width: 768px) {
        h1 {
            font-size: 5rem;
        }
    }
</style>
