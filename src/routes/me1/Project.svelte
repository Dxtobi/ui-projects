
<script>
	
import { tiltCard } from '../../lib/js/card_hover';

$effect(() => {
    // tiltCard('.tilt_active', { max: 20, perspective: 1000, scale: 1, speed: 150, easing: 'ease-in' });
   
});
let project = $state([
    {
        active:'red',
        bg:'/chad.jpg',
    },
    {
        active:'red',
        bg:'/chad.jpg',
    },
    {
        active:'green',
        bg:'/eye.jpg',

    },
    {
        active:'yellow',
        bg:'/avatars/av1.jpg',

    },
    {
        active:'orange',
        bg:'/avatars/av2.jpg',


    },
    {
        active:'black',
        bg:'/avatars/av3.jpg',

    },
    {
        active:'purple',
        bg:'/chad.jpg',

    },
])

const setActive =(i)=>{
    // let current = project[1]
    // let project_now = project[i]
    // project[i] = current;
    // project[1] = project_now
    active = i
    X= i*10 > 10 ?-i*10:i*10
    bg= project[i].bg
    txt= project[i].active

}
let active = $state(0)
let X = $state(20)
let bg =$state(null)
let txt =$state('PROJECT')

let active_pro = $state(3)


</script>


<section class="w-full min-h-screen  text-gray-100 flex justify-center items-center relative overflow-x-hidden  orbitron-900 " >

    <div class="absolute w-full h-full text-[30vw] uppercase text-[#d7a50a]">{txt}</div>

    <div class={`flex flex-nowrap w-[90vw] transition-all`} >

        {#each project as tf, i}

            <a href={`#${i}+pro`} id={i+'pro'} class={`${i==active_pro?'md:w-[600px] w-full min-h-[300px]  tilt_active':`md:w-[200px] ${i>active_pro?'tilt-side':'tilt-side_'}  scale-90 min-h-[100px]`}  min-h-[200px] border relative z-10  transition-all bg-gray-400`}  onclick={()=>active_pro = i}>
                <div class="flex gap-4 items-start w-full h-full">
                    
                </div>
            </a>

        {/each}
    </div>

</section>

<style>
    .tilt-side{
       transform: perspective(1000px) rotateX(-0.8deg) rotateY(-30.8406deg) scale3d(1, 1, 1) 
    }

    .tilt-side_{
       transform: perspective(1000px) rotateX(0.8deg) rotateY(30.8406deg) scale3d(1, 1, 1) 
    }
</style>