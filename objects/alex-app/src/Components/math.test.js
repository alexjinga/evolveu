
import Calc from "./Math";

const obj = new Calc

test('Test the math functions', () => {
	console.log('Hello World');
	expect(obj.sum(2,3)).toBe(5);
	expect(obj.substruct(3,1)).toBe(2);
	expect(obj.multiply(2,2)).toBe(4);
	expect(obj.divide(4,2)).toBe(2);
});
