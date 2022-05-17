<script>
	import PollList from './components/PollList.svelte';
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
  let polls = [
    {
      id: 1,
      question: "which is Object oriented programming Lang",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 10,
    },
  ];
  const handleAdd = (e) => {
    const poll = e.detail;
    polls=[poll,...polls]
    console.log(polls)
    activeItem= 'Current Polls'
  };
</script>
<div class="all">


<Header />
<main>
  <Tabs on:tabChange={tabChange} {activeItem} {items} />
  {#if activeItem === "Current Polls"}
  <PollList polls={polls}/>
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />
</div>

<style>
  .all{
    background: #e3dedb;
  }
</style>
