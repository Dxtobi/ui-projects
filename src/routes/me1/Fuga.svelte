
<script>
    let {header, footer, class_} = $props()
</script>




<svg
   width="132.57536mm"
   height="93.633118mm"
   class={class_}
   viewBox="0 0 132.57536 93.633118"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <g
     id="layer1"
     transform="translate(-41.1918,-81.518468)">
    <path
       d="M 162.20576,96.699007 H 99.691073 c -4.21887,0 -7.615039,-3.396169 -7.615039,-7.615039 A 9.355669,9.355669 33.968685 0 0 81.103067,81.691331 H 53.964707 A 12.772906,12.772906 135 0 0 41.191801,94.464237 v 61.891413 a 18.795931,18.795931 45 0 0 18.795931,18.79593 H 162.11427 a 11.652903,11.652903 135 0 0 11.6529,-11.6529 l 0,-55.23827 A 11.561405,11.561405 45 0 0 162.20576,96.699007 Z"
       style="fill:none;fill-rule:evenodd;stroke-width:3.264583"
       id="path7" >
        <slot/>
    </path>
  </g>
</svg>