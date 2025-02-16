<script>
  let count = $state(0)
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


<p>count: {count}</p>
<button onclick={() => {
  count++
}}>Increment</button>

<div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

  <h1 class="text-2xl p-8 inline-block text-red-500 font-bold underline">
    Hello world!
  </h1>
  <p class="text-xl bg-amber-500 inline-block text-cyan-300 font-bold">On the right hand side</p>
</div>

<button class="rounded px-4 py-2 bg-teal-300 text-black hover:bg-red-500 active:bg-blue-500">This is button</button>

<style lang="postcss">
  @reference "tailwindcss/theme";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>