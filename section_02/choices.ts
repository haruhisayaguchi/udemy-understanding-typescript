// enum Role {
// 	Admin,
// 	Editor,
// 	Guest
// }

type Role = 'admin' | 'editor' | 'guest';
type User = {
	name: string;
	age: number;
	role: Role;
	permissions: string[]
}

let userRole: Role = 'admin';
