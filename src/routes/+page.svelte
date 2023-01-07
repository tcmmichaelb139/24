<script lang="ts">
	import Game from '$lib/components/Game.svelte';
	import Solve from '$lib/components/Solve.svelte';
	import Toggle from '$lib/components/Interactive/Toggle.svelte';

	let solve: boolean = false;
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

<div class="page-wrapper">
	<div>
		<Toggle text="Solver" bind:toggled={solve} />
	</div>

	{#if solve}
		<Solve />
	{:else}
		<Game />
	{/if}
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

	.page-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
