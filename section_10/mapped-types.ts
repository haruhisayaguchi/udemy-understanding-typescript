type Operations = {
	add: (a: number, b: number) => number;
	subtract: (a: number, b: number) => number;
};

type Results<T> = {
	readonly [Key in keyof T]?: number;
}

let mathOperations: Operations = {
	add(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	}
}

let mathResults: Results<Operations> = {
	add: mathOperations.add(1, 2),
	subtract: mathOperations.subtract(5, 2)
}
