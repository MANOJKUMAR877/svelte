<script>
  import Card from "./../shared/Card.svelte";
  import { createEventDispatcher } from "svelte";
  export let poll;
  const dispatch = createEventDispatcher();
  $: totalVotes = poll.votesA + poll.votesB;
  $: precentA = Math.floor(100/totalVotes * poll.votesA)
  $: precentB = Math.floor(100/totalVotes * poll.votesB)
  const handleVote = (option, id) => {
    dispatch("vote", { option, id });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes = {totalVotes}</p>
    <div class="answer" on:click={handleVote("a", poll.id)}>
      <div class="precent precent-a" style="width: {precentA}%"/>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
  </div>
  <div class="answer" on:click={handleVote("b", poll.id)}>
    <div class="precent precent-b"  style="width: {precentB}%"/>
    <span>{poll.answerB} ({poll.votesB})</span>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: rgb(35, 32, 32);
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
    border-radius: 16px;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .precent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .precent-a {
    border-radius: 16px;
    border-left: 2px solid #c33552;
    background: rgba(217, 27, 66, 0.2);
  }
  .precent-b {
    border-radius: 16px;
    border-left: 2px solid #31924e;
    background: rgba(20, 104, 33, 0.2);
  }
</style>
