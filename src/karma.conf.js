// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],
    customLaunchers: {
      "myheadlesschrome": {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    port: 9877,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['myheadlesschrome'],
    restartOnFileChange: false
  });
};
