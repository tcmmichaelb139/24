<script lang="ts">
	import { evaluate } from 'mathjs';

	import { gen4RandomNumbers } from '../lib/functions/Gen4RandomNumber.svelte';
	import { splitEquation } from '../lib/functions/SplitEquation.svelte';
	import { solve24 } from '../lib/functions/Solve24.svelte';

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

	function UpdateAll() {
		let newRandomNumbers: number[] = [];
		let newSolutions: string[] = [];
		while (newRandomNumbers.length == 0 || newSolutions.length == 0) {
			newRandomNumbers = gen4RandomNumbers();
			newSolutions = solve24(newRandomNumbers);
		}
		randomNumbers = newRandomNumbers.slice(0);
	}

	UpdateAll();

	function checkForm(event: Event) {
		let nums = splitEquation(inputEquation, allowedOperations);
		let same: boolean = nums.length === randomNumbers.length;
		for (let i = 0; i < Math.min(nums.length, randomNumbers.length); i++)
			if (nums[i] !== randomNumbers[i]) same = false;

		if (same && evaluatedEquation == '24') {
			inputEquation = '';
			givenUp = false;
			alert('Congrats');
			UpdateAll();
		}
	}

	function onClickReload() {
		inputEquation = '';
		givenUp = false;
		UpdateAll();
	}

	function onClickGiveUp() {
		givenUp = true;
	}
</script>

<svelte:head>
	<title>24 Game</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="wrapper">
	<h1>24 Game</h1>

	<div class="grid-numbers">
		{#each randomNumbers as number}
			<div class="numbers">{number}</div>
		{/each}
	</div>

	<form on:submit|preventDefault={checkForm} class="form">
		<input type="text" bind:value={inputEquation} placeholder="Solution..." />
		<input type="submit" name="submit" bind:value={evaluatedEquation} />
	</form>

	<div class="reload-give-up-buttons">
		<button class="button reload" on:click={onClickReload}>Reload</button>
		<button class="button" on:click={onClickGiveUp}>Give Up</button>
	</div>

	<div class="solutions">
		{#if givenUp}
			{#each solutions as sol}
				<p>{sol}</p>
			{/each}
		{/if}
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
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}

	h1 {
		color: var(--emerald);
		margin: 0;
		font-size: 4.5vw;
	}

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
		background-color: var(--bg-alt-color);
		border-radius: 1vw;
		color: var(--blue);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 4vw;
		font-family: 'fira code';
	}

	.form {
		display: flex;
		flex-direction: column;
		width: 26vw;
		margin-top: 1vw;
	}

	.form input {
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

	.form input[type='submit'] {
		box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.2), 2px 2px 6px rgba(0, 0, 0, 0.8);
		margin-top: 1vw;
		color: var(--amber);
	}
	.form input[type='submit']:active {
		box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.2), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
	}

	.reload-give-up-buttons {
		display: flex;
	}

	.button {
		margin-top: 1vw;
		background-color: var(--bg-color);
		border: none;
		border-radius: 1vw;
		box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.2), 2px 2px 6px rgba(0, 0, 0, 0.8);
		color: var(--sky);
		font-size: 2vw;
		font-family: 'fira code';
		height: 4vw;
		outline: none;
		padding: 0 1vw;
		width: 12.5vw;
	}
	.button:active {
		box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.2), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
	}

	.reload {
		margin-right: 1vw;
	}

	.solutions {
		position: absolute;
	}
</style>
