/*class  for Employee*/
class Employee {
	// constructor params id, name, email, role = "Employee"
	constructor(id, name, email) {
		this.id = id;
		this.name = name
		this.email = email;
		this.role = "Employee"
	}
	// constructor methods for id, name, email, employee
	// get id

	getId() {
		return this.id;
	}
	// get name
	getName() {
		return this.name;
	}
	// get email
	getEmail() {
		return this.email;
	}
	//get role will return 'Employee'
	getRole() {
		return this.role = "Employee";
	}
}
// export Employee class
module.exports = Employee;



