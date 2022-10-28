const {
  setHeadlessWhen
} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9000',
      show: true,
      browser: 'chromium', //baru
      windowSize: '1280x720',
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'resto-catalogue',
  plugins: {
    pauseOnFail: {}, //baru
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};



// ===============
// const { setHeadlessWhen } = require('@codeceptjs/configure');

// // turn on headless mode when running with HEADLESS=true environment variable
// // export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// exports.config = {
//   tests: 'e2e/**/*.spec.js',
//   output: 'e2e/outputs',
//   helpers: {
//     Playwright: {
//       url: 'http://localhost:9000',
//       show: true,
//       browser: 'chromium',
//       // restart: true,
//     },
//   },
//   include: {
//     I: './steps_file.js',
//   },
//   bootstrap: null,
//   mocha: {},
//   name: 'restaurant-apps',
//   plugins: {
//     pauseOnFail: {},
//     retryFailedStep: {
//       enabled: true,
//     },
//     tryTo: {
//       enabled: true,
//     },
//     screenshotOnFail: {
//       enabled: true,
//     },
//   },
// };