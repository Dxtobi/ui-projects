<script>
	import Blinker from './Blinker.svelte';
	import About from './About.svelte';
	import Button from './../formbuilder/components/inputs/button.svelte';
	import SideBar from './SideBar.svelte';
	import {effect_shader} from './shaders.js';

	import { fly } from 'svelte/transition';
    import { gsap } from "gsap";
   
  
    
  $effect(() => {
        setInterval(() => {
            timer__()
        }, 500);

    });




const nums = '1234567890'
const xp = [10,20,30, 40, 50, 60, 70, 80, 90]
let translateY = $state(0)
let translateY2 = $state(90)

const timer__ = ()=>{
    if(translateY == 50)
    {
        
       return  
    }
    if(translateY == 50)
    {
        translateY2=0
         
    }

    translateY +=10
}

</script>

<div class={`${translateY ===50&& 'translate-y-[-200vh] opacity-0'} orbitron-900 w-screen h-screen fixed left-0 top-0 bg-black grid place-content-center z-[3000] transition-all`} id="loader" style="
    transition-duration: 3500ms;
    transition-timing-function: cubic-bezier(0.42, 0, 0, 1.04);
">
    <div>
        <div class=" text-yellow-500 flex">
            <div class=" w-40 h-40 overflow-hidden flex-col box-40  ">
               <div class=" h-[100rem] w-40  box-inner-100 translate-y-0 transition-all" style={`transform: translateY(-${translateY2}rem);`}>
                    {#each nums as n}
                        <span class={`text-[10rem] w-40 h-40 grid place-content-center inner-inner-40`}>{n}</span>
                    {/each}
               </div>
            </div> 

            <div class=" w-40 h-40 overflow-hidden flex-col box-40  ">
                <div class=" h-[100rem] w-40  box-inner-100 translate-y-0 transition-all" style={`transform: translateY(-${translateY}rem);`}>
                     {#each nums as n}
                         <span class={`text-[10rem] w-40 h-40 grid place-content-center inner-inner-40`}>{n}</span>
                     {/each}
                </div>
             </div> 
        </div>
    </div>
</div>

<style>

</style>