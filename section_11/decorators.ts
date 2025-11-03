function logger<T extends new (...args: any[]) => any>(
	target: T,
	ctx: ClassDecoratorContext
) {
	console.log('logger decorator')
	console.log(target)
	console.log(ctx)

	return class extends target {
		constructor(...args: any[]) {
			super(...args);
			console.log('class constructor');
			console.log(this)
		}
	}
}

function autobind(
	target: (...args: any[]) => any,
	ctx: ClassMethodDecoratorContext
) {
	ctx.addInitializer(function (this: any) {
		this[ctx.name] = this[ctx.name].bind(this);
	})

	return function (this: any) {
		console.log('Executing original function')
		target.apply(this);
	}
}

function replacer<T>(initialValue: T) {
	return function replacerDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {
		console.log(target);
		console.log(ctx);

		return function () {
			console.log(initialValue);
			return initialValue;
		}
	}
}

@logger
class Person {
	@replacer('Haruhisa')
	name = 'Max';

	@autobind
	greet() {
		console.log('Hi, I am ' + this.name)
	}
}

const max = new Person();
const greet = max.greet;
greet();
