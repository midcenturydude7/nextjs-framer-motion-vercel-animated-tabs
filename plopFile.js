function config(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("component", {
    description: "A component generator for the project",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter component name: ",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/components/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
    ],
  });

  plop.setGenerator("directory", {
    description: "A directory generator for the project",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter directory name: ",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/{{camelCase name}}/page.tsx",
        templateFile: "templates/directory.hbs",
      },
    ],
  });

  plop.setWelcomeMessage(
    "Welcome to the generator. Run with -- " +
      "to bypass prompts and use argv: `plop <generator-name> -- --name=example`",
  );

  // Get arguments passed after `--`
  const argv = require("minimist")(process.argv.slice(2));

  // Override prompts with arguments if they exist
  plop.setPrompt("inquirer", (questions) => {
    questions.forEach((q) => {
      if (argv[q.name]) {
        q.default = argv[q.name];
      }
    });
    return inquirer.prompt(questions);
  });
}

module.exports = config;
