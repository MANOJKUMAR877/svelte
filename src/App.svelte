<script>
  import PollList from "./components/PollList.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };
</script>

<div class="all">
  <Header />
  <main>
    <Tabs on:tabChange={tabChange} {activeItem} {items} />
    {#if activeItem === "Current Polls"}
      <PollList />
    {:else if activeItem === "Add New Poll"}
      <CreatePollForm on:add={handleAdd} />
    {/if}
  </main>
  <Footer />
</div>

<style>
  .all {
    background: #e3dedb;
  }
</style>
