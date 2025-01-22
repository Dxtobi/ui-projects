<script>
	import Fuga from './Fuga.svelte';
	import Project from './Project.svelte';
	import Loader from './Loader.svelte';
	import Blinker from './Blinker.svelte';
	import About from './About.svelte';
	// import Button from './../formbuilder/components/inputs/button.svelte';s
	import SideBar from './SideBar.svelte';
	import {effect_shader} from './shaders.js';

	import { fly } from 'svelte/transition';
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { move_on_scroll } from '$lib/js/move_on_scroll';
   
    let content 
    let scrollbar 
    let indicator 
 $effect(()=>{
    
    hypertexts('#_name')
    // hypertexts('.big-text')

    move_on_scroll('.text1-2', 'left');
    gsap.registerPlugin(ScrollTrigger);
    
    let tween = gsap.to(".text1-1", {
        xPercent: -100,
        repeat:-1,
        duration: 60,
        ease:"linear",
        scrub:true

    }).totalProgress(0.5)

    gsap.to(".big-text", {
        xPercent: -100,
        repeat:-1,
        duration: 30,
        ease:"linear",
        timeScale:-1
    })

   
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset>current_scroll){
            scroll_down =true
        }else{
            scroll_down =false

        }

        current_scroll = window.pageYOffset

        gsap.to(tween,{
            timeScale:scroll_down?1:-1
        })
    })

    
    
    setInterval(() => {
        startImageCycle()
    }, 5000);

    
 })

  $effect(() => {
      const sections = ['.project', '.about', '.contact'];
      const customShape = document.querySelector('#custom-shape');  
     
      ScrollTrigger.create({
        animation: gsap.from("#_name", {
          y: "50vh",
          scale: 8,
          yPercent: -50,
          zIndex:60
        }),
        scrub: true,
        trigger: ".content_",
        start: "top bottom",
        endTrigger: ".content_",
        end: "top center",
      });
      content = document.getElementById('scrollable-content');
      scrollbar = document.querySelector('.custom-scrollbar');
      indicator = document.querySelector('.scroll-indicator');

      

      content.addEventListener('scroll', updateIndicator);
      document.getElementById('__image', effect_shader);
      updateIndicator();
    });


   const hypertexts = (id)=>{
    const letters = "神様のものABCDEFGHIJKLMNOPQRSTU";

        let interval = null;

        document.querySelector(id).onmouseover = event => {  
        let iteration = 0;
        switched = !switched
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
            }
            
            iteration += 1 / 3;
            
        }, 30);
        }

       
   }

   function updateIndicator() {
    const contentWidth = content.scrollWidth;
    const containerWidth = content.clientWidth;
    const scrollPercent = content.scrollLeft / (contentWidth - containerWidth);
    indicator.style.width = `${scrollPercent * 100}%`;
    }

    function scrollLeft() {
    content.scrollBy({ left: -100, behavior: 'smooth' });
    }

    function scrollRight() {
    content.scrollBy({ left: 100, behavior: 'smooth' });
    }

   let current_scroll = $state(0)
   let switched = $state(false)
   let scroll_down=$state(true)
   let show_menu = $state(false)

    $inspect(switched)
    let images = ['/hero/1.svg', '/hero/2.svg', '/hero/3.svg', '/hero/4.svg', '/hero/5.svg'];
    let currentIndex = $state(0);

    let isAnimating = false;

  // Function to cycle through images only once
    function startImageCycle() {
        if (isAnimating) return; // Prevent restarting the animation on subsequent mouse enters
        isAnimating = true;

        let index = 0; // Start cycling from the first image
        const interval = setInterval(() => {
        currentIndex = index;
        index++;

        if (index >= images.length) {
            clearInterval(interval); // Stop the animation after one full cycle
            isAnimating = false; // Reset the animation state
        }
        }, 100); // Change image every 500ms
    }

   let songs = [
    {
      rank: '01',
      title: 'Bubble Pop',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image1.jpg',
    },
    
    {
      rank: '02',
      title: 'Love Me',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image2.jpg',
    },
    {
      rank: '03',
      title: 'Billy Cullum',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image3.jpg',
    },
    {
      rank: '04',
      title: 'Candy Bar Creep',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image4.jpg',
    },
    {
      rank: '05',
      title: 'Anew',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image5.jpg',
    },
    {
      rank: '02',
      title: 'Love Me',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image2.jpg',
    },
    {
      rank: '03',
      title: 'Billy Cullum',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image3.jpg',
    },
    {
      rank: '04',
      title: 'Candy Bar Creep',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image4.jpg',
    },
    {
      rank: '05',
      title: 'Anew',
      artist: 'Kim Hyun A',
      image: 'https://link-to-image5.jpg',
    }
  ];


  const function_mouse_hover=(e)=>{
    console.log(e)
    mouse_enter=e
  }

