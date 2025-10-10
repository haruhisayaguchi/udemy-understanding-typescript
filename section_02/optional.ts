function generateError(msg?: string) {
	throw new Error(msg);
}

generateError();

type User = {
	name: string;
	age: number;
	role?: 'admin' | 'guest';
}

let user: User = {
	name: "Max",
	age: 38
}

let input = '';
const didProvideInput = input ?? false;