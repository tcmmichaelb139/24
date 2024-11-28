<script lang="ts">
	import Toggle from '$lib/components/Interactive/Toggle.svelte';
	import Number from '$lib/components/Interactive/Number.svelte';

	export let solve: boolean = false;
	export let goal: number = 24;
</script>

<div class="wrapper">
	<div class="options-wrapper">
		<h1>Options</h1>
		<Toggle text="Solver" bind:toggled={solve} />
		<Number text="Goal" bind:num={goal} />
	</div>
	<div>
		<h1>What is this</h1>
		<p>
			The 24 game is an arithmetical puzzle in which the objective is to find a way to manipulate
			four integers so that the end result is 24.
		</p>
		<p>The allowed operations include +, -, *, and /. Parentheses can also be used.</p>

		<a href="https://en.wikipedia.org/wiki/24_Game" target="_blank" rel="noreferrer">
			More information
		</a>
		<p>Here, we expanded the goal number to not just be 24 but any number you want.</p>
		<a href="https://github.com/tcmmichaelb139/24" target="_blank" rel="noreferrer">
			Source code
		</a>
		<p>Theme: Tokyo Night</p>
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-rows: 1fr 2fr;
	}
	.options-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>
