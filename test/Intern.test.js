const Intern = require('../lib/Intern');
// Intern object test --checked passed
test("should represent an instance of Intern class object", () => {
	const e = new Intern();
	expect(typeof (e)).toBe("object");
});