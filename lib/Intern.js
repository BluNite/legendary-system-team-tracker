// require/import Employee class
const Employee = require("./Employee");
// create Intern class extend Employee class
class Intern extends Employee {
	// added school param to constructor
	constructor(name, id, email, school) {
		// super - Employee class
		super(name, id, email);
		// school
		this.school = school;
		//  Intern
		this.title = "Intern";
	}
	// add get school method
	getSchool() {
		return this.school;
	}
}
// export Intern class here
module.exports = Intern;

