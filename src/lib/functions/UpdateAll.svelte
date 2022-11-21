<script type="ts" context="module">
	import { gen4RandomNumbers } from '$lib/functions/Gen4RandomNumbers.svelte';
	import { solve24 } from '$lib/functions/Solve24.svelte';

	export function UpdateAll() {
		let newRandomNumbers: number[] = [];
		let newSolutions: string[] = [];
		while (newRandomNumbers.length == 0 || newSolutions.length == 0) {
			newRandomNumbers = gen4RandomNumbers();
			newSolutions = solve24(newRandomNumbers);
		}
		return newRandomNumbers;
	}
</script>
