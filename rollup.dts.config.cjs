const { dts } = require("rollup-plugin-dts");
const packageJson = require("./package.json");

module.exports = {
  input: "dist/types/index.d.ts",
  output: [{ file: "dist/index.d.ts", format: "esm" }],
  plugins: [dts()],
};
