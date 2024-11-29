<script lang="ts">
	import { Confetti } from 'svelte-confetti';

	import { UpdateAll } from '$lib/functions/UpdateAll.svelte';
	import { CheckSolve } from '$lib/functions/CheckSolve.svelte';
	import { SplitEquation } from '$lib/functions/SplitEquation.svelte';

	const allowedOperations: string[] = ['+', '-', '*', '/', '(', ')'];

	const confettiDuration: number = 5000;
	const confettiColors: string[] = [
		'#a9b1d6',
		'#565f89',
		'#7aa2f7',
		'#7dcfff',
		'#bb9af7',
		'#ff9e64',
		'#9ece6a',
		'#73daca'
	]; // tokyonight colors

	let confettiTimes: number[] = $state([]);
	let timeout: ReturnType<typeof setTimeout>;

	let {
		randomNumbers = $bindable(),
		inputEquation = $bindable(),
		evaluatedEquation = $bindable(),
		givenUp = $bindable(false),
		goal = 24
	} = $props();

	function checkForm(event: Event) {
		event.preventDefault();
		let nums = SplitEquation(inputEquation, allowedOperations);
		let same: boolean = nums.length === randomNumbers.length;
		for (let i = 0; i < Math.min(nums.length, randomNumbers.length); i++)
			if (nums[i] !== randomNumbers[i]) same = false;

		if (same && CheckSolve(inputEquation) == goal.toString()) {
			confettiTimes.push(1);

			clearTimeout(timeout);

			timeout = setTimeout(() => {
				confettiTimes = [];
			}, confettiDuration);

			evaluatedEquation = 'Correct!';

			// inputEquation = '';
			// givenUp = false;
			// randomNumbers = UpdateAll(goal).slice(0);
		} else if (!same && evaluatedEquation == goal.toString()) {
			evaluatedEquation = 'Use All Numbers';
		}
	}
	function onClickReload() {
		inputEquation = '';
		givenUp = false;
		randomNumbers = UpdateAll(goal).slice(0);
	}

	function onClickGiveUp() {
		givenUp = true;
	}
</script>

<div>
	<form onsubmit={checkForm} class="form">
		<input type="text" bind:value={inputEquation} placeholder="Solution..." />
		<input type="submit" name="submit" bind:value={evaluatedEquation} />

		{#each confettiTimes as _}
			<div class="confetti">
				<Confetti
					x={[-5, 5]}
					y={[0, 0.1]}
					delay={[0, confettiDuration / 2]}
					fallDistance="75vh"
					amount={75}
					duration={confettiDuration / 2}
					colorArray={confettiColors}
				/>
			</div>
		{/each}
	</form>
</div>

<div class="reload-give-up-buttons">
	<button class="button reload" onclick={onClickReload}>Reload</button>
	<button class="button" onclick={onClickGiveUp}>Give Up</button>
</div>

<style>
	.form {
		display: flex;
		flex-direction: column;
		width: 26rem;
		margin-top: 1rem;
	}

	.form input {
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

	.form input::placeholder {
		color: var(--gray-color);
	}

	.form input[type='submit'] {
		box-shadow:
			inset 0.5px 0.5px rgba(0, 0, 0, 0.8),
			inset -3px -3px rgba(0, 0, 0, 0.8);
		margin-top: 1rem;
		color: var(--amber);
	}
	.form input[type='submit']:active {
		box-shadow:
			inset -0.5px -0.5px rgba(0, 0, 0, 0.8),
			inset 0.5px 0.5px rgba(0, 0, 0, 0.8);
	}

	.reload-give-up-buttons {
		display: flex;
	}

	.button {
		margin-top: 1rem;
		background-color: var(--bg-color);
		border: none;
		border-radius: 1rem;
		box-shadow:
			inset 0.5px 0.5px rgba(0, 0, 0, 0.8),
			inset -3px -3px rgba(0, 0, 0, 0.8);
		color: var(--sky);
		font-size: 2rem;
		font-family: 'fira code';
		height: 4rem;
		outline: none;
		padding: 0 1rem;
		width: 12.5rem;
	}
	.button:active {
		box-shadow:
			inset -0.5px -0.5px rgba(0, 0, 0, 0.8),
			inset 0.5px 0.5px rgba(0, 0, 0, 0.8);
	}

	.reload {
		margin-right: 1rem;
	}

	.confetti {
		position: fixed;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
	}
</style>
