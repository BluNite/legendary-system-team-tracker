const Employee = require("../lib/Employee")

// test to establish Employee object-- check passed
test("Should represent an instance of class Employee", () => {
	const e = new Employee();
	expect(typeof (e)).toBe("object");
});

// test to set constructor argument 'name'  -- check passed
test("Should set name using constructor argument", () => {
	const name = "Bob";
	const e = new Employee(name);
	expect(e.name) === (name);

});

// test to set constructor argument 'id' 
test("Should set id  using constructor argument 'id' ", () => {
	const testVal = 50;
	const e = new Employee("Fizz", testVal);
	expect(e.id) === (testVal);

});

// test to set constructor argument 'email'

test("Should set email constructor argument 'email' ", () => {
	const testVal = "MacTheFry@fakeMail.com";
	const e = new Employee("Bob", 4, testVal);
	expect(e.email) === (testVal);

});