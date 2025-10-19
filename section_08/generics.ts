let names: Array<string> = ['Max', 'Anna'];

type DataStore<T> = {
	[key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
	return [a, b];
}

const ids = merge(1, "Max");

function mergeObj<T extends object>(a: T, b: T) {
	return { ...a, ...b };
}

const merged = mergeObj({ name: 'Max' }, { age: 12 })
console.log(merged);