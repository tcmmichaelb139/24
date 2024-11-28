<script type="ts">
	export let randomNumbers: number[];
</script>

<div class="grid-numbers">
	{#if randomNumbers.length == 0}
		{#each ['-', '-', '-', '-'] as number}
			<div class="numbers">{number}</div>
		{/each}
	{:else}
		{#each randomNumbers as number}
			<div class="numbers">{number}</div>
		{/each}
	{/if}
</div>

<style>
	.grid-numbers {
		margin: auto;
		width: 26rem;
		height: 26rem;
		display: grid;
		grid-template-columns: calc(25rem / 2) calc(25rem / 2);
		grid-row: auto auto;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}
	.numbers {
		background-color: var(--bg-color);
		box-shadow: inset 0.5px 0.5px rgba(0, 0, 0, 0.8), inset -3px -3px rgba(0, 0, 0, 0.8);
		border-radius: 1rem;
		color: var(--blue);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		font-family: 'fira code';
	}
</style>
