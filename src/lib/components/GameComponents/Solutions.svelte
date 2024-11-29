<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts">
	let { givenUp = false, solutions = [] } = $props();
</script>

<div class="solutions-wrapper">
	{#if givenUp}
		<h1>{solutions.length == 1 ? 'Solution' : 'Solutions'}</h1>
		<div class="solutions-grid">
			{#each solutions as sol}
				<div class="solution">
					{sol}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.solutions-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: start;
		width: 100%;
	}
	.solutions-grid {
		display: grid;
		grid-template-columns: auto auto;
	}
	.solution {
		font-size: 1rem;
	}
</style>
