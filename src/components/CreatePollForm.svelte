<script>
  import { createEventDispatcher } from "svelte";

  import Button from "./../shared/Button.svelte";
  let dispatch = createEventDispatcher();
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;
  const onSubmit = () => {
    valid = true;

    if (fields.question.trim().length < 5) {
      valid: false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }
    if (fields.answerA.trim().length < 1) {
      valid: false;
      errors.answerA = "Answer A must be at least 1 character long";
    } else {
      errors.answerA = "";
    }
    if (fields.answerB.trim().length < 1) {
      valid: false;
      errors.answerB = "Answer B must be at least 1 character long";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      dispatch("add", poll);
    }
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="form-field">
    <lable for="question">Poll Question:</lable>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <lable for="answer-a">Answer A:</lable>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <lable for="answer-b">Answer B:</lable>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button flat={true}>Add Poll</Button>
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
  .error {
    color: #d91b42;
    font-weight: bold;
    font-size: 12px;
  }
</style>
