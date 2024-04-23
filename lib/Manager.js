// Create and Export Manager class
const Employee = require("./Employee");

// class Manager extend Employee
class Manager extends Employee {
	// constructor
	constructor(name, id, email, officeNumber) {
		// super constructor Employee 
		super(name, id, email);
		// office number
		this.officeNumber = officeNumber;
		// title Manager
		this.title = "Manager";
	}
	// get office number 
	getOfficeNumber() {
		return this.officeNumber;
	}
}
// export the Manager class here
module.exports = Manager;