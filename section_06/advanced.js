var User = /** @class */ (function () {
    function User() {
        this._firstName = "";
        this._lastName = "";
    }
    Object.defineProperty(User.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name.');
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name.');
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var max = new User();
max.firstName = "Max";
max.lastName = "Muller";
console.log(max.fullName);
