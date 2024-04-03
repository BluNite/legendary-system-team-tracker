//  node modules
const fs = require('fs');
const path = require('path');
//  Inquirer package
const inquirer = require('inquirer');
// lib files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
// directory and path to main.html
const dist_output = path.resolve(__dirname, "dist");
const distPath = path.join(dist_output, "main.html");
// returns the path to file dist/main.html
console.log(distPath);
// team members roster stored as an object
const teamRoster = [];

// Team Objects created with Inquirer
// Manager
function managerObject() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter manager's name",


			},
			{
				type: "input",
				name: "id",
				message: "Enter manager's ID number:",
			},
			{
				type: "input",
				name: "email",
				message: "Manager's email address:"
			},
			{
				type: "input",
				name: "github",
				message: "What is the manager's GitHub Username?",
			},
		])
		.then((val) => {
			const manager = new Manager(val.name, val.id, val.email, val.github);
			console.table(manager);
			teamRoster.push(manager);
			addToRoster();

		})
};
// Engineer

function engineerObject() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter engineer's name",


			},
			{
				type: "input",
				name: "id",
				message: "Enter engineer's ID number:",
			},
			{
				type: "input",
				name: "email",
				message: "Engineer's email address:"
			},
			{
				type: "input",
				name: "github",
				message: "What is the engineer's GitHub Username?",
			},
		])
		.then((val) => {
			const engineer = new Engineer(val.name, val.id, val.email, val.github);
			console.table(engineer);
			teamRoster.push(engineer);
			addToRoster()
		})
};


// Intern
function internObject() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter engineer's name",


			},
			{
				type: "input",
				name: "id",
				message: "Enter engineer's ID number:",
			},
			{
				type: "input",
				name: "email",
				message: "Engineer's email address:"
			},
			{
				type: "input",
				name: "github",
				message: "What is the engineer's GitHub Username?",
			},
		])
		.then((val) => {
			const intern = new Intern(val.name, val.id, val.email, val.school);
			console.table(intern);
			teamRoster.push(intern);
			addToRoster();
		});
};

function addToRoster() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "Team_add_role",
				message: "Choose Engineer of Intern to add an employee to the Team Roster",
				choices: ["Engineer", "Intern", "No additions to employee roster"],
			},
		])
		.then((val) => {
			if (val.Team_add_role === "Engineer") {
				engineerObject();
			} else if (val.Team_add_role === "Intern") {
				internObject();
			} else {
				outputRoster();
			}
		});





	function outputRoster() {
		if (!fs.existsSync(template_Dir)) {
			console.log(' no file exists')
		} else {
			console.log('exists')
		}
	};
}