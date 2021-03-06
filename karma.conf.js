module.exports = function(config) {
  config.set({
    basePath: "./",
    reporters: ["progress", "coverage", "coveralls"],
    preprocessors: {
      "**/tags/**/*.js": "coverage"
    },
    files: [
      "node_modules/ckeditor/ckeditor.js",
      "node_modules/jquery/dist/jquery.js",
      {
        pattern: "node_modules/ckeditor/lang/*.js",
        watched: false,
        included: false,
        served: true
      },
      {
        pattern: "node_modules/ckeditor/config.js",
        watched: false,
        included: false,
        served: true
      },
      {
        pattern: "node_modules/ckeditor/styles.js",
        watched: false,
        included: false,
        served: true
      },
      {
        pattern: "node_modules/ckeditor/contents.css",
        watched: false,
        included: false,
        served: true
      },
      {
        pattern: "node_modules/ckeditor/skins/moono-lisa/**/*",
        watched: false,
        included: false,
        served: true
      },
      {
        pattern: "node_modules/ckeditor/plugins/**/*",
        watched: false,
        included: false,
        served: true
      },
      {
        pattern: "tags/**/*",
        watched: true,
        included: false,
        served: true
      },
      "test/**/*.js"
    ],
    coverageReporter: {
      dir: "coverage/",
      reporters: [
        { type: "html", subdir: "report-html" },
        { type: "lcov", subdir: "report-lcov" },
        { type: "text" }
      ]
    },
    autoWatch: true,
    frameworks: ["jasmine-jquery", "jasmine"],
    browsers: ["ChromeHeadless"],
    plugins: [
      "karma-chrome-launcher",
      "karma-jasmine-jquery",
      "karma-jasmine",
      "karma-coverage",
      "karma-coveralls"
    ]
  });
};
