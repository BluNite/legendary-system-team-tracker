const Employee = require("../lib/Employee")

// test to establish Employee object-- check passed
test("Should represent an instance of class Employee", () => {
	const e = new Employee();
	expect(typeof (e)).toBe("object");
});