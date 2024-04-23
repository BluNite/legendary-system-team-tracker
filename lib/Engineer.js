// Engineer class 
// import/require  Employee class here
const Employee = require('./Employee');
// extend Employee constructor-- github added to param
class Engineer extends Employee {
	constructor(name, id, email, github) {
		// super params from Employee constructor
		super(name, id, email);
		// github
		this.github = github;
		// role Engineer
		this.title = "Engineer";
	}

	//  add method for getGitHub
	getGitHub() {
		return this.github;
	}
}

// export Engineer class

module.exports = Engineer;
