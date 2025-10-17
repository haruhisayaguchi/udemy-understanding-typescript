class User {
	readonly hobbies: string[] = [];

	constructor(public name: string, public age: number) {
	}
}

const max = new User("Max", 33);


console.log(max);