let mouse_enter = $state(0)
</script>



<!-- <Loader/> -->
<main  class=" bg-yellow-500 from-[#00398f] to-[#00398f] text-yellow-50 ">
  
  <section class=" bg-transparent w-screen h-screen overflow-x-hidden cont" id="com-hero">
    <section class="w-full overflow-hidden relative " >
      
      <div  class="whitespace-nowrap fixed  z-[101] left-0 right-0 top-10 m-auto w-fit orbitron-900  _name" id={`_name`} data-value={switched?"DXTOBI JOSEPH":"AKANBI JOSEPH"}>{switched?"DXTOBI JOSEPH":"AKANBI JOSEPH"}</div>
      
      <!-- <div class="absolute  bottom-0 left-0 right-0 top-0 m-auto w-[70%] h-[500px] z-1 flex justify-center items-center backdrop-blur-[20px]" ></div> -->
      
      
      
      
      <div id="text1" class="absolute md:bottom-6 bottom-16 -left-20 rotate-3 backdrop-blur-xl flex-nowrap flex z-[103]   h-fit py-10">
        <div  class="text1-1 whitespace-nowrap  md:text-[5rem] text-3xl orbitron-400 "><span class="">WEB DEVELOPER</span> - FRONTEND - BACKEND - MOBILE APP - </div>
        <div  class="text1-1  whitespace-nowrap text-3xl md:text-[5rem] orbitron-400">  {"  "}<span class="text-black">WEB DEVELOPER</span> - FRONTEND - BACKEND - MOBILE APP  </div> 
      </div> 
      <div id="text2" class="absolute bottom-0 top-0 m-auto  flex-nowrap flex    h-fit py-10 z-[0]">
        <div  class="text1-2 whitespace-nowrap  text-[35vw]  orbitron-400 " style={`text-stroke:2px white; -webkit-text-stroke:2px black; color:transparent`}><span class="">PORTFOLIO </div>
        </div>
        
        <Blinker/>
    </section>
    
  

    <button class="fixed top-10 right-10 flex flex-col gap-2 w-[50px] items-start z-[2001] orbitron-900" onclick={()=>{show_menu =  !show_menu}}>
        <span class={` w-full h-2 bg-neutral-100 transition-all ${show_menu?'rotate-45 translate-y-4':''}`} />
        <span class={` w-full h-2 bg-neutral-100 transition-all ${show_menu?'-rotate-45':' -translate-x-5'}`} />

    </button>
    <button class="fixed top-8 left-10 flex flex-col gap-2 w-[50px] items-start z-[2001] orbitron-900 text-3xl md:text-5xl" onclick={()=>{show_menu =  !show_menu}}>
        <span class="md:text-xl text-xs text-start w-full">TOBI</span>
        <span class="w-full text-start">神様</span>
    </button>
   
    {#if show_menu}

        <SideBar on_click={()=>{show_menu =  !show_menu}} />

    {/if}
    
</section>
<div class="content_">
   

  <Project/>
<About/>
<section class="min-h-screen bg-gradient-to-b to-neutral-800 from-neutral-950 text-yellow-50 p-4 md:p-16 contact_">
    <div class="h-full flex justify-center orbitron-900 text-center contact">
      {#each 'CONTACT' as t}
        <div class="text-4xl md:text-[10rem]" data-value={t}>{t}</div>
      {/each}
    </div>

    <div class="my-8">
      <Fuga header='Say what now' footer="BOOOM" class_="w-[300px] border-2 "></Fuga>
    </div>
    
</section>
</div>
</main>




  

  
  <style>
    .custom-shape {
      width: 300px;
      height: 300px;
      background-color: lightblue;
      clip-path: url(#custom-clip); /* Reference the clipPath ID */
    }
    .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
     .text-stroke {
    -webkit-text-stroke: 3px white;
    text-stroke: 3px white;
  }

 
  
    

  /* Custom scrollbar styles */




</style>