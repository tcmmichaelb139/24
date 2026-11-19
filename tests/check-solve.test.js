import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { createServer } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const server = await createServer({
	configFile: false,
	plugins: [svelte({ configFile: false, preprocess: vitePreprocess(), hot: false })],
	optimizeDeps: { noDiscovery: true, include: [] },
	server: { middlewareMode: true },
	appType: 'custom'
});
after(() => server.close());

const { CheckSolve } = await server.ssrLoadModule('/src/lib/functions/CheckSolve.svelte');

test('accepts the screenshot solution without a floating-point remainder', () => {
	assert.equal(String(CheckSolve('8/(4/3-1)')), '24');
});

test('evaluates solutions requiring repeating intermediate fractions exactly', () => {
	assert.equal(String(CheckSolve('8/(3-8/3)')), '24');
});

test('preserves ordinary results and custom goals', () => {
	assert.equal(String(CheckSolve('(1+3)*(8-4)')), '16');
	assert.equal(String(CheckSolve('6/(1-3/4)')), '24');
	assert.equal(String(CheckSolve('8/(4/3-1)+1')), '25');
	assert.equal(String(CheckSolve('1/3')), '0.3333333333333333');
});

test('keeps invalid and incomplete input out of the answer check', () => {
	assert.equal(CheckSolve(''), 'Check');
	assert.equal(CheckSolve('8/('), '...');
	assert.equal(CheckSolve('sqrt(24)'), 'Failed To Parse');
	assert.notEqual(String(CheckSolve('8/(4/3-1)+1/1000000')), '24');
});
