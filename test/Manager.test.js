const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// Test set 'officeNumber' obj using constructor argument
test('Should set office number using constructor argument', () => {
	const testVal = 200;
	const e = new Manager("Fizz", 50, "Manager123@email.com", testVal);
	expect(e.officeNumber).toBe(testVal);

});

// test getRole() should return 'Manager' 
test("getRole() should return \"Manager\"", () => {
	const testVal = "Manager";
	const e = new Manager("Fizz", 50, "Manager123@email.com", 200);

	expect(e.getRole()).toBe(testVal);
});

// test getOfficeNumber() should return officeNumber argument
test("should set office number using getOffice()", () => {
	const testVal = 200;
	const e = new Manager("Fizz", 50, "Manager123@email.com", testVal);
	expect(e.getOfficeNumber()).toBe(testVal);
});