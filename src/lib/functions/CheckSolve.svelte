<script lang="ts" context="module">
	import { all, create } from 'mathjs';

	// Keep intermediate divisions exact, so valid answers evaluate to the goal exactly.
	const math = create(all, { number: 'Fraction' });

	const allowedOperations: string[] = ['+', '-', '*', '/', '(', ')'];
	const allowedNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	export function CheckSolve(inputEquation: string) {
		if (inputEquation === '') return 'Check';

		let evaluatedEquation: string = '';
		try {
			let ok: boolean = true;
			for (let i = 0; i < inputEquation.length; i++)
				if (
					!allowedNumbers.includes(inputEquation[i]) &&
					!allowedOperations.includes(inputEquation[i])
				)
					ok = false;

			if (ok) {
				evaluatedEquation = math.number(math.evaluate(inputEquation)).toString();
			} else {
				evaluatedEquation = 'Failed To Parse';
			}
		} catch (error) {
			evaluatedEquation = '...';
		}
		return evaluatedEquation;
	}
</script>
