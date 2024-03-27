const Intern = require('../lib/Intern');
// Intern object test --checked passed
test("should represent an instance of Intern class object", () => {
	const e = new Intern();
	expect(typeof (e)).toBe("object");
});

// test for Intern constructor set school to object --checked passed
test("should return Intern 'school' argument using constructor", () => {
	const testVal = "ColumbiaUCB";
	const e = new Intern("Fizz", 50, "internEmail.com", testVal);
	expect(e.school).toBe(testVal);
});

// test for getRole() should return 'Intern' --checked passed
test("getRole() should return " / Intern / "", () => {
	const testVal = "Intern";
	const e = new Intern("Fizz", 50, "internEmail.com", "ColumbiaUCB");
	expect(e.getRole()) === testVal;
});

