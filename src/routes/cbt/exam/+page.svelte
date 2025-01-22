<script>
  import questions from "../comps/quest.json";

  let currentQuestionIndex = 0;
  let userAnswers = Array(questions.length).fill(null);
  let score = 0;
  let hasSubmitted = false;

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
    }
  }

  /**
   * @param {string} option
   */
  function selectAnswer(option) {
    console.log(option);
    userAnswers[currentQuestionIndex] = option;
  }

  function submitQuiz() {
    score = userAnswers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correct_answer ? 1 : 0);
    }, 0);
    hasSubmitted = true;
  }

  function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = Array(questions.length).fill(null);
    score = 0;
    hasSubmitted = false;
  }
</script>

<section
  class="min-h-screen grid place-content-center p-4 w-full md:w-[60%] m-auto"
>
  {#if !hasSubmitted}
    <div>
      <h2 class="p-3 rounded-lg bg-neutral-900 text-neutral-50 my-4">
        {questions[currentQuestionIndex].subject}
      </h2>
      <div class="p-3 border rounded-lg">
        <p>{questions[currentQuestionIndex].question}</p>
      </div>
      <ul>
        {#each questions[currentQuestionIndex].options as option, i}
          <li class="rounded-lg p-4 border">
            <label>
              <input
                type="radio"
                name="option"
                value={option[0]}
                on:change={() => selectAnswer(option[0])}
                checked={userAnswers[currentQuestionIndex] === option[0]}
                class=" cursor-pointer"
              />
              {option}
            </label>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <button
        class=" bg-neutral-800 text-neutral-50 rounded-lg px-4 w-fit py-2"
        on:click={prevQuestion}
        disabled={currentQuestionIndex === 0}>Previous</button
      >
      <button
        on:click={nextQuestion}
        class=" bg-neutral-800 text-neutral-50 rounded-lg px-4 w-fit py-2"
        disabled={currentQuestionIndex === questions.length - 1}>Next</button
      >
      <button
        on:click={submitQuiz}
        class=" bg-neutral-800 text-neutral-50 rounded-lg px-4 w-fit py-2"
        >Submit</button
      >
    </div>
  {:else}
    <div>
      <h2>Your Score: {score} / {questions.length}</h2>
      <button on:click={resetQuiz}>Try Again</button>
    </div>
  {/if}
</section>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0.5rem 0;
  }
  button {
    margin: 0.5rem;
  }
</style>
