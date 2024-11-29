<script lang="ts" context="module">
	import { gen4RandomNumbers } from '$lib/functions/Gen4RandomNumbers.svelte';
	import { solve24 } from '$lib/functions/Solve24.svelte';

	export function UpdateAll(goal: number) {
		if (goal === undefined) return [];
		let newRandomNumbers: number[] = [];
		let newSolutions: string[] = [];
		let runs = 100;
		while ((newRandomNumbers.length == 0 || newSolutions.length == 0) && runs > 0) {
			newRandomNumbers = gen4RandomNumbers();
			newSolutions = solve24(newRandomNumbers, goal);
			runs--;
		}
		if (newSolutions.length == 0) return [];
		return newRandomNumbers;
	}
</script>
