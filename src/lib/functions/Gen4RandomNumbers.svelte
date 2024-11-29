<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts" context="module">
	export function gen4RandomNumbers() {
		let numbers: number[] = [];
		for (let i = 0; i < 4; i++) {
			numbers.push((Math.random() * 10 + 1) | 0);
		}
		numbers.sort((a, b) => a - b);
		return numbers;
	}
</script>
