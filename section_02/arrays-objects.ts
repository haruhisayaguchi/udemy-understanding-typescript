let possibleResults: [number, number];

possibleResults = [-1, 1];
// possibleResults = [-1, 1, 5];

let user: {
	name: string;
	age: number | string;
	hobbies: string[];
	role: {
		description: string;
		id: number;
	}
} = {
	name: "Max",
	age: 32,
	hobbies: ['sports', 'cooking'],
	role: {
		description: 'admin',
		id: 5
	}
};

let val: {} = 'is a value';

let data: Record<string, number | string>;

data = {
	entry1: 1,
	entry2: 'text'
}