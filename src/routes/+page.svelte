<script lang="ts">
	import { evaluate } from 'mathjs';

	import GridNumbers from '$lib/components/GridNumbers.svelte';
	import SubmitFrom from '$lib/components/SubmitFrom.svelte';
	import Solutions from '$lib/components/Solutions.svelte';

	import { UpdateAll } from '$lib/functions/UpdateAll.svelte';
	import { solve24 } from '$lib/functions/Solve24.svelte';

	const allowedOperations: string[] = ['+', '-', '*', '/', '(', ')'];
	const allowedNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	let randomNumbers: number[] = [];
	$: solutions = solve24(randomNumbers);
	let inputEquation: string = '';
	let evaluatedEquation: string = '';
	$: {
		try {
			let ok: boolean = true;
			for (let i = 0; i < inputEquation.length; i++)
				if (
					!allowedNumbers.includes(inputEquation[i]) &&
					!allowedOperations.includes(inputEquation[i])
				)
					ok = false;

			if (ok) {
				evaluatedEquation = evaluate(inputEquation);
			} else {
				evaluatedEquation = 'Failed To Parse';
			}
			if (inputEquation === '') evaluatedEquation = 'Check';
		} catch (error) {
			evaluatedEquation = '...';
		}
	}
	let givenUp = false;

	randomNumbers = UpdateAll().slice(0);
</script>

<svelte:head>
	<title>24 Game</title>
	<meta
		name="description"
		content="24 Game is a game where you have to use the four numbers given to you to make the number 24."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="wrapper">
	<div />
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
	:root {
		--bg-color: #171717; /* tailwind neutral 900 */
		--bg-alt-color: #262626; /* tailwind neutral 800  */
		--fg-color: #a3a3a3; /* tailwind neutral 400 */
		--blue: #3b82f6; /* tailwind blue 500  */
		--sky: #0ea5e9; /* tailwind sky 500  */
		--violet: #8b5cf6; /* tailwind violet 500  */
		--amber: #f89e0b; /* tailwind amber 500 */
		--lime: #84cc16; /* tailwind lime 500  */
		--emerald: #10b981; /* tailwind emerald 500*/
	}

	:global(body) {
		background-color: var(--bg-color);
		color: var(--fg-color);
		font-family: 'Fira Code';
	}

	.wrapper {
		display: grid;
		grid-template-columns: 33% 34% 33%;
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
