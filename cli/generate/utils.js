const fs = require("fs");
const chalk = require("chalk");

const makeDir = (dirName, name, force) => {
  let out = true,
    msg;
  if (fs.existsSync(dirName)) {
    if (!force) {
      msg = chalk`{red.bold ERROR:} {bold Component "${name}" already exists.}
    See ${dirName}
      
    To overwrite the existing directory call:
      
        sveltdation generate component ${name} --force
          `;

      out = false;
    } else {
      msg = chalk`\t{yellowBright.bold ⚠ WARNING:} May overwrite files in ${dirName}`;
    }
  } else {
    fs.mkdirSync(dirName);
    msg = chalk`\t{blue.bold ✔ CREATED DIR:} ${dirName}`;
  }
  console.log(msg);
  if (!out) process.exit(1);

  return out;
};

module.exports = { makeDir };
