const Employee = require("../library/Employee")

// test for Employee object
test("Can represent an instance of class Employee", () => {
	const e = new Employee();
	expect(typeof (e).toBe("object"));

});
//test for constructor 'name' argument

test("Can create an instance of name using constructor arguments", () => {
	const name = "Thomas";
	const e = new Employee(name);
	expect(e.name).toBe(name);
});
test("Can create an instance of id using using constructor arguments", () => {
	const testValue = 100;
	const e = new Employee("Foo", testValue);
	expect(e.id).toBe(testValue)
});