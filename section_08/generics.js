var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var names = ['Max', 'Anna'];
var store = {};
store.name = 'Max';
store.isInstructor = true;
var nameStore = {};
function merge(a, b) {
    return [a, b];
}
var ids = merge(1, "Max");
function mergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = mergeObj({ name: 'Max' }, { name: 12 });
console.log(merged);
