const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { makeDir } = require("../utils");

const pwd = process.cwd();

const tokens = {
  name: "ComponentName",
};

const action = (name, opts) => {
  console.log(opts);
  const s = JSON.parse(
    fs.readFileSync(path.resolve(pwd, "sveltdation.config.json"))
  );

  const dirName = path.resolve(pwd, s.dirs.components, name);
  makeDir(dirName, name, opts.force);

  const componentTemplate = fs
    .readFileSync(path.resolve(__dirname, "template.svelte"))
    .toString()
    .split(tokens.name)
    .join(name);

  console.log(dirName);

  return;
};

module.exports = action;
