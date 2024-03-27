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

// test to set constructor argument 'id' --check passed test
test("Should set id  using constructor argument 'id' ", () => {
	const testVal = 50;
	const e = new Employee("Fizz", testVal);
	expect(e.id) === (testVal);

});

// test to set constructor argument 'email' --check passed test

test("Should set email constructor argument 'email' ", () => {
	const testVal = "MacTheFry@fakeMail.com";
	const e = new Employee("Bob", 4, testVal);
	expect(e.email) === (testVal);

});

// test should produce 'name' using getName()
test("Should get name using getName()", () => {
	const testVal = "Bob";
	const e = new Employee(testVal);
	expect(e.getName()) === (testVal);
});

// test should produce 'id' using getId() --check passed test
test("Should get 'id' using getId()", () => {
	const testVal = 55;
	const e = new Employee("Fizz", testVal);
	expect(e.getId()) === (testVal);
});

// test should produce 'email' using getMail() --check passed test
test("Should get 'email' using getEmail()", () => {
	const testVal = "MacTheFry@fakeMail.com";
	const e = new Employee("FIzz", 50, testVal);
	expect(e.getEmail()) === (testVal);
});

// test should produce role using getRole() --check passed test
test("Should return /'Employee'/ using getRole()", () => {
	const testVal = "Employee";
	const e = new Employee("Fizz", "MacTheFry@fakeMail.com", 50);
	expect(e.getRole()) === (testVal);
});