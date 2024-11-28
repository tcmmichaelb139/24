<script lang="ts">
	import GridNumbers from '$lib/components/GameComponents/GridNumbers.svelte';
	import SubmitFrom from '$lib/components/GameComponents/SubmitFrom.svelte';
	import Solutions from '$lib/components/GameComponents/Solutions.svelte';

	import { UpdateAll } from '$lib/functions/UpdateAll.svelte';
	import { solve24 } from '$lib/functions/Solve24.svelte';
	import { CheckSolve } from '$lib/functions/CheckSolve.svelte';

	export let goal: number;

	let randomNumbers: number[] = [];
	$: solutions = solve24(randomNumbers, goal);
	let inputEquation: string = '';
	$: evaluatedEquation = CheckSolve(inputEquation);
	let givenUp = false;

	randomNumbers = UpdateAll(goal).slice(0);
</script>

<div class="wrapper">
	<div class="game-wrapper">
		<h1>24 Game</h1>

		<GridNumbers bind:randomNumbers />

		<SubmitFrom
			bind:randomNumbers
			bind:inputEquation
			bind:evaluatedEquation
			bind:givenUp
			bind:goal
		/>
	</div>

	<div>
		<Solutions bind:givenUp bind:solutions />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.game-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
