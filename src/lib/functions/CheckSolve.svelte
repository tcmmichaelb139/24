<script lang="ts" context="module">
	import { evaluate } from 'mathjs';

	const allowedOperations: string[] = ['+', '-', '*', '/', '(', ')'];
	const allowedNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	export function CheckSolve(inputEquation: string) {
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
				evaluatedEquation = evaluate(inputEquation);
			} else {
				evaluatedEquation = 'Failed To Parse';
			}
			if (inputEquation === '') evaluatedEquation = 'Check';
		} catch (error) {
			evaluatedEquation = '...';
		}
		return evaluatedEquation;
	}
</script>
