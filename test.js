import test from 'ava';
import {getCpu, getRam, getNetInterfaces, getOsArch} from './index.js';

test('get cpus', t => {
	t.is(typeof getCpu(), 'object');
	t.is(typeof getCpu().threads, 'number');
	t.is(typeof getCpu().model, 'string');
	t.is(typeof getCpu().speed, 'number');
});

test('get ram', t => {
	t.is(typeof getRam(), 'object');
	t.is(typeof getRam().free, 'string');
	t.is(typeof getRam().total, 'string');
});

test('get os architecture', t => {
	t.is(typeof getOsArch().arch, 'string');
});

test('get net interfaces', t => {
	t.is(Array.isArray(getNetInterfaces()), true);
	t.is(typeof getNetInterfaces()[0].name, 'string');
	t.is(Array.isArray(getNetInterfaces()[0].addresses), true);
});
