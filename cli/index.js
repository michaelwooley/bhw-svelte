#! /usr/bin/env node
const { Command } = require("commander");

const initAction = require("./init");
const addComponentAction = require("./generate/component");

const program = new Command("sveltdation");
program.version("0.0.1");
program.description("svelte helper CLI");

program
  .command("init")
  .description("Initialize a bare svelte app")
  .action(initAction);

const genProgram = program
  .command("generate")
  .alias("g")
  .description(
    "Generate from template. Type `sveltdation g` to see subcommands"
  );

genProgram
  .command("component <name>")
  .alias("c")
  .option("-f, --force", "Generate even if relevant files already exist", false)
  .description("Generate a new component with story in your components module.")
  .action(addComponentAction);

program.parse(process.argv);
