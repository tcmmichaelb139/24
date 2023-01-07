<script type="ts" context="module">
	import { number } from 'mathjs';
	import { findAllSolutions } from './Solver.svelte';

	let allSol: any[][][] = [];

	export function solve24(numbers: number[]) {
		for (let i in numbers) if (i == null) return [];
		allSol = findAllSolutions(numbers);
		let solutions: string[] = [];
		for (let solution of allSol) {
			let solSteps: string[] = numbers.map((num) => {
				return num.toString();
			});

			for (let op of solution) {
				if (op[2] == '+' || op[2] == '*')
					if (solSteps[op[0]].length > solSteps[op[1]].length)
						[solSteps[op[0]], solSteps[op[1]]] = [solSteps[op[1]], solSteps[op[0]]];

				let leftSide: string = firstArithmeticOp(solSteps[op[0]]);
				let rightSide: string = firstArithmeticOp(solSteps[op[1]]);

				if (plusOrMinus(leftSide) && !plusOrMinus(rightSide) && !plusOrMinus(op[2]))
					solSteps[op[0]] = parenWrap(solSteps[op[0]]) + op[2] + solSteps[op[1]];
				else if (
					(!plusOrMinus(leftSide) && plusOrMinus(rightSide) && !plusOrMinus(op[2])) ||
					(plusOrMinus(rightSide) && op[2] == '-')
				)
					solSteps[op[0]] = solSteps[op[0]] + op[2] + parenWrap(solSteps[op[1]]);
				else if (plusOrMinus(leftSide) && plusOrMinus(rightSide) && !plusOrMinus(op[2]))
					solSteps[op[0]] = parenWrap(solSteps[op[0]]) + op[2] + parenWrap(solSteps[op[1]]);
				else solSteps[op[0]] = solSteps[op[0]] + op[2] + solSteps[op[1]];
			}

			let fullSol: string = '';
			for (let sol of solSteps) if (sol.length > fullSol.length) fullSol = sol;

			if (!solutions.includes(fullSol)) solutions.push(fullSol);
		}
		return solutions;
	}

	function parenWrap(str: string) {
		return '(' + str + ')';
	}

	function firstArithmeticOp(str: string) {
		let f1 = '';
		let f2 = '';
		for (let i = str.length - 1; i >= 0; i--) {
			if (str[i] == ')') break;
			if (arithmeticOp(str[i])) f1 = str[i];
		}
		for (let i = 0; i <= str.length; i++) {
			if (str[i] == '(') break;
			if (arithmeticOp(str[i])) f2 = str[i];
		}
		if (plusOrMinus(f1)) return f1;
		if (plusOrMinus(f2)) return f2;
		return '';
	}

	function plusOrMinus(str: string) {
		if (str == '+' || str == '-') return true;
		return false;
	}

	function arithmeticOp(c: string) {
		if (c === '+' || c === '-' || c === '*' || c === '/') return true;
		return false;
	}
</script>
