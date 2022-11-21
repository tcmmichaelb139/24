<script type="ts">
	export let randomNumbers: number[];
</script>

<div class="grid-numbers">
	{#each randomNumbers as number}
		<div class="numbers">{number}</div>
	{/each}
</div>

<style>
	.grid-numbers {
		margin: auto;
		width: 26vw;
		height: 26vw;
		display: grid;
		grid-template-columns: calc(25vw / 2) calc(25vw / 2);
		grid-row: auto auto;
		grid-column-gap: 1vw;
		grid-row-gap: 1vw;
	}
	.numbers {
		background-color: var(--bg-color);
		box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.2), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
		border-radius: 1vw;
		color: var(--blue);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 4vw;
		font-family: 'fira code';
	}
</style>
