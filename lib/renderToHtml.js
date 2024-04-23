const path = require("path");
const fs = require('fs');


// template directory
const template_Dir = path.resolve(__dirname, "../templates");


// employee roster push to new object htmlObj
const renderToHtml = (employees) => {
	const htmlObj = [];
	// push manager
	htmlObj.push(
		employees
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => renderManager(manager))
	);

	// push engineer
	htmlObj.push(
		employees
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => renderEngineer(engineer))
	);

	// push intern
	htmlObj.push(
		employees
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => renderIntern(intern))
	);
	// render to main and join()
	return renderMain(htmlObj.join(""));
};


// will render manager template
const renderManager = (manager) => {
	let managerTemplate = fs.readFileSync(
		path.resolve(template_Dir, "ManagerTemp.html"),
		"utf8"
	);
	managerTemplate = replacePlaceholders(managerTemplate, "name", manager.getName());
	managerTemplate = replacePlaceholders(managerTemplate, "role", manager.getRole());
	managerTemplate = replacePlaceholders(managerTemplate, "email", manager.getEmail());
	managerTemplate = replacePlaceholders(managerTemplate, "id", manager.getId());
	managerTemplate = replacePlaceholders(
		managerTemplate,
		"officeNumber",
		manager.getOfficeNumber()
	);
	return managerTemplate;
};


// will render engineer template
const renderEngineer = (engineer) => {
	let engineerTemplate = fs.readFileSync(
		path.resolve(template_Dir, "EngineerTemp.html"),
		"utf8"
	);
	engineerTemplate = replacePlaceholders(engineerTemplate, "name", engineer.getName());
	engineerTemplate = replacePlaceholders(engineerTemplate, "role", engineer.getRole());
	engineerTemplate = replacePlaceholders(engineerTemplate, "email", engineer.getEmail());
	engineerTemplate = replacePlaceholders(engineerTemplate, "id", engineer.getId());
	engineerTemplate = replacePlaceholders(engineerTemplate, "github", engineer.getGitHub());
	return engineerTemplate;
};

// will render intern template

const renderIntern = (intern) => {
	let internTemplate = fs.readFileSync(
		path.resolve(template_Dir, "InternTemp.html"),
		"utf8"
	);
	internTemplate = replacePlaceholders(internTemplate, "name", intern.getName());
	internTemplate = replacePlaceholders(internTemplate, "role", intern.getRole());
	internTemplate = replacePlaceholders(internTemplate, "email", intern.getEmail());
	internTemplate = replacePlaceholders(internTemplate, "id", intern.getId());
	internTemplate = replacePlaceholders(internTemplate, "school", intern.getSchool());
	return internTemplate;
};

// will render main template
const renderMain = (htmlObj) => {
	const mainTemplate = fs.readFileSync(
		path.resolve(template_Dir, "MainTemp.html"),
		"utf8"
	);
	return replacePlaceholders(mainTemplate, "team", htmlObj);
};
// replace placeholder takes template placeholder and value
const replacePlaceholders = (template, placeholder, value) => {
	const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
	return template.replace(pattern, value);
};

// export renderToHtml
module.exports = renderToHtml;