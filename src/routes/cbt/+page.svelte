<script>
  import { fly } from "svelte/transition";
  import Olevel from "./comps/Olevel.svelte";
  import Uni from "./comps/Uni.svelte";
  let type_test = $state(true);
  const fts = [
    {
      h: "Extensive Question Bank",
      t: "Access thousands of past questions from various subjects and exams, tailored for both university and O-level students.",
    },
    {
      h: "Realistic CBT Environment",
      t: `Experience a true-to-life exam
      setting with our computer-based testing system, designed to simulate the actual
      exam conditions.`,
    },
    {
      h: "Instant Feedback",
      t: `Receive immediate results and detailed explanations
      for each question, helping you understand your mistakes and learn from them.`,
    },

    {
      h: "Flexible Study Modes",
      t: `Choose between timed tests to simulate
      exam pressure or practice mode for a more relaxed learning experience.`,
    },
  ];
</script>
<section class="lg:px-60">
  
<section class="p-5">
  <section
    class="w-full items-start min-h-screen flex flex-col md:flex-row gap-2"
  >
    <div class="md:w-[60%] w-full h-full md:p-20">
      <h1
        class="text-5xl md:text-[4rem] flex items-center justify-start flex-wrap gap-2"
      >
        Welcome to <span class="flex items-center custom-text">
          Cheat <img src="/romance.png" alt="" /> Sheet</span
        >
      </h1>
      <h3
        class="text-3xl md:text-[2rem] flex items-start justify-start flex-wrap gap-2"
      >
        Your Ultimate Online Exam Preparation Tool
      </h3>
      <br />
      <p class=" text-xl">
        The premier online platform designed to help you
        ace your exams effortlessly. Whether you're a university student
        tackling complex subjects or an O-level student gearing up for critical
        exams, Cheat Sheet is here to support you every step of the way.
      </p>
      <br />
      <div class="w-fit">
        <a
          href="/cbt/exam"
          class="flex gap-3 items-center text-neutral-50 px-6 py-2 rounded-full bg-gradient-to-tr from-[#ffc126] to-[#ffac31]"
          >Get Started <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              ><path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
              /></svg
            >
          </span></a
        >
      </div>

      <!-- <div class="flex border-b w-full mb-4">
        <button
          class={`${type_test && "border-b-2 border-red-500"} w-full py-3`}
          onclick={() => (type_test = true)}>University student</button
        >
        <button
          class={`${!type_test && "border-b-2 border-red-500"} w-full py-3`}
          onclick={() => (type_test = false)}>Olevel student</button
        >
      </div>
      {#if type_test}
        <div in:fly={{ x: -100 }}>
          <Uni />
        </div>
      {:else}
        <div in:fly={{ x: -100 }}>
          <Olevel />
        </div>
      {/if} -->
    </div>
    <div class="md:w-1/2 w-full h-full relative pt-10">
      <div
        class="absolute hidden right-0 -top-10 z-10 md:-left-28 md:top-2 md:block bg-gradient-to-b text-white from-[#ffc126] to-[#ffac31] w-48 rounded-md shadow-xl shadow-[#ffad3157]"
      >
        <div class="bubble relative w-full p-5">
          We help you prepare for your exams at any level be it O'Level or
          Higher institution courses.
        </div>
      </div>

      <img src="/u.png" alt="" class="w-[400px] m-auto" />
      <img src="/thrill.png" alt="" class="absolute left-0 bottom-0" />
      <img src="/book.png" alt="" class="absolute right-10 top-6" />
    </div>
  </section>
</section>
<div class="p-5 md:px-24">
  <div class=" flex flex-col gap-8 md:flex-row-reverse h-full">
    <div class="w-full md:w-1/2">
      <h2 class=" font-bold text-4xl mb-4">About Us</h2>
      <p class="  ">
        At Cheat Sheet, we understand the challenges students face when
        preparing for exams. Our mission is to provide a comprehensive and
        user-friendly platform that transforms the way you study. With a vast
        repository of past questions and a unique CBT system, we offer you the
        tools you need to practice effectively and boost your confidence.
      </p>
      <p class="  mt-4">
        We also provide a platform were students can also sell their past
        questions. providing the questions are not already existing in our
        Database.
      </p>
      <a
        href="/"
        class="flex gap-3 items-center text-neutral-50 px-6 py-2 w-fit rounded-full bg-gradient-to-tr from-[#ffc126] to-[#ffac31]"
        >Get Started <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
            /></svg
          >
        </span></a
      >
    </div>
    <div
      class="w-full md:w-1/2 rounded-lg h-[500px] shadow-2xl shadow-yellow-400"
      style=" background-image: url(/bg3.png); background-size: cover;"
    ></div>
  </div>
</div>
<br />
<br />
<br />
<br />
<div class="p-5 md:px-24">
  <h2 class=" text-4xl font-bold">Features</h2>
  <ul>
    {#each fts as ft}
      <li
        class="p-4 rounded-lg md:rounded-full border flex md:flex-row flex-col gap-3 md:items-center my-2 bg-gradient-to-b from-[#ffc126] to-[#ffac31] w-fit"
      >
        <span
          class="w-10 h-10 rounded-full border grid place-content-center text-2xl bg-white"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            ><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
              ><g opacity="0.2"
                ><path
                  d="M12.206 5.848a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112"
                /><path
                  d="M12.206 16.152a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 0 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192"
                /><path
                  d="M16 11a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 16 11"
                /></g
              ><path
                d="M11.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"
              /><path
                d="M11.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 0 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"
              /><path
                d="M15.5 10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5"
              /></g
            ></svg
          ></span
        >
        <div>
          <strong>{ft.h}</strong>
          <p>{ft.t}</p>
        </div>
      </li>
    {/each}
  </ul>
</div>
<br />
<br />
<br />
<br />
<br />
<div class="p-5 md:px-24">
  <h2 class="text-4xl font-bold">How It Works</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <li>
      <span class="custom-text text-[3rem]">1{" "}</span><span
        class="font-bold text-[1.5rem]"
        >Sign Up:
      </span><br /> Create your free account in minutes and get instant access to
      our features.
    </li>
    <li>
      <span class="custom-text text-[3rem]">2 {" "}</span><span
        class="font-bold text-[1.5rem]"
        >Select Your Exam:
      </span><br /> Choose the specific exam you’re preparing for, whether it's university-level
      subjects or O-levels.
    </li>
    <li>
      <span class="custom-text text-[3rem]">3 {" "}</span><span
        class="font-bold text-[1.5rem]"
        >Start Practicing:
      </span><br /> Dive into our extensive library of past questions and start taking
      tests. Customize your tests based on topics, difficulty levels, and time limits.
    </li>
    <li>
      <span class="custom-text text-[3rem]">4 {" "}</span><span
        class="font-bold text-[1.5rem]"
        >Review and Improve:
      </span><br /> Analyze your performance with our detailed feedback and adjust
      your study strategy accordingly.
    </li>
  </ul>
</div>
<br />
<br />
<br />
<br />
<br />
<div class="p-5 md:px-24">
  <h2 class="text-4xl font-bold my-4">Who We Serve</h2>
  <ul class="text-start flex gap-4 flex-col md:flex-row">
    <li
      class=" flex flex-col justify-between min-h-[400px] w-full md:w-[30%] p-4 rounded-md shadow-2xl shadow-yellow-400"
      style=" background-image: url(/bg3.png); background-size: cover;"
    >
      <span class="font-bold text-4xl">University Students</span>
      <p>
        Prepare for your midterms, finals, and other crucial exams with a wide
        range of past questions from different faculties and courses.
      </p>
    </li>
    <li
      class=" flex flex-col justify-between min-h-[400px] w-full md:w-[30%] p-4 rounded-md shadow-2xl shadow-blue-400 text-white"
      style=" background-image: url(/bg1.png); background-size: cover;"
    >
      <span class="font-bold text-4xl">O-Level Students</span>
      <p>
        Get ready for your O-level exams with a comprehensive collection of past
        questions across various subjects, ensuring you cover all essential
        topics.
      </p>
    </li>
    <li
      class=" flex flex-col justify-between min-h-[400px] w-full md:w-[30%] p-4 rounded-md shadow-2xl shadow-neutral-600 text-white"
      style=" background-image: url(/bg2.png); background-size: cover;"
    >
      <span class="font-bold text-4xl">Every One</span>
      <p>
        If you are someone just looking for a platform to improve your self
        academically we are here for you.
      </p>
    </li>
  </ul>
</div>
<br />
<br />
<br />
<br />
<br />
<div class="p-5 md:px-24">
  <div class="flex flex-col md:flex-row gap-4 justify-between">
    <div class="md:w-[40%]">
      <h2 class=" text-3xl font-bold">Join the Cheat Sheet Community</h2>

      <p>
        Become part of a growing community of students who are transforming
        their exam preparation with Cheat Sheet. Share tips, ask questions, and
        collaborate with peers to enhance your learning experience.
      </p>
    </div>
    <div class="md:w-[40%]">
      <h2 class=" text-3xl font-bold">Get Started Today!</h2>

      <p>
        Sign up now and take the first step towards exam success. With Cheat
        Sheet, you're not just preparing for exams – you're mastering them..
      </p>
      <a
        href="/"
        class="flex gap-3 w-fit items-center text-neutral-50 px-6 py-2 rounded-full bg-gradient-to-tr from-[#ffc126] to-[#ffac31]"
        >Get Started <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
            /></svg
          >
        </span></a
      >
    </div>
  </div>
</div>
<br />
<br /><br />
<br />

</section>
<style>
  .bubble::before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: 0px;
    bottom: -20px;
    border: 12px solid;
    border-color: #ffac31 #ffac31 transparent transparent;
  }
</style>
