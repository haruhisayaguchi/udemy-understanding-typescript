const inputElement = document.getElementById("user-name") as HTMLInputElement | null;

// if (!inputElement) {
// 	throw new Error('Element not found!');
// }

console.log(inputElement?.value)