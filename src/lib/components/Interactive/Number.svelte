<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts">
	export let text: string;
	export let num: number;
</script>

<label class="toggle-label">
	<div class="text">{text}</div>
	<input type="number" bind:value={num} min="1" max="10" />
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
	input {
		background-color: var(--bg-color);
		border: none;
		border-radius: 1rem;
		box-shadow:
			inset 0.5px 0.5px rgba(0, 0, 0, 0.8),
			inset -2px -2px rgba(0, 0, 0, 0.8);
		color: var(--fg-color);
		font-size: 1rem;
		font-family: 'fira code';
		height: 2.5rem;
		outline: none;
		padding: 0 1rem;
	}

	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
</style>
