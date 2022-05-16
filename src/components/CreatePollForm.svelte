<script>
  import Button from "./../shared/Button.svelte";

  let fields = { question: "", answerA: "", answerB: "" };
  const onSubmit = () => {
    console.log(fields);
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="form-field">
    <lable for="question">Poll Question:</lable>
    <input type="text" id="question" bind:value={fields.question} />
  </div>
  <div class="form-field">
    <lable for="answer-a">Answer A:</lable>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
  </div>
  <div class="form-field">
    <lable for="answer-b">Answer B:</lable>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
  </div>
  <Button  flat={true} >Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  lable {
    margin: 10px auto;
    text-align: left;
  }
</style>
