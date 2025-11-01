type StringArray = string[];
// type ElementType<T extends any[]> = T[number];

// type Example1 = ElementType<StringArray>

let text = 'Hello';

// type Example2 = ElementType<typeof text>

type GetElementType<T> = T extends any[] ? T[number] : never;
type Example1 = GetElementType<StringArray>;
type Exmaple2 = GetElementType<typeof text>

type FullnamePerson = { firtsName: string; lastName: string };
type FullnameOrNever<T> = T extends FullnamePerson ? string : never;

function getFullname<T extends object>(person: T): FullnameOrNever<T> {
	if (
		'firstName' in person &&
		'lastName' in person &&
		person.firstName &&
		person.lastName
	) {
		return `${person.firstName} ${person.lastName}` as FullnameOrNever<T>;
	}
	throw new Error('No first name and / or last name found.')
}

const name1 = getFullname({});
const name2 = getFullname({ firstName: 'Max', lastName: 'Muller' })