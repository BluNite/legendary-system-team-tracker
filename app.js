//  node modules
const fs = require('fs');
const path = require('path');
//  Inquirer package
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');


// use Inquire to create collect team member info
// create objects for team member 
const teamData = [];

function startIntake() {
	// start manager input
	managerIntake();
};
// Manager inquire intake
function managerIntake() {
	inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is the team Manager's name?"
		},
		{
			type: "input",
			name: "id",
			message: "Manager's Id ",
			number: "",
		},
		{
			type: "input",
			name: "email",
			message: "Manager's Email",
			email: "",
		},
		{
			type: "input",
			name: "officeNumber",
			message: "Manager's office number"
		},


	])
		.then((val) => {
			const manager = new Manager(
				val.name,
				val.id,
				val.email,
				val.officeNumber
			);
			// table for manager intake
			console.table(manager);
			// add manager data to 'teamData obj.
			teamData.push(manager);
			//check for teamData in console
			console.log(teamData);
		})
};
// invoke for intake start inquirer
startIntake();

