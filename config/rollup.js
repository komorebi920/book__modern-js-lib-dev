const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const { name, version } = require("../package.json");
const banner = `/*
 * ${name} ${version}
 * Licensed under MIT
 */
`;

function getCompiler(opt) {
  return babel({
    babelrc: false,
    runtimeHelpers: true,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers:
              "last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10",
            node: "0.12",
          },
          modules: false,
          loose: true,
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3,
        },
      ],
    ],
    exclude: "node_modules/**",
  });
}

const plugins = [getCompiler(), commonjs()];

module.exports = { banner, plugins };
