import os from 'node:os';

const cpus = os.cpus();

export function getCpu() {
	return {
		threads: Number.parseInt(cpus.length, 10),
		model: `${cpus[0].model}`,
		speed: Number.parseInt(cpus[0].speed, 10),
	};
}

export function getRam() {
	return {
		total: formatBytes(os.totalmem()),
		free: formatBytes(os.freemem()),
	};
}

export function getOsArch() {
	return {
		arch: `${os.arch()}`,
	};
}

export function getNetInterfaces() {
	const interfaces = os.networkInterfaces();
	const response = Object.keys(interfaces).map(element => {
		if (Array.isArray(interfaces[element])) {
			return {
				name: element,
				addresses: interfaces[element].map(_interface => ({
					path: _interface.address,
					internal: _interface.internal,
				})),
			};
		}

		return {
			name: element,
			addresses: interfaces[element].address,
		};
	});

	return response;
}

function formatBytes(bytes) {
	const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];

	let i = 0;
	while (bytes >= 1024 && i < units.length - 1) {
		bytes /= 1024;
		i++;
	}

	return `${bytes.toFixed(2)} ${units[i]}`;
}
