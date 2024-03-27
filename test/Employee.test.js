const Employee = require("../lib/Employee")

// test to establish Employee object-- check passed
test("Should represent an instance of class Employee", () => {
	const e = new Employee();
	expect(typeof (e)).toBe("object");
});

// test to set name constructor argument -- check passed
test("Should set name using constructor argument", () => {
	const name = "Bob";
	const e = new Employee(name);
	expect(e.name).toBe(name);

});

test("Should set id using constructor argument", () => {
	const testVal = 50;
	const e = new Employee("Fizz", testVal);
	expect(e.id).toBe(testVal);

});

