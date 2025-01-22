<script>
  import Select from "./Select.svelte";
  let input_values = $state({
    select_value: "",
    options: ["Others", "Angular", "React", "Vue", "Svelte"],
  });
</script>

<div>
  <div class="flex gap-2 flex-wrap">
    <div class="rounded-lg shadow-md w-full border py-2">
      <label for="course"> Course Or Subject Title</label>
      <input
        name="course"
        class="bg-transparent outline-none p-2 w-full capitalize"
        placeholder="Enter course or subject title"
      />
    </div>
    <div class="rounded-lg shadow-md w-full border py-2">
      <label for="year">Enter Past Question year</label>
      <input
        class="bg-transparent outline-none p-2 w-full"
        name="year"
        type="number"
        min="1900"
        max="2099"
        step="1"
        value=""
        placeholder="Enter Year"
      />
    </div>
    <div class="rounded-lg shadow-md w-full border py-2">
      <label for="year">Select</label>
      <Select
        options={input_values.options}
        callBackFun={(/** @type {any} */ e) => {
          input_values.select_value = e;
          console.log(e);
        }}
        value={input_values.select_value}
      />
    </div>
  </div>
</div>
