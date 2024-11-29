<script lang="ts">
	import Game from '$lib/components/Game.svelte';
	import Solve from '$lib/components/Solve.svelte';
	import Options from '$lib/components/Options.svelte';

	let solve: boolean = $state(false);
	let goal: number = $state(24);
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
	<div class="game-wrapper">
		{#if solve}
			<Solve {goal} />
		{:else}
			<Game {goal} />
		{/if}
	</div>
	<div class="options-wrapper">
		<Options bind:solve bind:goal />
	</div>
</div>

<style>
	:root {
		/* tokyonight */
		--bg-color: #24283b;
		--bg-alt-color: #1a1b26;
		--fg-color: #a9b1d6;
		--gray-color: #565f89;
		--blue: #7aa2f7;
		--sky: #7dcfff;
		--violet: #bb9af7;
		--amber: #ff9e64;
		--lime: #9ece6a;
		--emerald: #73daca;
	}

	:global(body) {
		background-color: var(--bg-color);
		color: var(--fg-color);
		font-family: 'Fira Code';
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
	}

	:global(h1) {
		color: var(--emerald);
		margin: 0;
		font-size: 3.5rem;
	}

	:global(a) {
		color: var(--violet);
	}

	.page-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin: 0.5em 0;
	}

	.game-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem 0.5rem;
		width: 35rem;
	}

	.options-wrapper {
		padding: 1rem 0.5rem;
		width: 35rem;
	}
</style>
