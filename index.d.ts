export function getCpu(): {
	threads: number;
	model: string;
	speed: number;
};
export function getRam(): {
	total: string;
	free: string;
};
export function getOsArch(): {
	arch: string;
};
export function getNetInterfaces(): Array<{
	name: string;
	addresses: any;
	internal?: undefined;
} | {
	name: string;
	addresses: string;
	internal: boolean;
}>;
