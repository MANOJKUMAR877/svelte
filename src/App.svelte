<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />

<main>
  <Tabs on:tabChange={tabChange} {activeItem} {items} />
  {#if activeItem === "Current Polls"}
    <p>Hei poll</p>
  {:else if activeItem === "Add New Poll"}
    <p>new Poll</p>
  {/if}
</main>
<Footer />
