const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const nullLoader = require.resolve("null-loader");

  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      devtool: false, // Disables source map generation - comment out to debug if needed//
    });
  }
  //

  // Skip problematic native modules like `canvas` during server-side rendering
  if (
    stage === "build-html" ||
    stage === "develop-html" ||
    stage === "build-ssr" ||
    stage === "develop-ssr"
  ) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: nullLoader,
          },
          {
            test: /\.node$/,
            use: nullLoader,
          },
        ],
      },
    });
  }

  // Optional: always add Webpack Bundle Analyzer
  actions.setWebpackConfig({
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "public/bundle-report.html",
        openAnalyzer: false,
      }),
    ],
  });
};
