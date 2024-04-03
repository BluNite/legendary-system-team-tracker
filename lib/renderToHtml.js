const path = require("path");
const fs = require('fs');
// template directory
const template_Dir = path.resolve(__dirname, "../templates");


// employee roster object push to new object processHtml
const renderEmployees = (employeeObj) => {
	const processHtml = [];
	// filter object for team role and map each entry to be rendered

	// Manager
	processHtml.push(
		employeeObj
			.filter((teamRole) => teamRole.getRole === "Manager").map((manager) => renderMangerTemp(manager))
	);

	// Engineer
	processHtml.push(
		employeeObj
			.filter((teamRole) => teamRole.getRole === "Engineer").map((engineer) => renderEngineerTemp(engineer))
	);

	// Intern
	processHtml.push(
		employeeObj
			.filter((teamRole) => teamRole.getRole === "Intern").map((intern) => renderInternTemp(intern))
	);

	// render to main and join the newly created obj 
	return renderMainTemp(processHtml.join(""));
};

// get the manager template to change placeholder values
const renderMangerTemp = (manager) => {
	let getTemplate = fs.readFileSync(path.resolve(template_Dir, "ManagerTemp.html"), "utf-8");
	getTemplate = processPlaceholder(getTemplate, "name", manager.getName());
	getTemplate = processPlaceholder(getTemplate, "role", manager.getRole());
	getTemplate = processPlaceholder(getTemplate, "email", manager.getEmail());
	getTemplate = processPlaceholder(getTemplate, "id", manager.getId());
	getTemplate = processPlaceholder(getTemplate, "officeNumber", manager.getOfficeNumber());
	return getTemplate;
}

const renderEngineerTemp = (engineer) => {
	let getTemplate = fs.readFileSync(path.resolve(template_Dir, "EngineerTemp.html"), "utf-8");

}

const renderInternTemp = (intern) => {
	let getTemplate = fs.readFileSync(path.resolve(template_Dir, "InternTemp.html"), "utf-8");

};



const renderMainTemp = (processHtml) => {
	const getTemplate = fs.readFileSync(
		path.resolve(template_Dir, "MainTemp.html"), "utf-8"
	);
	// replace placeholder
	return processPlaceholder(getTemplate, "team", processHtml)
};

// replace placeholder function
const processPlaceholder = (getTemplate, placeholder, value) => {
	const newRegExp = new RegExp("{{" + placeholder + "}}", "gm");
	return getTemplate.replace(pattern, value)
}