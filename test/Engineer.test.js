const Engineer = require('../lib/Engineer');

// test  set GitHub account using constructor --checked passed
test("Should set GitHub account using constructor", () => {
	const testVal = "GitHubUser";
	const e = new Engineer("Fizz", 50, "engineer@test.com", testVal);
	expect(e.github).toBe(testVal);
});



// test getRole() should return \"Engineer\"  --check passed
test("getRole() should return \"Engineer\"", () => {
	const testVal = "Engineer";
	const e = new Engineer("Fizz", 50, "engineer@test.com", "GitHubUser");
	expect(e.getRole()).toBe(testVal);
});


// test getGitHub() should return gitHub username"--check passed
test("getGitHub() should return gitHub userName", () => {
	const testVal = "engineer@test.com";
	const e = new Engineer("Fizz", 50, "engineer@test.com", testVal);
	expect(e.getGitHub()).toBe(testVal);
});
