const nodeResolve = require("rollup-plugin-node-resolve");
const { banner, plugins } = require("./rollup");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.aio.js",
    format: "umd",
    name: "clone",
    banner,
  },
  plugins: [
    ...plugins,
    nodeResolve({
      main: true,
      extensions: [".js"],
    }),
  ],
};
