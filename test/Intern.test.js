const Intern = require('../lib/Intern');
// Intern object test --checked passed



// test for Intern constructor set school to object --checked passed
test("should return Intern 'school' argument using constructor", () => {
	const testVal = "ColumbiaUCB";
	const e = new Intern("Fizz", 50, "internEmail.com", testVal);
	expect(e.school).toBe(testVal);
});

// test for getRole() should return 'Intern' --checked passed
test("getRole() should return \"Intern\"", () => {
	const testVal = "Intern";
	const e = new Intern("Fizz", 50, "internEmail.com", "ColumbiaUCB");
	expect(e.getRole()).toBe(testVal);
});

test("Should get school using getSchool()", () => {
	const testVal = "MIT";
	const e = new Intern("Fizz", 50, "testEmail@test.com", testVal);
	expect(e.getSchool()).toBe(testVal);
})

