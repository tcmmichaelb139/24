<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts" context="module">
	let allSol: any[][][] = [];

	export function findAllSolutions(numbers: number[], goal: number) {
		if (goal === undefined) return [];
		allSol = [];
		solver(numbers, [false, false, false, false], [], 4, goal);
		return allSol;
	}

	function solver(numbers: number[], done: boolean[], ops: any[][], length: number, goal: number) {
		let numDone = 0;
		for (let i of done) if (i) numDone++;

		if (numDone === length - 1) {
			for (let i = 0; i < length; i++) {
				if (!done[i]) {
					if (numbers[i] === goal) {
						let incNeg: boolean = false;
						for (let a = 0; a < length - 1; a++) {
							if (numbers[ops[a][0]] < 0 || numbers[ops[a][1]] < 0) incNeg = true;
						}
						if (!allSol.includes(ops) && !incNeg) allSol.push(ops);
					}
				}
			}
		} else {
			for (let i = 0; i < length; i++) {
				for (let j = 0; j < length; j++) {
					if (i !== j && !done[i] && !done[j]) {
						let newNumbers: number[];
						let newDone: boolean[] = done.slice(0);
						newDone[j] = true;
						let newOps: any[][];

						if (i < j) {
							newNumbers = numbers.slice(0);
							newNumbers[i] = numbers[i] + numbers[j];
							newOps = ops.slice(0);
							newOps.push([i, j, '+']);
							solver(newNumbers, newDone, newOps, length, goal);

							newNumbers = numbers.slice(0);
							newNumbers[i] = numbers[i] * numbers[j];
							newOps = ops.slice(0);
							newOps.push([i, j, '*']);
							solver(newNumbers, newDone, newOps, length, goal);
						}
						newNumbers = numbers.slice(0);
						newNumbers[i] = numbers[i] - numbers[j];
						newOps = ops.slice(0);
						newOps.push([i, j, '-']);
						solver(newNumbers, newDone, newOps, length, goal);

						if (numbers[j] != 0) {
							newNumbers = numbers.slice(0);
							newNumbers[i] = numbers[i] / numbers[j];
							newOps = ops.slice(0);
							newOps.push([i, j, '/']);
							solver(newNumbers, newDone, newOps, length, goal);
						}
					}
				}
			}
		}
	}
</script>
