<script>
  import New from "./New.svelte";
  import Button from "./Button.svelte";
  export let name = "";
  export const data = {
    name: "",
    age: "",
    sex: "",
  };
  
  const click = () => {
    alert("name hello");
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <New {...data} />
  <!-- <Button on:click={click} /> -->
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
