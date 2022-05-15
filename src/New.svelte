<script>
  export let data = {
    name: "",
    age: "",
    sex: "",
  };
  let arrayData = [];

  const submit = () => {
    arrayData.push(data);
    arrayData = [...arrayData];
    console.log(arrayData);
  };
 
</script>

<form on:submit|preventDefault={submit}>
  <input bind:value={data.name} placeholder="Enter your name" />
  <input bind:value={data.age} placeholder="Enter your age" />
  <input bind:value={data.sex} placeholder="Enter your sex" />
  <button>Submit</button>
</form>
{#each arrayData as array}
  <ul>
    <li>{array.name}</li>
  </ul>
{/each}
