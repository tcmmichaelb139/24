<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts">
	export let text: string;
	export let toggled: boolean;
</script>

<label class="toggle-label">
	<div class="text">{text}</div>
	<div class="toggle-container">
		<input class="solve-or-game" type="checkbox" bind:checked={toggled} />
		<div class="toggle"></div>
	</div>
</label>

<style>
	.toggle-label {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		color: var(--violet);
		margin: 0.5rem 0;
	}
	.text {
		margin-right: 1rem;
		font-size: 1;
	}
	.toggle-container {
		background-color: var(--bg-alt-color);
		position: relative;
		height: 2rem;
		width: 4rem;
		border: 2px solid var(--bg-alt-color);
		border-radius: 2rem;
		overflow: hidden;
	}
	.toggle {
		height: 100%;
		width: 200%;
		background: var(--bg-color);
		border-radius: 20px;
		transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
		transform: translate3d(-75%, 0, 0);
	}
	.solve-or-game {
		display: none;
	}
	.solve-or-game:checked ~ .toggle {
		transform: translate3d(25%, 0, 0);
		background-color: var(--violet);
	}
</style>
