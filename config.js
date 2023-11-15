const fs = require("fs");
const ngConstant = require("ng-constant");
const path = require("path");
require("dotenv").config();

const getOnlyValidVarEnv = (inputObject, startWith) => {
  const outputObject = {};

  for (const key in inputObject) {
    if (key.startsWith(startWith)) {
      outputObject[key] = inputObject[key];
    }
  }

  return outputObject;
};

const config = {
  OPLX_ENV: {
    ...getOnlyValidVarEnv(process.env, "OPLX"),
  },
};

fs.writeFileSync(
  path.resolve(__dirname, "src/app/constants.module.js"),
  ngConstant({
    name: "app.constants",
    constants: config,
    deps: [],
    wrap: false,
  }),
  "utf8"
);
