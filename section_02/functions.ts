function add(a: number, b: number) {
	return a + b;
}

function log(message: string) {
	console.log(message);
}

function logAndThrow(errorMessage: string): never {
	console.log(errorMessage);
	throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
	console.log(msg);
}

function performJob(callback: (m: string) => void) {
	// main job
	callback("Job done!");
}

performJob(logMsg);

type User = {
	name: string;
	age: number;
	greet: () => string
}

let user: User = {
	name: 'Max',
	age: 39,
	greet() {
		console.log('Hello there!');
		return this.name;
	}
}