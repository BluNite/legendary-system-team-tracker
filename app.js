//  node modules
const fs = require('fs');
const path = require('path');
//  Inquirer package
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");

// use Inquire to create collect team member info
// create objects for team member 
const teamData = [];

function startIntake() {
	// start manager input
	//managerIntake();
	internIntake();

};
/* Manager inquire intake
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
		});
};*/
// engineer intake inquirer
function engineerIntake() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the Engineer's name?",
			},
			{
				type: "input",
				name: "id",
				message: "What is the Engineer's ID number?",
			},
			{
				type: "input",
				name: "email",
				message: "What is the Engineer's email address?",
			},
			{
				type: "input",
				name: "github",
				message: "What is the Engineer's GitHub Username?",
			},

		])
		.then((val) => {
			// ref Engineer constructor
			const engineer = new Engineer(val.name, val.id, val.email, val.github);
			// table for engineer object
			console.table(engineer);
			// push to team object
			teamData.push(engineer);
			// check teamData in console
			console.log(teamData);
			// run EngineerIntake func for check



		});


};

function internIntake() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is Intern's name?",
			},
			{
				type: "input",
				name: "id",
				message: "What is Intern's ID number",
			},
			{
				type: "input",
				name: "email",
				message: "What is Intern's email address?",
			},
			{
				type: "input",
				name: "school",
				message: "What school did Intern attend or is presently enrolled?"
			},
		])
		.then((val) => {
			// ref Intern constructor
			const intern = new Intern(val.name, val.id, val.email, val.school);
			//create table
			console.table(intern);
			// push intern to teamDAta object
			teamData.push(intern);
			//check in console
			console.log(teamData);
		});
}

// invoke for intake start inquirer
startIntake();


