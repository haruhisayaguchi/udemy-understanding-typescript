type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'name';

function getProp<T extends object>(obj: T, key: keyof T) {
	const val = obj[key];
	if (val === undefined || val === null) {
		throw new Error('Accessing undefined or null value.')
	}
}

getProp({ name: 'Max', age: 12 }, "age")