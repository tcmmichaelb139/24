<script lang="ts">
	import { solve24 } from '$lib/functions/Solve24.svelte';
	let num1: number = $state(1);
	let num2: number = $state(1);
	let num3: number = $state(1);
	let num4: number = $state(1);

	let { goal = 24 }: { goal: number } = $props();

	let solutions: string[] = $derived(solve24([num1, num2, num3, num4], goal));
</script>

<div class="wrapper">
	<div class="solve-wrapper">
		<h1>24 Game Solver</h1>

		<div>
			<input type="number" bind:value={num1} min="1" max="10" />
			<input type="number" bind:value={num2} min="1" max="10" />
			<input type="number" bind:value={num3} min="1" max="10" />
			<input type="number" bind:value={num4} min="1" max="10" />
		</div>

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
</div>

<style>
	input {
		background-color: var(--bg-color);
		border: none;
		border-radius: 1rem;
		box-shadow:
			inset 0.5px 0.5px rgba(0, 0, 0, 0.8),
			inset -3px -3px rgba(0, 0, 0, 0.8);
		color: var(--fg-color);
		font-size: 2rem;
		font-family: 'fira code';
		height: 4rem;
		outline: none;
		padding: 0 1rem;
	}

	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.solve-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
