<script>
  const data = [
    {
      subject: "Animal and Environmental Biology",
      questions: 300,
    },
    {
      subject: "Animal Biology and Environment",
      questions: 300,
    },
    {
      subject: "Anthropology (Biological)",
      questions: 300,
    },
    {
      subject: "Applied Biochemistry",
      questions: 300,
    },
    {
      subject: "Applied Biology",
      questions: 300,
    },
  ];
</script>

<section class="w-full flex flex-wrap justify-between gap-3">
  {#each data as _, i}
    <a href="/cbt/exam" id="me" class="h-[300px] md:w-[250px] w-full">
      <div
        class={`w-full h-full rounded-lg overflow-clip relative p-2`}
        style={`background-image:url(/book.png);background-repeat: no-repeat;background-size: 100px;background-position: bottom right;background-color: orange;`}
      >
        <h1 class="font-bold text-3xl text-neutral-50 text-start">
          {_.subject}
        </h1>

        <span class="absolute left-2 text-5xl font-bold bottom-2">39</span>
      </div>
    </a>
  {/each}
</section>
