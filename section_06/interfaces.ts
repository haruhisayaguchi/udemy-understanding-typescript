interface Authenticatable {
	email: string;
	password: string;

	login(): void;
	logout(): void;
}

interface Authenticatable {
	role: string;
}

let user: Authenticatable;

user = {
	email: 'test@example.com',
	password: 'password',
	login() {
		// check credentials
	},
	logout() {
		// clear session		
	},
	role: "admin"
}

class AuthenticatableUser implements Authenticatable {
	constructor(
		public userName: string,
		public email: string,
		public password: string,
		public role: string
	) { }
	login(): void {

	}
	logout(): void {

	}
}

function authenticate(user: Authenticatable) {
	user.login();
}

interface AuthenticatableAdmin extends Authenticatable {
	permission: "admin" | "administrator";
}