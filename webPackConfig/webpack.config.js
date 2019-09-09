const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const DotEnv = require("./plugins/DotEnv");

const patterns = [{
  to: path.resolve(process.cwd(), 'build'),
  from: path.resolve(process.cwd(), 'public'),
}]

module.exports = options => (
  {   
        mode: options.mode,
        entry: options.entry,
        /* eslint-disable prefer-object-spread */
        output: Object.assign(
          {
            // Compile into js/build.js
            path: path.resolve(process.cwd(), "build"),
            publicPath: "/",
          },
          options.output
        ),
        optimization: options.optimization,
        module:{
          rules: [
              {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  use:  'babel-loader',
                  
              },
              {
                test: /\.html$/,
                use: "html-loader",
              },
          ]
      },
      plugins: options.plugins.concat([
        new DotEnv(),
        /* Copies individual files or entire directories, which already exist, to the build directory */
        new CopyPlugin(patterns),
      ]),
      resolve: {
        modules: ["node_modules", "src"],
        extensions: [".js"],
      },
      devtool: options.devtool,
      target: 'web',
      performance: options.performance || {},
    }
);