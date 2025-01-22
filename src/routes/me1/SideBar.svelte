<script>
	import { fly } from 'svelte/transition';

   $effect(()=>{
 
    hypertexts_multiple('.menu-text')
    
   })

   const hypertexts_multiple =(class__)=>{
    document.querySelectorAll(class__).forEach(element => {
        element.onmouseover=(event) => {  
        let iteration = 0;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let interval = null;
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
    });
   }

  let {on_click} =$props()
   
</script>




<button class="fixed w-screen h-screen backdrop-blur-xl bg-[#0000005e] left-0 top-0 z-[1001]" onclick={on_click} />
    <aside class=" backdrop-blur-3xl h-screen fixed right-0 top-0 z-[2000] w-full md:w-2/6 justify-center items-center text-white flex shadow-2xl" in:fly={{x:200}} out:fly={{x:100}}>
        <div class="flex flex-col gap-4 items-start w-full  orbitron-900">
            <a href={`#`} class="font-semibold text-[2rem] md:text-[4rem] menu-text w-full text-center" data-value="PROJECTS">PROJECTS</a>
            <a href={`#`} class="font-semibold text-[2rem] md:text-[4rem] menu-text text-center w-full" data-value="ABOUT ME">ABOUT ME</a>
            <a href={`#`} class="font-semibold text-[2rem] md:text-[4rem] menu-text text-center w-full" data-value="CONTACT">CONTACT</a>
            <a href={`#`} class="font-semibold text-[2rem] md:text-[4rem] menu-text text-center w-full" data-value="OTHERS">OTHERS</a>
        </div>
    </aside>