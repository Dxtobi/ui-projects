import { Renderer, Vec2, Vec4, Mesh, Geometry, Flowmap, Texture, Program } from "ogl";

import vertx from '$lib/shaders/vertext.glsl?raw'
import frag from '$lib/shaders/fragmentShaders.glsl?raw'



// async function loadShaders(url){

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.text();
//       } catch (e) {
//         console.error('Failed to load shader:', e);
//         return '';  // Return a default or error message if needed
//       }
// }
// // const vertx = loadShaders('/shaders/vertext.glsl')
// // const frag = loadShaders('/shaders/fragmentShaders.glsl')


const _size = [2000, 2500]



export function effect_shader(elem){

    const renderer =  new Renderer({dpr:2});
    const  gl = renderer.gl
    const canvas = document.createElement('canvas')

    elem.appendChild(canvas)
    elem.appendChild(gl.canvas)


    console.log(elem)


    let aspect = 1;
    let mouse =new Vec2(-1)
    let velocity =new Vec2()

    function resize(){
        const rect = elem.getBoundingClientRect();
        gl.canvas.width = rect.width * 2.0
        gl.canvas.height = rect.height * 2.0

        gl.canvas.style.width = `${rect.width}px`
        gl.canvas.style.height =`${rect.width}px`

        let aspectRatio = _size[0]/_size[1]
        let canvasAR =rect.width /rect.height

        let a1, a2
        if(canvasAR > aspectRatio){
            a1= aspectRatio/canvasAR
            a2=1.0
        }else{
            a1= 1.0
            a2= aspectRatio/canvasAR
        }

        mesh.program.uniforms.res.value = new Vec2(rect.width, rect.height, a1, a2)

        renderer.setSize(rect.width, rect.height)
        aspect  = rect.width/rect.height
    }


    const flow_map = new Flowmap(gl, {
        falloff:0.3,
        dissipation:0.92,
        alpha:0.5
    })

    const geometry = new Geometry(gl, {
        position:{
            size:2,
            data: new Float32Array([-1, -1, 3,-1,-1,])
        },
        uv:{
            size:2,
            data:new Float32Array([0,0,2,0,0,2])
        }
    })
    const texture =  new Texture(gl, {
        minFilter:gl.LINEAR,
        magFilter:gl.LINEAR
    })
    texture.image = elem.querySelector('img')//check for non -image

    const program = new Program(gl, {
        vertex:vertx,
        fragment:frag,
        uniforms:{
            uTime:{value:0},
            tWater:{value:texture},
            res:{
                value:new Vec4(window.innerWidth, window.innerHeight, 1,1)
            },

            tFlow:flow_map.uniform
        }
    })

    const mesh = new Mesh(gl, {geometry, program})

    window.addEventListener('resize', resize, false)
    resize()
}