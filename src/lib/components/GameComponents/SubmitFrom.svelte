<script type="ts">
	import { UpdateAll } from '$lib/functions/UpdateAll.svelte';
	import { splitEquation } from '$lib/functions/SplitEquation.svelte';

	const allowedOperations: string[] = ['+', '-', '*', '/', '(', ')'];

	export let randomNumbers: number[];
	export let inputEquation: string;
	export let evaluatedEquation: string;
	export let givenUp = false;

	function checkForm(event: Event) {
		let nums = splitEquation(inputEquation, allowedOperations);
		let same: boolean = nums.length === randomNumbers.length;
		for (let i = 0; i < Math.min(nums.length, randomNumbers.length); i++)
			if (nums[i] !== randomNumbers[i]) same = false;

		if (same && evaluatedEquation == '24') {
			inputEquation = '';
			givenUp = false;
			alert('Congrats');
			randomNumbers = UpdateAll().slice(0);
		}
	}
	function onClickReload() {
		inputEquation = '';
		givenUp = false;
		randomNumbers = UpdateAll().slice(0);
	}

	function onClickGiveUp() {
		givenUp = true;
	}
</script>

<form on:submit|preventDefault={checkForm} class="form">
	<input type="text" bind:value={inputEquation} placeholder="Solution..." />
	<input type="submit" name="submit" bind:value={evaluatedEquation} />
</form>

<div class="reload-give-up-buttons">
	<button class="button reload" on:click={onClickReload}>Reload</button>
	<button class="button" on:click={onClickGiveUp}>Give Up</button>
</div>

<style>
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
</style>
