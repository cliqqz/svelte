<script>
	import counter from 'models/counter';
</script>

<style>
	h1 {
		color: purple;
	}
	button {
		padding: 6px 22px;
		background: #fff;
		border: solid 1px #ddd;
	}
</style>

<h1>⌘ Counting: {$counter}</h1>
<button on:click={() => counter.dispatch({type: 'decrement'})}>-1</button>
<button on:click={() => counter.dispatch({type: 'increment'})}>+1</button>