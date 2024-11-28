<script type="ts">
	export let text: string;
	export let toggled: boolean;
</script>

<label class="toggle-label">
	<div class="text">{text}</div>
	<div class="toggle-container">
		<input class="solve-or-game" type="checkbox" bind:checked={toggled} />
		<div class="toggle" />
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
		position: relative;
		height: 30px;
		width: 60px;
		border-radius: 15px;
		overflow: hidden;
		box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.2), 2px 2px 6px rgba(0, 0, 0, 0.8);
	}
	.toggle {
		height: 100%;
		width: 200%;
		background: var(--bg-color);
		border-radius: 20px;
		transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
		transform: translate3d(-75%, 0, 0);
		box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.2), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
	}
	.solve-or-game {
		display: none;
	}
	.solve-or-game:checked ~ .toggle {
		transform: translate3d(25%, 0, 0);
		background-color: var(--violet);
	}
</style>
