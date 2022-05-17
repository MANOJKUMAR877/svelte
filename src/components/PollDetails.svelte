<script>
	import Card from './../shared/Card.svelte';
    
  export let poll;
  $: totalVotes = poll.votesA + poll.votesB;
</script>
<Card>
<div class="poll">
  <h3>{poll.question}</h3>
  <p>Total Votes = {totalVotes}</p>
  <div class="answer">
    <div class="precent precent-a" />
    <span>{poll.answerA} ({poll.votesA})</span>
  </div>
  <div class="answer">
    <div class="precent precent-a" />
    <span>{poll.answerB} ({poll.votesB})</span>
  </div>
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
</style>
