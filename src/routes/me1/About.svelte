
<script>
	import Blinker from './Blinker.svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);



  $effect(()=>{
    const h = document.getElementById('holder')
    
    ScrollTrigger.create({
      trigger:'#_me',
      start:'top top',
      pin:true,
      pinSpacing:true,
      end:()=>"+=2000vh",
      scrub:true,
      onUpdate:(self)=>{
       const progress = self.progress
       gsap.to('#scroll_h',{
         x:`${-360*progress}vw`,
       })
       gsap.to('#scroll_o',{
         x:`${-360*progress}vw`,
       })
      }
    })

    

  })


  const about = [
    {
      img:'/chad.jpg',
      details:'',
      bigt:'About Me?',
    },
   
    {
      img:'/hero/1.svg',
      details:'lorem lipsom the kisom ero banimi dagoban dunnla deriko minase dosentima jago ni paros sinataki managati vedemo nika noone',
      bigt:'Web Dev',
    },
    {
      img:'/chad.png',
      details:'lorem lipsom the kisom ero banimi dagoban dunnla deriko minase dosentima jago ni paros sinataki managati vedemo nika noone',
      bigt:'Mobile Dev',
    },
    {
      img:'/hero/1.svg',
      details:'lorem lipsom the kisom ero banimi dagoban dunnla deriko minase dosentima jago ni paros sinataki managati vedemo nika noone',
      bigt:'Game Dev',
    },
   
    {
      img:'/hero/1.svg',
      details:'lorem lipsom the kisom ero banimi dagoban dunnla deriko minase dosentima jago ni paros sinataki managati vedemo nika noone',
      bigt:'Graphic Design',
    },
    {
      img:'/hero/1.svg',
      details:'lorem lipsom the kisom ero banimi dagoban dunnla deriko minase dosentima jago ni paros sinataki managati vedemo nika noone',
      bigt:' ',
    },
   
    
  ]
</script>

<section id="_me" class="min-h-screen bg-[#0055d4] p-4  relative   about_ text-white">
    <div class="h-fit flex justify-end orbitron-900 text-start about absolute -top-3 right-[9.5vw] bg-neutral-800 px-4 py-3 text-white rounded-md">
      {#each 'ABOUT' as t}
        <div class="text-4xl" data-value={t}>{t}</div>
      {/each}
    </div>



   
   <div class="relative grid place-content-center h-screen w-full ">
     <div class="h-[80vh]  overflow-hidden  border w-full shadow-2xl " >
        <div  id='holder' class="min-h-screen transition-all w-full md:w-[80vw] flex flex-nowrap">
            <div class="flex flex-nowrap gap-3 backdrop-blur-3xl" id="scroll_h">
              {#each about as t, i}
              <div class="flex flex-col md:flex-row gap-10 justify-center h-screen items-center relative min-w-full md:min-w-[80vw]   " id={`trigger__`+i}>
                <span style="
                      line-height: 1;
                      -webkit-text-stroke: 2px white;
                      color: transparent;
                  " class="text-[20vw] absolute left-0 z-[-1]  text-gray-200 top-0 orbitron-900  bottom-0 right-0 m-auto">{t.bigt}</span>
                <div class="text-4xl relative z-[3] md:w-[34%]  md:my-auto  p-4 pb-0" >
                  <img src={t.img} alt="" class={"rounded-md w-full shadow-lg opacity-0"}/>
                </div>
                <div class=" z-[3] md:w-[40%] absolute right-0 w-full md:right-[5rem]" style={``}>
                  <h class="text-4rem font-bold md:text-[5rem] " style="line-height: 1;">{t.bigt}</h>
                  <p class="py-4 md:text-2xl">{t.details}</p>
                </div>
                <div class="glass absolute z-[0] ">
                  <img src={t.img} alt="" class={`${i==1&&'w-[30vw]'}  rounded-md w-ful`}/>
                </div>
              </div>
              {/each}
            </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 h-[100vh] grid place-content-center z-[-1]">
        <div class="flex flex-nowrap " id="scroll_o">
          {#each about as t, i}
          <div class="flex flex-col md:flex-row gap-10 justify-start h-screen items-center relative min-w-[80vw]" id={`trigger__`+i}>
            <span style="
                  line-height: 1;
              " class="text-[10vw] text-nowrap  z-[-1] text-gray-200  orbitron-900">{t.bigt}</span>
          
          </div>
          {/each}
        </div>
      </div>
    <div>


    <!-- <div class="relative flex ">
      <div class="min-h-screen w-[30%] grid place-content-center">
        
        {#each about as t}
          <span style="line-height: 1;" class="text-[16rem] absolute left-0 md:w-[20%] z-[1] text-gray-200 top-0">{t.bigt}</span>
          <div class="text-4xl relative z-[3] md:w-full md:my-auto backdrop-blur-sm p-4 h-screen grid place-content-center" >
            <img src={t.img} alt="" class="rounded-md w-full shadow-lg"/>
          </div>
          {/each}
        </div>
        <div class="min-h-screen w-[30%] grid place-content-center">
      {#each about as t}
        <div class="relative z-[3] md:w-[30%] h-screen grid place-content-center">
          <div>
            <h class="text-4rem font-bold text-[5rem] " style="line-height: 1;">{t.bigt}</h>
          <p class="py-4 text-2xl">{t.details}</p>
          </div>
        </div>
        {/each}
      </div>
      
    </div> -->

     
</section>


<style>
  .cust-shadow{
    box-shadow: 0px 11px 90px -30px #55e8ff96;
  }
  .bg__pointer{
    background-color:red
  }
</style>