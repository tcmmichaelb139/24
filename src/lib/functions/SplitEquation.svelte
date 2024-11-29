<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts" context="module">
	export function splitEquation(eq: string, allowedOperations: string[]) {
		let prevInd = 0;
		let nums: number[] = [];
		for (let i = 0; i <= eq.length; i++) {
			if (i == eq.length || allowedOperations.includes(eq[i])) {
				if (i - prevInd === 0) {
					prevInd = i + 1;
				} else {
					nums.push(parseInt(eq.substring(prevInd, i)));
					prevInd = i + 1;
				}
			}
		}
		nums.sort((a, b) => a - b);
		return nums;
	}
</script>
