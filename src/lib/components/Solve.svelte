<script type="ts">
	import { solve24 } from '$lib/functions/Solve24.svelte';
	import Solutions from './GameComponents/Solutions.svelte';
	let num1: number = 1;
	let num2: number = 1;
	let num3: number = 1;
	let num4: number = 1;

	$: solutions = solve24([num1, num2, num3, num4]);
	$: console.log(solutions);
</script>

<div class="wrapper">
	<h1>24 Game Solver</h1>

	<input type="number" bind:value={num1} min="1" max="10" />
	<input type="number" bind:value={num2} min="1" max="10" />
	<input type="number" bind:value={num3} min="1" max="10" />
	<input type="number" bind:value={num4} min="1" max="10" />

	<div>
		{#if solutions.length > 0}
			{#each solutions as solution}
				<p>{solution}</p>
			{/each}
		{:else}
			<p>No solutions</p>
		{/if}
	</div>
</div>

<style>
	input {
		background-color: var(--bg-color);
		border: none;
		border-radius: 1vw;
		box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.2), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
		color: var(--fg-color);
		font-size: 2vw;
		font-family: 'fira code';
		height: 4vw;
		outline: none;
		padding: 0 1vw;
	}
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
</style>
