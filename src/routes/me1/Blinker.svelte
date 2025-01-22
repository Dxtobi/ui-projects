

<script>
	import About from './About.svelte';
	import Button from './../formbuilder/components/inputs/button.svelte';
	import SideBar from './SideBar.svelte';
	import {effect_shader} from './shaders.js';

	import { fly } from 'svelte/transition';
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
   
    let content 
    let scrollbar 
    let indicator 
 $effect(()=>{
    
   

    setInterval(() => {
        startImageCycle()
    }, 5000);

    
    setInterval(() => {
        startImageCycleH()
    }, 5000);
    
 })


    let images = ['/hero/1.svg', '/hero/2.svg', '/hero/3.svg', '/hero/2.svg', '/hero/1.svg'];
    let hands = ['/hands/1.svg', '/hands/2.svg', '/hands/3.svg', '/hands/4.svg', '/hands/5.svg', '/hands/6.svg', '/hands/7.svg', '/hands/8.svg','/hands/7.svg', '/hands/6.svg', '/hands/5.svg', '/hands/4.svg', '/hands/3.svg', '/hands/2.svg', '/hands/1.svg',];

    let currentIndex = $state(0);
    let currentIndexh = $state(0);


    let isAnimating = false;
    let isAnimatingh = false;


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

    function startImageCycleH() {
        if (isAnimatingh) return; // Prevent restarting the animation on subsequent mouse enters
        isAnimatingh = true;

        let index = 0; // Start cycling from the first image
        const interval = setInterval(() => {
        currentIndexh = index;
        index++;

        if (index >= hands.length) {
            clearInterval(interval); // Stop the animation after one full cycle
            isAnimatingh = false; // Reset the animation state
        }
        }, 600); // Change image every 500ms
    }

</script>


<div id="__image" class="absolute bottom-0 left-0 right-0 top-0 m-auto w-full h-[80vh]  flex justify-center items-center md:w-[50%] lg:w-[35%] grayscale hover:grayscale-0 transition-all " onmouseenter={startImageCycle}>
    <div class="relative w-full h-full">
     <img  src={images[currentIndex]} alt="Hover image" class="w-[100%] absolute bottom-0 left-0"/>
     <img  src={hands[currentIndexh]} alt="Hover image" class="w-[100%] absolute bottom-0 left-0 z-[102]"/>
    </div>
 </div>