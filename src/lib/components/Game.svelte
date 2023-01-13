<script lang="ts">
	import GridNumbers from '$lib/components/GameComponents/GridNumbers.svelte';
	import SubmitFrom from '$lib/components/GameComponents/SubmitFrom.svelte';
	import Solutions from '$lib/components/GameComponents/Solutions.svelte';

	import { UpdateAll } from '$lib/functions/UpdateAll.svelte';
	import { solve24 } from '$lib/functions/Solve24.svelte';
	import { CheckSolve } from '$lib/functions/CheckSolve.svelte';

	let randomNumbers: number[] = [];
	$: solutions = solve24(randomNumbers);
	let inputEquation: string = '';
	$: evaluatedEquation = CheckSolve(inputEquation);
	let givenUp = false;

	randomNumbers = UpdateAll().slice(0);
</script>

<div class="wrapper">
	<div class="game-wrapper">
		<h1>24 Game</h1>

		<GridNumbers bind:randomNumbers />

		<SubmitFrom bind:randomNumbers bind:inputEquation bind:evaluatedEquation bind:givenUp />
	</div>

	<div>
		<Solutions bind:givenUp bind:solutions />
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: flex-start;
		margin: 0 auto;
		width: 100%;
	}

	.game-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		width: 100%;
	}

	:global(h1) {
		color: var(--emerald);
		margin: 0;
		font-size: 4.5vw;
	}
</style>
