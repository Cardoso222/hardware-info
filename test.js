import test from 'ava';
import {getCpus, getRam} from './index.js';

test('get cpus', t => {
	t.is(typeof getCpus(), 'object');
	t.is(typeof getCpus().total, 'number');
	t.is(typeof getCpus().model, 'string');
	t.is(typeof getCpus().speed, 'number');
});

test('get ram', t => {
	t.is(typeof getRam(), 'object');
	t.is(typeof getRam().free, 'string');
	t.is(typeof getRam().total, 'string');
});
